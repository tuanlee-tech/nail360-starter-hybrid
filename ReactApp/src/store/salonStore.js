import { create } from 'zustand';

// 🔄 CHUYỂN STORE VỀ VỊ TRÍ TRUNG TÂM (Tránh lỗi pathing của Junior)
export const useSalonStore = create((set) => ({
  isFavorite: false,
  toggleFavorite: () => set((state) => ({ isFavorite: !state.isFavorite })),
  salonName: 'Luxury Nail Spa - Quận 1',
}));
