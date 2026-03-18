import React from 'react';

const HeartIcon = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 cursor-pointer transition-transform hover:scale-110 ${filled ? 'text-primary fill-primary' : 'text-white'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-medium"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-medium"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-warning fill-warning"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Dummy Data ---
const SALON_DATA = {
  name: 'Salon Nail Studio',
  rating: 5.0,
  reviews: 123,
  address: '1450 Baker St #E, Costa Mesa, CA 92626',
  phone: '(714) 429-9822',
  image:
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400&h=300',
};

// --- Sub Components ---
const SalonCard = ({ isFeatured, hasVeganicLogo }) => (
  <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col overflow-hidden">
    {/* Image container */}
    <div className="relative aspect-[4/3] overflow-hidden bg-pink-50 flex flex-col items-center justify-center group-hover:bg-pink-100 transition-colors duration-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary/30 mb-2 group-hover:scale-110 transition-transform duration-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-primary/40 font-medium text-sm">Salon Image</span>

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-medium px-4 py-1.5 rounded-br-xl flex items-center gap-1 z-10">
          <StarIcon /> Featured
        </div>
      )}

      {/* Heart Icon */}
      <div
        className="absolute top-3 right-3 z-10"
        onClick={(e) => {
          e.preventDefault();
          alert('Đã lưu vào danh sách yêu thích!');
        }}
      >
        <HeartIcon />
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-2">
        {hasVeganicLogo ? (
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <span className="text-green-600 font-bold text-xs">VN</span>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-dark truncate leading-tight">
            {SALON_DATA.name}
          </h3>
          <div className="flex items-center gap-1 mt-0.5">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className="text-xs text-dark font-medium ml-1">{SALON_DATA.rating}</span>
            <span className="text-xs text-gray-medium">({SALON_DATA.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="mt-2 space-y-1.5 flex-grow">
        <div className="flex items-start gap-2">
          <LocationIcon />
          <span className="text-sm text-gray-medium leading-snug">{SALON_DATA.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <span className="text-sm text-gray-medium">{SALON_DATA.phone}</span>
        </div>
      </div>

      <button
        onClick={() => alert('Tính năng đặt lịch đang phát triển!')}
        className="w-full mt-4 bg-accent-dark hover:bg-black text-white py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95"
      >
        Book Now
      </button>
    </div>
  </div>
);

const PromoCard = () => (
  <div className="w-[85vw] md:w-[420px] shrink-0 bg-white rounded-2xl shadow-card overflow-hidden flex flex-col md:flex-row h-full">
    <div className="md:w-2/5 aspect-video md:aspect-auto bg-pink-100 flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary/40 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span className="text-primary/50 text-xs font-semibold">Promo Image</span>
    </div>
    <div className="p-5 md:w-3/5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 font-bold" style={{ fontSize: '9px' }}>
              VN
            </span>
          </div>
          <span className="text-xs font-semibold text-dark">Veganic Nail Spa</span>
        </div>
        <h4 className="font-bold text-lg text-dark leading-tight mb-2">
          10% Off Soft Opening Promotion!
        </h4>
        <p className="text-xs text-gray-medium line-clamp-3">
          Special soft opening deals for new customers. Come join us from Feb 1 - Feb 28. This
          promotion applied for all services.
        </p>
      </div>
      <button
        onClick={() => alert('Chuyển đến trang chi tiết khuyến mãi!')}
        className="mt-4 bg-accent-dark hover:bg-black text-white text-sm font-semibold py-2 px-6 rounded-lg self-end transition-colors"
      >
        Book Now
      </button>
    </div>
  </div>
);

// --- Main Page Component ---
const Home = () => {
  return (
    <div className="bg-transparent font-sans pb-10">
      {/* 1. HEADER - REMOVED (PHP handles this now) */}


      {/* 2. HERO BANNER */}
      <section className="relative w-full min-h-[400px] md:h-[520px] bg-gradient-to-br from-pink-900 via-cta to-black flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

        {/* Decorative Circles Placeholder */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-accent-dark/30 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Find it. Book it. Nail it
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10">
            Your perfect manicure and pedicure is just a click away.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-3 shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all focus-within:ring-2 focus-within:ring-primary">
            <div className="flex-1 flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Salon Name"
                className="w-full bg-transparent outline-none text-dark text-sm placeholder-gray-medium"
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            <div className="md:hidden w-full h-px bg-gray-200 my-1"></div>

            <div className="flex-1 flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-medium shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent outline-none text-dark text-sm placeholder-gray-medium"
              />
            </div>

            <button
              onClick={() => alert('Đang tìm kiếm Salon quanh bạn...')}
              className="w-full md:w-auto bg-primary hover:bg-pink-500 text-white p-3 md:px-6 md:py-3 rounded-xl md:rounded-full flex items-center justify-center transition-transform active:scale-95 mt-2 md:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="hidden md:block font-semibold">Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SALONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-10">
          Featured Salons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {[1, 2, 3, 4].map((id) => (
            <SalonCard key={id} isFeatured={true} />
          ))}
        </div>
      </section>

      {/* 4. YOUR FAVORITE SALONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-10">
            Your Favorite Salons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            <SalonCard isFeatured={false} hasVeganicLogo={true} />
            <SalonCard isFeatured={false} />
            <SalonCard isFeatured={false} />
          </div>
        </div>
      </section>

      {/* 5. TOP RATED SALONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-10">
          Discover Top Rated Salons Near You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <SalonCard
              key={id}
              isFeatured={id === 1 || id === 5}
              hasVeganicLogo={id === 1 || id === 4}
            />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => alert('Đang tải thêm danh sách Spa...')}
            className="bg-dark hover:bg-gray-800 text-white px-10 py-4 rounded-2xl font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            View More
          </button>
        </div>
      </section>

      {/* 6. SALON PROMOTIONS (Carousel) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-10">
            Salon Promotions
          </h2>

          <div className="relative">
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar scroll-smooth">
              {[1, 2, 3, 4, 5].map((id) => (
                <div key={id} className="snap-start shrink-0">
                  <PromoCard />
                </div>
              ))}
            </div>

            {/* Arrow Right Overlay (Desktop only hint) */}
            <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 shadow-card rounded-full items-center justify-center cursor-pointer z-10 translate-x-1/2 hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-accent-dark"></div>
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-cta py-16 md:py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Are you a Salon Owner?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Nail360 PRO: The all-in-one solution for your nail salon business. Get started for
              free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => alert('Đăng ký chủ tiệm!')}
                className="bg-white hover:bg-gray-100 text-cta px-8 py-3.5 rounded-2xl font-bold transition-transform active:scale-95"
              >
                List your salon now
              </button>
              <button
                onClick={() => alert('Xem thêm thông tin')}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-2xl font-bold transition-colors"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Huge Logo Graphic */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 opacity-90">
            <div className="absolute inset-0 border-4 border-primary rounded-full opacity-30 transform scale-110"></div>
            <div className="absolute inset-0 border-4 border-white rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-8xl" style={{ fontFamily: 'serif' }}>
                N
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
