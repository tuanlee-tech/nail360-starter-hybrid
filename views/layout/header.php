<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Nhúng thẻ SEO tự động từ PHP Helper -->
    <?php global $seo; $seo->renderMetaTags(); $seo->renderSchemas(); ?>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN for Demo -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fff1f2',
                            100: '#ffe4e6',
                            200: '#fecdd3',
                            300: '#fda4af',
                            400: '#fb7185',
                            500: '#f43f5e',
                            600: '#e11d48',
                            700: '#be123c',
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-header {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 overflow-x-hidden pt-20">

<header class="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200/60 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3 group cursor-pointer" onclick="window.location='/'">
            <div class="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                <span class="text-xl font-bold italic">N</span>
            </div>
            <div>
                <h1 class="text-xl font-bold tracking-tight text-slate-800">Nail360 <span class="text-brand-600">Pro</span></h1>
                <p class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold font-jakarta leading-none mt-1">Enterprise Hybrid Ecosystem</p>
            </div>
        </div>
        
        <nav class="hidden md:flex items-center gap-8">
            <a href="/" class="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Trang chủ</a>
            <a href="/salons" class="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Tìm kiếm Salon</a>
            <a href="#" class="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Dịch vụ</a>
            <a href="#" class="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Liên hệ</a>
        </nav>
        
        <div class="flex items-center gap-4">
            <button class="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
                Download App
            </button>
        </div>
    </div>
</header>

<main class="max-w-7xl mx-auto px-6 py-10 min-h-[70vh]">
