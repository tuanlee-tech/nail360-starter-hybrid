<?php
// Mock API Refresh Token
require_once __DIR__ . '/../includes/Services/AuthService.php';

header('Content-Type: application/json');

// Trong thực tế sẽ kiểm tra cookie 'refresh_token' ở đây
if (isset($_COOKIE['refresh_token'])) {
    $newToken = AuthService::generateAccessToken(123);
    echo json_encode([
        'status' => 'success',
        'accessToken' => $newToken
    ]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid refresh token']);
}
