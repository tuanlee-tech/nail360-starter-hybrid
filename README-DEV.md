# 🐣 Nail360 Hybrid Pro V3 - Junior Developer Guide

Chào mừng bạn gia nhập đội ngũ Dev của Nail360! Tài liệu này giúp bạn hiểu "luật chơi" và cách viết code chuẩn chỉnh trong hệ thống Hybrid hiện đại này.

---

## 🌊 1. Luồng chạy của ứng dụng (Data Flow)

Hệ thống của chúng ta không phải SPA thuần túy, nó là **Hybrid**. Hãy nhớ 3 bước thần thánh:
1.  **PHP Render**: Server vẽ ra khung HTML (Header, Footer, Breadcrumbs).
2.  **Hydration**: PHP "bơm" dữ liệu JSON vào biến `window.__INITIAL_DATA__`.
3.  **React Island**: Các "hòn đảo" React tự nạp vào các div tương ứng và lấy dữ liệu từ `window` để hiển thị ngay lập tức (không chờ API).

---

## 📂 2. Cấu trúc thư mục (Nơi bạn sẽ làm việc)

```text
ReactApp/src/
├── components/          # UI Components dùng chung (Button, Card, Input...)
├── modules/             # Các hòn đảo tính năng (Trái tim của ứng dụng)
│   ├── SalonDetail/     # Mỗi module chứa logic riêng của nó
│   │   ├── components/  # Component chỉ dùng cho module này
│   │   ├── hooks/       # Custom hooks xử lý logic
│   │   └── store/       # Quản lý state (Zustand)
├── entries/             # Các file entry points (Webpack sẽ build từ đây)
├── api/                 # Cấu hình Axios và các hàm gọi API mẫu
```

---

## 📜 3. Quy tắc "Vàng" khi Code

### A. Luôn dùng Zod để Validate Dữ liệu
Đừng bao giờ tin tưởng dữ liệu từ API. Hãy dùng Zod để định nghĩa Schema:
```javascript
// ✅ NÊN:
const SalonSchema = z.object({
  id: z.number(),
  name: z.string(),
});
```

### B. Sử dụng React Query cho Fetching
Đừng dùng `useEffect` để gọi API. Hãy dùng `useQuery`:
```javascript
// ✅ NÊN:
const { data, isLoading } = useQuery(['salons'], fetchSalons);
```

### C. Quản lý State bằng Zustand
Nếu cần chia sẻ dữ liệu giữa các Island (ví dụ: giỏ hàng, thông báo), hãy dùng Store.

**Ví dụ dùng Toast (Hiện thông báo từ bất kỳ đâu):**
```javascript
import useToastStore from '../../store/useToastStore';

const MyComponent = () => {
  const addToast = useToastStore(state => state.addToast);
  
  const handleClick = () => {
    addToast("Lưu thành công!", "success"); // Tự động biến mất sau 3s
  };
}
```

**Ví dụ dùng SalonStore (Chia sẻ dữ liệu giữa các Island):**
```javascript
import useSalonStore from '../../store/salonStore';

const { salonData, setSalonData } = useSalonStore();
```

---

## 🧩 4. Chi tiết các Class & Store (Mastering the Tools)

### 🧱 PHP Classes (Server-Side)

#### 1. `ReactLoader`
Lớp này điều phối việc nhúng script.
- `renderIsland($id, $class)`: Tạo div root cho React.
- `loadScripts($entry)`: Nạp file JS đã build (tự nhận diện Hash).
- `loadStyles()`: Nạp CSS nếu có.

#### 2. `SeoHelper`
Quản lý Meta Tags.
- `$seo->setTitle('Tên trang')`: Đổi title.
- `$seo->renderMetaTags()`: In ra <head>.

### 🛡️ API & Security (Client-Side)

#### `src/services/api.js` (Axios Pro)
Hệ thống API đã cài sẵn **Interceptor**:
- **Tự động gắn Token**: Bạn không cần lo việc truyền Bearer Token thủ công.
- **Tự động Refresh**: Nếu Token hết hạn (401), nó sẽ tự gọi Refresh mà không làm gián đoạn người dùng.

**Cách dùng mẫu:**
```javascript
import api from '../services/api';

const fetchSalons = async () => {
  const res = await api.get('/api/salons.php');
  return res.data;
};
```

---

## 🛠️ 5. Hướng dẫn thêm một "Hòn đảo" (Island) mới

Giả sử bạn cần thêm hòn đảo **"Recommended Services"**:

1.  **Tạo Module**: Tạo folder `src/modules/Recommended/`.
2.  **Tạo Entry**: Tạo `src/entries/Recommended.js` để render vào root ID.
3.  **Đăng ký Webpack**: Thêm `Recommended` vào file `.env` (biến `BUILD_TARGET`).
4.  **PHP Integration**:
    - Trong file `.php` tương ứng, thêm:
    ```php
    <?php ReactLoader::renderIsland('recommended-root', 'mt-10'); ?>
    <?php ReactLoader::loadScripts('Recommended'); ?>
    ```

---

## 🚨 5. Những điều cấm kỵ (Don'ts)

1.  ❌ **Không code CSS tùy tiện**: Hãy dùng Tailwind CSS class. Nếu cần custom, hãy viết vào `src/index.css`.
2.  ❌ **Không sửa file trong `dist/` hoặc `assets/react/`**: Đây là những file build tự động, bạn sửa sẽ bị mất sạch khi build lại.
3.  ❌ **Không dùng `window.location.href` để chuyển trang trong React**: Nếu là trong cùng một Island, hãy dùng logic React. Nếu chuyển sang trang PHP khác, hãy dùng thẻ `<a>` bình thường.
4.  ❌ **Không quên chạy Prettier**: Trước khi commit, hãy chạy `npm run format` (mặc dù Husky sẽ tự check, nhưng bạn nên chủ động).

---

## 🚀 7. Dynamic SEO: PHP vs React (Bí quyết lên Top)

Nhiều bạn thắc mắc: "Làm sao để đổi Title khi API đã gọi xong trong React?". Hãy nhớ chiến lược 2 tầng sau:

### A. Tầng 1: Server-Side SEO (Dành cho Google Bot)
Đây là phần quan trọng nhất. Google Bot cần thấy Title/Description ngay khi HTML vừa nạp xong.
- **Cách làm**: Ở file view PHP hoặc trong Router `index.php`, hãy fetch dữ liệu từ Database **TRƯỚC** khi gọi `header.php`.

```php
// index.php
if (is_salon_detail_page) {
    $salon = $db->getSalonBySlug($slug); 
    
    $seo->setTitle($salon['name']);           // 🏠 Đổi tiêu đề
    $seo->setDescription($salon['slogan']);  // 📝 Đổi mô tả
    $seo->setImage($salon['cover_image']);   // 🖼️ Đổi ảnh OG (FB/Zalo)
    $seo->setKeywords("nail, " . $salon['name']); // 🔑 Đổi từ khóa
}
require_once 'header.php'; // HTML sẽ nạp mọi thứ 'Chuẩn đét'
```

### B. Tầng 2: Client-Side SEO (Dành cho Người dùng)
Sau khi React nạp xong, nếu bạn thực hiện lọc dữ liệu hoặc thay đổi trạng thái mà muốn đổi tiêu đề tab trình duyệt:
- **Cách làm**: Dùng `document.title` hoặc các thư viện như `react-helmet`.

```javascript
// Trong React Component
useEffect(() => {
  if (data) {
    document.title = `${data.name} - Nail360 Pro`;
  }
}, [data]);
```

**Bí quyết**: Luôn ưu tiên Set SEO ở PHP cho các nội dung cố định (Page Title, OG Image) và dùng React để tinh chỉnh các nội dung tương tác.

---
**Chúc bạn code vui vẻ!** Nếu gặp khó khăn, hãy hỏi TeamLead hoặc soi các module có sẵn như `SalonDetail` để học hỏi. 💅🚀✨
