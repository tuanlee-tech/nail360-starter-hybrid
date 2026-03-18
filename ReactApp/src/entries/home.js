import React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import Home from '../components/Home';

// Lấy div container từ page PHP
// Tên target có thể chứa dấu gạch chéo (VD: FindJob/FindJob), ta thay / bằng - cho ID div
const targetId = 'home-react-root'; // Với home.js ta giữ nguyên hoặc code tay.
// Nhưng tốt nhất là entry file không nên care về tên target của nó nếu nó là component dùng chung.

const homeContainer = document.getElementById(targetId);

if (homeContainer) {
  const root = createRoot(homeContainer);
  root.render(<Home />);
}
