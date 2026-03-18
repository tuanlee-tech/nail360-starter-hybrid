import { create } from 'zustand';

/**
 * 📣 TOAST STORE
 * Quản lý thông báo từ bất kỳ Island nào.
 */
const useToastStore = create((set) => ({
  toasts: [],
  addToast: (message, type = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }));

    // Tự động xóa sau 3 giây
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

export default useToastStore;
