import axios from 'axios';

/**
 * 🛡️ AXIOS PRO INTERCEPTOR
 * Quản lý Token thấu suốt cho Junior: tự động gắn Bearer, tự động Refresh khi hết hạn.
 */
const api = axios.create({
  baseURL: '/', // Hoặc URL API của Backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Request Interceptor: Luôn gắn AccessToken vào Header nếu có
api.interceptors.request.use(
  (config) => {
    const token = window.ACCESS_TOKEN; // Lấy từ Memory
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. Response Interceptor: Xử lý lỗi 401 (Hết hạn Token)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi 401 và chưa thử refresh lần nào
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gọi tới endpoint refresh-token của PHP (nơi sẽ đọc HttpOnly Cookie)
        const res = await axios.post('/api/refresh-token.php');
        const { accessToken } = res.data;

        // Cập nhật lại vào Memory cho các request sau
        window.ACCESS_TOKEN = accessToken;

        // Cập nhật lại header cho request hiện tại và chạy lại
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Nếu refresh cũng tẻo (cookie hết hạn) -> Đá về Login
        console.error('RefreshToken đã hết hạn, vui lòng đăng nhập lại.');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
