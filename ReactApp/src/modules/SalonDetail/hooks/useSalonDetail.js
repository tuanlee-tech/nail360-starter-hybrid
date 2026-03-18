import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api';
import { SalonDetailSchema } from '../services/schema';

/**
 * 🚀 CUSTOM HOOK: useSalonDetail
 * Quản lý việc Fetch, Cache và Validate dữ liệu Salon.
 */
export const useSalonDetail = (slug) => {
  return useQuery({
    queryKey: ['salon', slug],
    queryFn: async () => {
      // Giả lập gọi API (Trong thực tế là api.get(`/api/salons/${slug}`))
      // Đợi 500ms để thấy hiệu ứng
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Dữ liệu giả lập
      const rawData = {
        name: slug
          .split('-')
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(' '),
        address: '123 Lê Lợi, Quận 1, TP.HCM',
        rating: 4.8,
        reviews_count: 128,
        is_favorite: window.SALON_FAVORITE || false,
        reviews: [
          {
            id: 1,
            author: 'An Nguyễn',
            content: 'Dịch vụ rất tốt!',
            rating: 5,
            date: '2024-03-10',
          },
          {
            id: 2,
            author: 'Bình Trần',
            content: 'Nhân viên nhiệt tình.',
            rating: 4,
            date: '2024-03-11',
          },
        ],
      };

      // ✅ VALIDATE DỮ LIỆU QUA ZOD
      // Nếu API trả về sai cấu trúc, nó sẽ báo lỗi ngay tại đây
      return SalonDetailSchema.parse(rawData);
    },
    // 💡 DATA HYDRATION: Ưu tiên lấy dữ liệu từ PHP nếu có sẵn
    initialData: () => {
      if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.slug === slug) {
        return window.__INITIAL_DATA__;
      }
      return undefined;
    },
  });
};
