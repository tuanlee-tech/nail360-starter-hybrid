<div class="mb-12">
    <span
        class="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-200">
        Dashboard v3.0
    </span>
    <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Hệ thống Quản trị <br /><span class="text-brand-600 italic">Hybrid Ecosystem</span>
    </h1>
    <p class="text-slate-500 text-lg max-w-2xl leading-relaxed">
        Đây là trang Dashboard được render bởi PHP Server (SEO-Ready), kết hợp sức mạnh tương tác của các hòn đảo React
        bên dưới.
    </p>
</div>

<!-- Vùng đất dành cho React Home Island -->
<?php ReactLoader::renderIsland('home-react-root', 'min-h-[600px] bg-white rounded-3xl shadow-sm border border-slate-200 p-1'); ?>

<?php ReactLoader::loadScripts('home'); ?>