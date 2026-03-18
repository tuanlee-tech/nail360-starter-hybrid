import { create } from 'zustand';

// Store dùng chung cho toàn bộ "Đảo" React trên trang
const useSalonStore = create((set) => ({
  isFavorite: false,
  toggleFavorite: () => set((state) => ({ isFavorite: !state.isFavorite })),

  salonName: 'Luxury Nail Spa - Quận 1',
  // Sếp có thể lưu bất kỳ dữ liệu phức tạp nào ở đây
}));

export default useSalonStore;
