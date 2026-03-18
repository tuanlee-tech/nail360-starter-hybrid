import React from 'react';
import { useSalonDetail } from '../hooks/useSalonDetail';
import { useSalonStore } from '../../../store/salonStore';
import useToastStore from '../../../store/useToastStore';
import ToastContainer from '../../../components/ui/ToastContainer';

const SalonInfo = ({ slug }) => {
  const { data: salon, isLoading, error } = useSalonDetail(slug);
  const { isFavorite, toggleFavorite } = useSalonStore();
  const addToast = useToastStore((state) => state.addToast);

  const handleFavorite = () => {
    toggleFavorite();
    // 💡 Lưu ý: Cần lấy trạng thái mới nhất từ store nếu muốn Toast chính xác 100%
    // Nhưng ở đây dùng isFavorite hiện tại để báo trạng thái "Vừa thực hiện"
    addToast(!isFavorite ? 'Đã thêm vào yêu thích! ❤️' : 'Đã bỏ yêu thích!');
  };

  if (isLoading) return <div className="animate-pulse bg-gray-200 h-24 rounded-xl"></div>;
  if (error)
    return <div className="p-6 bg-red-50 text-red-500 rounded-xl">Lỗi tải dữ liệu tiệm.</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
      <ToastContainer />
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900">{salon.name}</h1>
        <p className="text-gray-600 mt-2">{salon.address}</p>
        <div className="flex items-center mt-3 text-sm text-amber-500">
          <span>⭐ {salon.rating}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500">{salon.reviews_count} đánh giá</span>
        </div>
      </div>
      <button
        onClick={handleFavorite}
        className={`p-4 rounded-full transition-all duration-300 transform active:scale-90 ${isFavorite ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill={isFavorite ? 'currentColor' : 'none'}
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
      </button>
    </div>
  );
};

export default SalonInfo;
