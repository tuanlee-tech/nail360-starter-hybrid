<?php
// Tự động load Helper
require_once __DIR__ . '/../includes/Classes/SeoHelper.php';
require_once __DIR__ . '/../includes/Classes/ReactLoader.php';
require_once __DIR__ . '/../includes/Classes/DbHelper.php';

// Khởi tạo Helper
$seo = new SeoHelper();
$db = new DbHelper(); // Placeholder: Sau này thay bằng DB Connection thật

// Basic Router
$requestUri = isset($_SERVER['REQUEST_URI']) ? parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) : '/';

// Tách file để routing dễ dàng hơn
$viewFile = '';
if ($requestUri === '/' || $requestUri === '/index.php') {
    $seo->setTitle('Trang chủ - Nail360');
    $viewFile = __DIR__ . '/../views/pages/home.php';
} elseif ($requestUri === '/salons') {
    $seo->setTitle('Danh sách Salon - Nail360');
    $viewFile = __DIR__ . '/../views/pages/salons.php';
} elseif ($requestUri === '/learn') {
    $seo->setTitle('Tìm hiểu về Nail360 Hybrid Pro');
    $seo->setDescription('Khám phá sức mạnh của kiến trúc Hybrid: Tốc độ của React, Sức mạnh SEO của PHP.');
    $viewFile = __DIR__ . '/../views/pages/learn.php';
} elseif (preg_match('#^/salon/([^/]+)$#', $requestUri, $matches)) {
    // Bắt được slug từ URL (VD: /salon/luxury-nail-spa)
    $salonSlug = $matches[1];
    
    /**
     * 🛰️ PLACEHOLDER: MÔ PHỎNG FETCH DATA TỪ API/DB
     * Trong tương lai, đoạn này sẽ gọi tới API thật hoặc database.
     */
    $salonData = $db->getSalonBySlug($salonSlug);

    if ($salonData) {
        $seo->setTitle($salonData['name']);
        $seo->setDescription($salonData['slogan']);
        $seo->setImage($salonData['cover_image']);
        $seo->setKeywords($salonData['keywords']);
    } else {
        $seo->setTitle("Chi tiết Salon");
    }
    
    $viewFile = __DIR__ . '/../views/pages/salon-detail.php';
} else {
    $seo->setTitle('404 Not Found');
    http_response_code(404);
    echo "<h1>404 Không tìm thấy trang</h1>";
    exit;
}

// Bắt đầu render HTML
require_once __DIR__ . '/../views/layout/header.php';
require_once $viewFile;
require_once __DIR__ . '/../views/layout/footer.php';
