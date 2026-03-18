<?php
require_once __DIR__ . '/../../includes/Services/AuthService.php';
global $seo;
$fakeToken = AuthService::generateAccessToken(123);
AuthService::setRefreshToken(123);

// Cấu hình Schema SEO
$seo->addSchema([
    "@context" => "https://schema.org",
    "@type" => "LocalBusiness",
    "name" => "Luxury Nail Spa Premium",
    "address" => [
        "@type" => "PostalAddress",
        "streetAddress" => "123 Lê Lợi",
        "addressLocality" => "Quận 1",
        "addressRegion" => "TP.HCM"
    ],
    "aggregateRating" => [
        "@type" => "AggregateRating",
        "ratingValue" => "4.9",
        "reviewCount" => "150"
    ]
]);

// Giả lập dữ liệu từ Database để Hydrate cho React
$initialData = [
    'slug' => $salonSlug,
    'name' => 'Luxury Nail Spa Premium',
    'address' => '123 Lê Lợi, Quận 1, TP.HCM',
    'rating' => 4.9,
    'reviews_count' => 150,
    'is_favorite' => false,
    'reviews' => [
        ['id' => 1, 'author' => 'Thanh Hà', 'content' => 'Rất hài lòng!', 'rating' => 5, 'date' => '2024-03-15']
    ]
];
?>
<script>
    window.SALON_SLUG = "<?php echo $salonSlug; ?>";
    window.ACCESS_TOKEN = "<?php echo $fakeToken; ?>";
    window.__INITIAL_DATA__ = <?php echo json_encode($initialData); ?>;
</script>
<div class="container mx-auto py-4">
    <nav class="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-widest">
        <a href="/" class="hover:text-brand-600 transition-colors">Home</a>
        <span class="text-slate-200">/</span>
        <a href="/salons" class="hover:text-brand-600 transition-colors capitalize">Salons</a>
        <span class="text-slate-200">/</span>
        <span class="text-slate-900 italic capitalize"><?php echo str_replace('-', ' ', $salonSlug); ?></span>
    </nav>

    <!-- KIẾN TRÚC PARALLEL REGIONS TRÊN NỀN PHP HIỆN ĐẠI -->
    
    <!-- Vùng 1: Info (Đã nạp Hydration) -->
    <?php ReactLoader::renderIsland('salon-info-root', 'mb-10 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'); ?>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2">
            <!-- Vùng 2: Reviews -->
            <div class="mb-4 flex items-center justify-between">
                <h3 class="text-xl font-bold font-jakarta text-slate-800 italic">Khách hàng nói gì?</h3>
                <span class="text-xs text-brand-600 font-bold px-2 py-1 bg-brand-50 rounded italic border border-brand-100">Hot 🔥</span>
            </div>
            <?php ReactLoader::renderIsland('salon-reviews-root', 'bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'); ?>
        </div>
        
        <div>
            <!-- Vùng 3: Booking Form -->
            <?php ReactLoader::renderIsland('salon-booking-root', 'sticky top-28 bg-white rounded-2xl shadow-xl border border-slate-100/50'); ?>
        </div>
    </div>
</div>

<?php 
ReactLoader::loadScripts('SalonDetail'); 
?>
