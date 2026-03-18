<?php

class AuthService {
    private static $secret = 'Nail360_Super_Secret_2024';
    
    /**
     * Giả lập cấp AccessToken (Lưu trong Memory phía Client)
     */
    public static function generateAccessToken($userId) {
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
        $payload = json_encode(['user_id' => $userId, 'exp' => time() + 300]); // 5 phút
        
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, self::$secret, true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        
        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    /**
     * Giả lập cấp RefreshToken lưu trong HttpOnly Cookie
     */
    public static function setRefreshToken($userId) {
        $token = bin2hex(random_bytes(32));
        // Trong thực tế sẽ lưu $token này vào Database kèm $userId
        
        // Set cookie bảo mật: HttpOnly, Secure, SameSite=Strict
        setcookie('refresh_token', $token, [
            'expires' => time() + (86400 * 30), // 30 ngày
            'path' => '/',
            'httponly' => true,
            'secure' => true,
            'samesite' => 'Strict'
        ]);
        
        return $token;
    }
}
