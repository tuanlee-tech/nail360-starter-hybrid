<?php

class SeoHelper {
    private $title;
    private $description;
    private $keywords;
    private $image;
    private $currentUrl;
    private $schemas = [];


    public function __construct($title = 'Nail360 Booking', $description = 'Hệ thống đặt lịch tiệm Nail hàng đầu') {
        $this->title = $title;
        $this->description = $description;
        $this->keywords = 'nail, booking, salon, beauty';
        $this->image = '/assets/images/default-og.jpg'; // Mặc định
        
        // Tự động lấy URL hiện tại
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
        $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
        $this->currentUrl = $protocol . $host . $uri;
    }

    public function setTitle($title) {
        $this->title = $title . ' - Nail360';
    }

    public function setDescription($description) {
        $this->description = $description;
    }

    public function setKeywords($keywords) {
        $this->keywords = $keywords;
    }

    public function setImage($imageUrl) {
        // Nếu là đường dẫn tương đối, biến nó thành tuyệt đối để SEO tốt hơn
        if (strpos($imageUrl, 'http') !== 0) {
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
            $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
            $imageUrl = $protocol . $host . $imageUrl;
        }
        $this->image = $imageUrl;
    }

    /**
     * Sinh thẻ HTML Meta chuẩn SEO và OpenGraph cho Facebook/Zalo
     */
    public function renderMetaTags() {
        $html = "
    <title>" . htmlspecialchars($this->title) . "</title>
    <meta name='description' content='" . htmlspecialchars($this->description) . "'>
    <meta name='keywords' content='" . htmlspecialchars($this->keywords) . "'>
    
    <!-- Open Graph (Facebook, Zalo) -->
    <meta property='og:title' content='" . htmlspecialchars($this->title) . "'>
    <meta property='og:description' content='" . htmlspecialchars($this->description) . "'>
    <meta property='og:image' content='" . htmlspecialchars($this->image) . "'>
    <meta property='og:url' content='" . htmlspecialchars($this->currentUrl) . "'>
    <meta property='og:type' content='website'>

    <!-- Twitter Cards -->
    <meta name='twitter:card' content='summary_large_image'>
    <meta name='twitter:title' content='" . htmlspecialchars($this->title) . "'>
    <meta name='twitter:description' content='" . htmlspecialchars($this->description) . "'>
    <meta name='twitter:image' content='" . htmlspecialchars($this->image) . "'>
        ";

        echo $html;
    }

    public function addSchema($data) {
        $this->schemas[] = $data;
    }

    public function renderSchemas() {
        foreach ($this->schemas as $schema) {
            echo "\n<script type=\"application/ld+json\">\n" . json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . "\n</script>\n";
        }
    }
}
