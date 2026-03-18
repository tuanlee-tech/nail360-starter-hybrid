import React from 'react';

const Landing = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* 🚀 Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-down">
              Introducing Nail360 Hybrid v3.0
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              The Power of <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600">React</span> <br/>
              with the Soul of <span className="text-slate-800 underline decoration-brand-500 decoration-4 underline-offset-8">PHP</span>.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Xây dựng ứng dụng quản lý tiệm Nail tốc độ cao, chuẩn SEO tuyệt đối và khả năng mở rộng không giới hạn với kiến trúc <strong>Hybrid Island</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/salons" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-200">
                Bắt đầu ngay
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
                Xem tài liệu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-brand-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Refactor" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero-Loading Speed</h3>
              <p className="text-slate-500 leading-relaxed">
                Tận dụng Data Hydration từ PHP để hiển thị nội dung ngay lập tức. Không còn vòng xoay chờ API khó chịu.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ultimate SEO</h3>
              <p className="text-slate-500 leading-relaxed">
                Google yêu thích PHP. Toàn bộ nội dung quan trọng được SSR mang lại kết quả Index tớ 100% trong 24h.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Architecture</h3>
              <p className="text-slate-500 leading-relaxed">
                Tổ chức code theo module, validate dữ liệu với Zod và quản lý trạng thái bằng Zustand vô cùng mạnh mẽ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ Tech Stack Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Built with the best modern techs</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center gap-2">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="w-12 h-12" alt="React" />
                    <span className="text-xs font-bold text-slate-600">React Core</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" className="w-12 h-12" alt="PHP" />
                    <span className="text-xs font-bold text-slate-600">PHP 8.x Engine</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg" className="w-12 h-12" alt="Webpack" />
                    <span className="text-xs font-bold text-slate-600">Webpack Build</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-12 h-12" alt="Tailwind" />
                    <span className="text-xs font-bold text-slate-600">Tailwind v4</span>
                </div>
            </div>
        </div>
      </section>

      {/* 📣 CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-brand-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-200">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sẵn sàng để đưa tiệm Nail của bạn lên một tầm cao mới?</h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                        Tham gia cùng hàng trăm chủ tiệm đã chuyển sang nền tảng Hybrid ổn định và nhanh chóng nhất.
                    </p>
                    <button className="px-10 py-5 bg-white text-brand-700 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
                        Bắt đầu miễn phí ngay
                    </button>
                </div>
            </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        &copy; 2026 Nail360 Hybrid Pro. Crafted with love for modern nail salons.
      </footer>
    </div>
  );
};

export default Landing;
