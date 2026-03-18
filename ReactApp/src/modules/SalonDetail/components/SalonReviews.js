import React from 'react';
import { useSalonDetail } from '../hooks/useSalonDetail';

const SalonReviews = ({ slug, shouldCrash = false }) => {
  const { data: salon, isLoading, error } = useSalonDetail(slug);

  if (shouldCrash) {
    throw new Error('Mô phỏng lỗi crash vùng Reviews!');
  }

  if (isLoading)
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="animate-pulse bg-gray-100 h-20 rounded-lg"></div>
        ))}
      </div>
    );
  if (error)
    return <div className="p-4 bg-red-50 text-red-600 rounded-lg">Không thể tải đánh giá.</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4 text-gray-900">
        Đánh giá từ khách hàng ({salon.reviews.length})
      </h3>
      <div className="space-y-4">
        {salon.reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-gray-800">{review.author}</span>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <div className="text-amber-400 text-xs mb-1">{'⭐'.repeat(review.rating)}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonReviews;
