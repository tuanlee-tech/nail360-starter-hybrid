import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Khởi tạo Query Client với cấu hình mặc định tối ưu
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Dữ liệu được coi là "tươi" trong 5 phút
      retry: 1, // Thử lại 1 lần nếu lỗi
      refetchOnWindowFocus: false, // Không tự động refetch khi quay lại tab (tránh tốn tài nguyên)
    },
  },
});

export const Providers = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export const withProviders = (Component) => {
  return (props) => (
    <Providers>
      <Component {...props} />
    </Providers>
  );
};
