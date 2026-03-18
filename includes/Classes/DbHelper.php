<?php

/**
 * 🗄️ DB HELPER (MOCK)
 * Trong thực tế, class này sẽ kết nối tới MySQL/PostgreSQL.
 * Hiện tại, nó phục vụ việc giả lập dữ liệu để demo tính năng SEO Động.
 */
class DbHelper {
    
    private $salons = [
        'luxury-spa' => [
            'id' => 1,
            'name' => 'Luxury Nail Spa Premium',
            'slogan' => 'Trải nghiệm làm đẹp đẳng cấp 5 sao tại Quận 1',
            'cover_image' => '/assets/images/salons/luxury-spa.jpg',
            'keywords' => 'luxury nail, spa quan 1, nail premium'
        ],
        'beauty-zone' => [
            'id' => 2,
            'name' => 'Beauty Zone & Academy',
            'slogan' => 'Nơi khơi nguồn vẻ đẹp tự nhiên và đào tạo học viên chuyên nghiệp',
            'cover_image' => '/assets/images/salons/beauty-zone.jpg',
            'keywords' => 'beauty academy, nail training, spa tu nhien'
        ]
    ];

    /**
     * Lấy dữ liệu Salon theo Slug
     */
    public function getSalonBySlug($slug) {
        return isset($this->salons[$slug]) ? $this->salons[$slug] : null;
    }

    /**
     * Lấy danh sách toàn bộ Salon (Demo)
     */
    public function getAllSalons() {
        return $this->salons;
    }
}
