import React from 'react';
import useToastStore from '../../store/useToastStore';

/**
 * 🧩 TOAST CONTAINER
 * Thành phần hiển thị thông báo nổi. Nên được mount ở một Island ổn định.
 */
const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 animate-slide-in-right 
                    ${toast.type === 'success' ? 'bg-white border-green-100 text-green-700' : 'bg-white border-red-100 text-red-700'}`}
        >
          {toast.type === 'success' ? (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </div>
          ) : (
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              !
            </div>
          )}
          <span className="font-semibold">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
