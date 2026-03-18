import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import SalonInfo from '../modules/SalonDetail/components/SalonInfo';
import SalonBooking from '../modules/SalonDetail/components/SalonBooking';
import { withProviders } from '../components/Providers';
import '../index.css';

// 🚀 LAZY LOADING: Chỉ tải code vùng Reviews khi cần thiết (giúp nhẹ trang khi load lần đầu)
const LazySalonReviews = lazy(() => import('../modules/SalonDetail/components/SalonReviews'));

const renderIsland = (rootId, Component, props = {}, isLazy = false) => {
  const container = document.getElementById(rootId);
  if (container) {
    const EnhancedComponent = withProviders(Component);
    createRoot(container).render(
      <ErrorBoundary>
        {isLazy ? (
          <Suspense fallback={<div className="animate-pulse bg-gray-100 h-24 rounded-xl"></div>}>
            <EnhancedComponent {...props} />
          </Suspense>
        ) : (
          <EnhancedComponent {...props} />
        )}
      </ErrorBoundary>
    );
  }
};

const salonSlug = window.SALON_SLUG || 'luxury-spa';

renderIsland('salon-info-root', SalonInfo, { slug: salonSlug });
renderIsland('salon-booking-root', SalonBooking, { slug: salonSlug });

// Island Reviews được tải Lazy
renderIsland(
  'salon-reviews-root',
  LazySalonReviews,
  {
    slug: salonSlug,
    shouldCrash: window.location.search.includes('crash=true'),
  },
  true
);
