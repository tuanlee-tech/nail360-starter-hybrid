<?php

class ReactLoader {
    private static $manifest = null;

    /**
     * Đọc tệp manifest.json do Webpack sinh ra
     */
    private static function loadManifest() {
        if (self::$manifest === null) {
            // Kiểm tra môi trường (có thể dùng biến ENV hoặc hằng số)
            $isDev = (isset($_SERVER['SERVER_PORT']) && ($_SERVER['SERVER_PORT'] == '8000' || $_SERVER['SERVER_PORT'] == '9000'));
            
            $manifestPath = __DIR__ . '/../../public/assets/react/manifest.json';
            
            if (file_exists($manifestPath)) {
                $content = file_get_contents($manifestPath);
                self::$manifest = json_decode($content, true);
            } else {
                self::$manifest = [];
                // Báo lỗi ra error_log nếu không tìm thấy manifest ở production
                error_log("ReactLoader Error: Không tìm thấy thư mục build public/assets/react/manifest.json. Bạn đã chạy npm run build chưa?");
            }
        }
    }

    /**
     * In ra mã HTML <script> với đúng file hash từ manifest.
     * Tự động kiểm tra và in luôn file vendor.js nếu tồn tại (do Webpack tách ra).
     * 
     * @param string $entryName Tên component (ví dụ: 'home', 'booking')
     */
    public static function loadScripts($entryName) {
        self::loadManifest();
        $scriptsHTML = "";
        
        // Xác định prefix (Nếu là Dev thì load từ port 3000, nếu là Production thì load từ path local)
        // Mẹo: Nếu file manifest.json tồn tại nhưng ta muốn ép load từ 3000 thì dùng thêm logic check port
        $isDev = (isset($_SERVER['SERVER_PORT']) && ($_SERVER['SERVER_PORT'] == '8000' || $_SERVER['SERVER_PORT'] == '9000'));
        
        // 💡 GIẢI PHÁP: Nếu có manifest và không phải đang dev "nóng" ở cổng 3000, hãy dùng assets/react
        // (Trong môi trường của sếp, Port 8000 vẫn nên dùng assets/react nếu sếp đã chạy npm run build)
        $baseUrl = "/assets/react/";
        
        // Chỉ dùng port 3000 nòng nếu sếp CỐ Ý trỏ tới (Ví dụ qua biến ?dev=true)
        if ($isDev && isset($_GET['dev'])) {
            $baseUrl = "http://localhost:3000/";
        }

        // 1. Luôn load vendor bundle đầu tiên (nếu có)
        if (isset(self::$manifest['vendor.js'])) {
            $vendorFile = self::$manifest['vendor.js'];
            // Nếu dùng dev server 3000, thường vendor không có hash
            if (strpos($baseUrl, '3000') !== false) {
                $scriptsHTML .= "<script src=\"{$baseUrl}vendor.js\" defer></script>\n";
            } else {
                // Nếu path trong manifest đã có sẵn /assets/react/ (do publicPath trong webpack)
                // thì không cần nối thêm $baseUrl nữa.
                $fullUrl = (strpos($vendorFile, '/') === 0) ? $vendorFile : $baseUrl . $vendorFile;
                $scriptsHTML .= "<script src=\"{$fullUrl}\" defer></script>\n";
            }
        }

        // 2. Load file của Component chính
        $entryKey = $entryName . '.js';
        if (isset(self::$manifest[$entryKey])) {
            $mainFile = self::$manifest[$entryKey];
            if (strpos($baseUrl, '3000') !== false) {
                $scriptsHTML .= "<script src=\"{$baseUrl}{$entryKey}\" defer></script>\n";
            } else {
                $fullUrl = (strpos($mainFile, '/') === 0) ? $mainFile : $baseUrl . $mainFile;
                $scriptsHTML .= "<script src=\"{$fullUrl}\" defer></script>\n";
            }
        } else {
            $scriptsHTML .= "<!-- Lỗi: Không tìm thấy Component {$entryKey} trong manifest.json -->\n";
        }

        echo $scriptsHTML;
    }

    /**
     * In ra mã HTML <link rel="stylesheet"> cho các file CSS từ manifest.
     */
    public static function loadStyles($entryName = null) {
        self::loadManifest();
        $stylesHTML = "";
        $baseUrl = "/assets/react/";
        
        foreach (self::$manifest as $key => $file) {
            // Kiểm tra xem file có đuôi .css không
            if (pathinfo($key, PATHINFO_EXTENSION) === 'css') {
                // Nếu có entryName, chỉ lấy file có chứa tên entry đó
                if ($entryName === null || strpos($key, $entryName) !== false) {
                    $fullUrl = (strpos($file, '/') === 0) ? $file : $baseUrl . $file;
                    $stylesHTML .= "<link rel=\"stylesheet\" href=\"{$fullUrl}\">\n";
                }
            }
        }
        echo $stylesHTML;
    }

    /**
     * Render một mẩu HTML container cho React Island
     */
    public static function renderIsland($id, $class = "") {
        echo "<div id=\"{$id}\" class=\"{$class}\"></div>";
    }
}
