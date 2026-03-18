<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-gray-900">Khám phá các Salon</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php for($i=1; $i<=6; $i++): ?>
            <div class="bg-white rounded-xl shadow-sm border p-4">
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 font-bold">
                    SALON #<?php echo $i; ?>
                </div>
                <h2 class="text-xl font-bold">Luxury Spa #<?php echo $i; ?></h2>
                <p class="text-gray-500 text-sm mt-1">Quận 1, TP. Hồ Chí Minh</p>
                <div class="mt-4 flex gap-2">
                    <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    <span class="text-gray-400 text-xs">(120)</span>
                </div>
                <a href="/salon/luxury-spa-<?php echo $i; ?>" class="block w-full text-center mt-6 px-6 py-2 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition">Xem chi tiết</a>
            </div>
        <?php endfor; ?>
    </div>
</div>
