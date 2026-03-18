import React from 'react';
import { useSalonStore } from '../../../store/salonStore';
import BookingForm from './BookingForm';

const SalonBooking = () => {
  // 🛡️ SỬ DỤNG NAMED IMPORT ĐỂ TRÁNH LỖI REFERENCE
  const isFavorite = useSalonStore((state) => state.isFavorite);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden group">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 italic">Đặt lịch trải nghiệm</h2>

      {isFavorite && (
        <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100 text-purple-600 text-sm animate-pulse flex items-center gap-2">
          <span className="text-lg">✨</span>
          <span>Cảm ơn bạn đã yêu thích tiệm này! Ưu tiên phục vụ 5 sao.</span>
        </div>
      )}

      <BookingForm />

      <p className="mt-6 text-xs text-center text-gray-400 italic">
        Cam kết không trễ hẹn - Hoàn tiền 100% nếu đợi quá 15p
      </p>
    </div>
  );
};

export default SalonBooking;
