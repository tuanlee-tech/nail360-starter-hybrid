# 🏗️ Nail360 Hybrid Pro V3 - Architect & TeamLead Blueprint

Tài liệu này dành riêng cho **TeamLead** và **Hệ thống sư**. Nó giải trình các quyết định kiến trúc cốt lõi, tầm nhìn dài hạn và hướng dẫn vận hành chuyên sâu của bộ khung Hybrid Pro V3.

---

## 🛰️ 1. Tầm nhìn & Chiến lược Kiến trúc

### Tại sao lại chọn Hybrid (PHP + React Islands)?
Đa số ứng dụng hiện nay chọn hướng SPA (Single Page App) thuần túy. Tuy nhiên, với đặc thù của Nail360:
1.  **SEO là sống còn**: Các trang Salon cần được Google Index ngay lập tức với đầy đủ nội dung (SSR).
2.  **Tương tác phức tạp**: Booking Form và Real-time Notification cần React để mượt mà.
3.  **Di sản (Legacy)**: Tận dụng được hạ tầng PHP hiện có mà không phải đập đi xây lại 100%.

**=> Giải pháp: Island Architecture (Kiến trúc Hòn đảo)**
Server (PHP) render khung xương HTML chuẩn SEO. Các vùng tương tác "nóng" sẽ được React nạp vào dưới dạng các "Hòn đảo" độc lập.

### Mô phỏng Kiến trúc (Architecture Diagram)

```mermaid
graph TD
    subgraph "Client Side (Browser)"
        A[HTML Skeleton - PHP Rendered] --> B[React Island: Home]
        A --> C[React Island: Salon Info]
        A --> D[React Island: Booking Form]
        E[Global State - Zustand] -.-> B
        E -.-> C
        E -.-> D
        F[Toast System] -.-> E
    end

    subgraph "Server Side (PHP/Apache)"
        G[Router] --> H[Controller]
        H --> I[SeoHelper]
        H --> J[ReactLoader]
        H --> N[DbHelper]
        J --> K[manifest.json]
    end

    subgraph "Build System (Webpack)"
        L[Source React] --> M(Production Bundles + Hash)
        M --> K
    end

    H -- Data Hydration --> A
    I -- Metadata --> A
```

---

## 🛠️ 2. Dependencies & Core Stack (Lý do chọn lựa)

### Frontend (React App)
- **Zustand**: Quản lý State toàn cục siêu nhẹ (thay cho Redux). Dùng để đồng bộ các Island (ví dụ: bấm nút ở Island A, hiện Toast ở Island B).
- **React Query (TanStack)**: Quản lý fetching & caching. Tự động sync dữ liệu và xử lý trạng thái Loading/Error cực chuyên nghiệp.
- **Zod**: Validation schema cho cả API và Form. Đảm bảo dữ liệu luôn đúng "hợp đồng", chặn đứng lỗi `undefined`.
- **Axios**: HTTP Client với Interceptor để xử lý Token tập trung.
- **Tailwind CSS**: Utility-first CSS giúp UI đồng nhất và cực kỳ linh hoạt.

### Backend (PHP Bridge)
- **ReactLoader Class**: Bộ não điều phối việc nhúng script. Tự động đọc Hash từ manifest để giải quyết triệt để lỗi cache trình duyệt.
- **SeoHelper Class**: Quản lý thẻ Meta, OpenGraph, Twitter Cards và JSON-LD tự động. (Đã nạp sẵn logic SEO Pro).
- **DbHelper Class**: Lớp trừu tượng hóa Database. Hiện tại đang ở dạng Mock Data để cung cấp dữ liệu cho SEO và Hydration.

---

## 🚀 3. Hướng dẫn Setup Hệ thống (Detailed)

### Bước 1: Môi trường Server & Domain
- Yêu cầu PHP 7.4+ (Khuyến nghị 8.0).
- **Document Root**: Phải trỏ thẳng vào thư mục gốc của dự án (nơi có file `index.php`).
- **Domain**: Khi chạy trên `domain.com`, hệ thống sẽ tự động nhận diện là môi trường **Production**.
- Apache/Nginx hỗ trợ URL Rewrite (đã cấu hình sẵn trong `.htaccess`).

### Bước 2: Cài đặt Node.js & Webpack
```bash
cd ReactApp
npm install
```

### Bước 3: Cấu hình .env (Cực kỳ quan trọng)
Tạo file `.env` trong thư mục `ReactApp`:
- `BUILD_TARGET`: Liệt kê các file entry cần build (ví dụ: `home,SalonDetail`). Giúp build nhanh hơn khi chỉ tập trung vào 1 module.

### Bước 4: Chế độ Phát triển (Watch Mode)
```bash
npm run start
```
*Lưu ý: Chế độ này sẽ chạy Webpack Dev Server ở port 3000 và ghi Manifest ra đĩa để PHP nạp được.*

### Bước 5: Build Production
```bash
npm run build
```
Lệnh này sẽ dọn dẹp thư mục `public/assets/react/` và sinh ra các file có Hash (ví dụ: `home.a1b2c3d4.js`).

---

## 🔐 4. Checklist Bảo mật & Tính năng

### 🛡️ Bảo mật (Security)
- [x] **Secure Token Flow**: Access Token lưu trong bộ nhớ (In-memory), Refresh Token dùng HttpOnly Cookie. Chống XSS và CSRF.
- [x] **Data Sanitation**: Toàn bộ dữ liệu nhúng từ PHP qua React được `json_encode` an toàn.
- [x] **Input Validation**: Zod kiểm soát mọi đầu vào của API, không tin tưởng dữ liệu từ Client.

### ✨ Tính năng (Performance)
- [x] **Data Hydration**: PHP bơm dữ liệu ban đầu trực tiếp. React nạp xong là có dữ liệu ngay (Zero Skeleton Screen).
- [x] **Parallel Regions**: Các Island nạp song song, lỗi vùng này không sập vùng kia.
- [x] **Error Boundaries**: Hiển thị Fallback UI đẹp mắt khi một vùng bị crash.
- [x] **Auto Formatting**: Husky + Prettier ép buộc format code trước khi Commit.

---

## 📒 5. Example Code Patterns

### Cách tạo một React Island mới
1. Tạo Component trong `src/modules/`.
2. Tạo Entry file trong `src/entries/[ten-entry].js`.
3. Đăng ký trong `views/pages/[page].php`:
```php
<!-- Div root -->
<?php ReactLoader::renderIsland('my-root-id', 'class-css'); ?>

<!-- Load script bundle -->
<?php ReactLoader::loadScripts('ten-entry'); ?>
```

### Cách nạp Dữ liệu từ PHP (Hydration)
Trong file PHP, định nghĩa biến Global trước khi nạp script:
```html
<script>
    window.__INITIAL_DATA__ = <?php echo json_encode($data); ?>;
</script>
```

---

## 🧭 6. Quy trình vận hành cho TeamLead
1. **Quản lý Package**: Luôn dùng `npm install` để đồng bộ thư viện. Tránh cài ad-hoc.
2. **Review Code**: Kiểm tra các `Zod Schema` để đảm bảo API không bị vỡ khi DB thay đổi.
3. **Build Check**: Khi deploy Production, LUÔN LUÔN chạy `npm run build` và kiểm tra `manifest.json`.

---

## 🌐 7. Cấu hình Production (Deployment)

Khi đưa lên máy chủ thực tế (VPS/Cloud), bạn không thể dùng port 8000. Dưới đây là hướng dẫn để chạy trên `http://domain.com`:

### A. Cấu hình Apache (VirtualHost)
**Lưu ý quan trọng**: Bạn phải trỏ `DocumentRoot` vào thư mục `public` của dự án, KHÔNG phải thư mục gốc. Việc này giúp bảo mật các mã nguồn PHP, file `.env` và `includes/` không bị truy cập trực tiếp từ trình duyệt.

```apache
<VirtualHost *:80>
    ServerName domain.com
    # TRỎ VÀO THƯ MỤC PUBLIC
    DocumentRoot /var/www/html/nail360-hybrid/public
    
    <Directory /var/www/html/nail360-hybrid/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### B. Cấu hình Nginx
```nginx
server {
    listen 80;
    server_name domain.com;
    # TRỎ VÀO THƯ MỤC PUBLIC
    root /var/www/html/nail360-hybrid/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    # ... các cấu hình PHP-FPM giữ nguyên
}
```

### C. Có cần lệnh để "Run Server" không?
- **Tại Local (Development)**: Bạn có thể chạy lệnh nhanh sau để test:
  `php -S localhost:8000 -t public`
- **Tại Production**: **KHÔNG CẦN LỆNH NÀO CẢ**. 
  Sau khi bạn cấu hình Apache hoặc Nginx như trên, Web Server sẽ luôn chạy ngầm (as a service). Bất cứ lúc nào khách truy cập `domain.com`, Server sẽ tự động gọi `index.php` bên trong thư mục `public` để xử lý.

### D. Cơ chế nhận diện môi trường trong ReactLoader
Class `ReactLoader` đã được thiết kế thông minh:
- Nếu cổng là 8000/9000: Coi là môi trường **Local Dev**.
- Nếu cổng là 80/443 (mặc định của domain.com): Coi là môi trường **Production**.
- **Quan trọng**: Tại Production, hệ thống sẽ KHÔNG nạp từ port 3000 mà luôn luôn đọc từ `public/assets/react/manifest.json`. Vì vậy, bạn **BẮT BUỘC** phải chạy `npm run build` trước khi deploy.

### D. Checklist trước khi "Go-Live"
1. [ ] Chạy `npm run build` để sinh asset có mã hash.
2. [ ] Kiểm tra file `.htaccess` đã tồn tại ở thư mục gốc.
3. [ ] Đảm bảo thư mục `public/assets/react` có quyền Đọc (Read) cho User của Web Server (www-data).
4. [ ] Cấu hình SSL (HTTPS) để bảo mật cho hệ thống Token.

---

## 🔍 8. Deep-Dive: Webpack Config Decisions (Tại sao lại làm thế?)

Để TeamLead hiểu rõ "linh hồn" của bộ đóng gói này, dưới đây là giải trình các quyết định then chốt:

### 1. `publicPath: '/assets/react/'`
- **Quyết định**: Ép mọi tài nguyên phải đi qua prefix này.
- **Lý do**: Để đồng nhất 100% giữa môi trường Dev (Port 3000) và Prod (Port 80/443). Khi React nạp các "mảnh" (Chunks), nó sẽ tự biết tìm đến đúng thư mục assets của dự án PHP.

### 2. `filename: '[name].[contenthash].js'`
- **Quyết định**: Sử dụng mã băm nội dung.
- **Lý do**: Giải quyết triệt để lỗi "sửa code nhưng khách hàng không thấy đổi". Nếu nội dung file không đổi, hash không đổi -> Browser dùng cache cũ. Nếu có 1 dấu phẩy thay đổi -> Hash đổi -> Browser bắt buộc tải mới.

### 3. `writeToDisk: true` (trong DevServer)
- **Quyết định**: Vừa chạy port 3000 vừa ghi file thật ra đĩa.
- **Lý do**: Đây là "cầu nối" Hybrid. PHP cần file `manifest.json` thật trên đĩa để biết script nào đang chạy mà nhúng vào HTML. Nếu chỉ lưu trên bộ nhớ (mặc định), PHP sẽ không biết nạp cái gì.

### 4. `splitChunks: { name: 'vendor' }`
- **Quyết định**: Tách React, ReactDOM ra file riêng.
- **Lý do**: Những thư viện này rất nặng nhưng ít khi thay đổi. Tách ra giúp file tính năng (ví dụ `Landing.js`) rất nhẹ, giúp Web tải nhanh hơn đáng kể.

---

## 💡 Mẹo "Xem nhanh"
Khi đang ngồi ở "Công xưởng" (Port 3000) và muốn mở lên là thấy ngay cái mình đang làm:

**Cách làm**: Hãy đưa module đó lên đầu tiên trong file `.env`:
```bash
# Muốn xem Landing mặc định tại localhost:3000
BUILD_TARGET=Landing,home,SalonDetail
```
**Tại sao**: Webpack được cấu hình để biến thằng đầu tiên thành `index.html`. Chỉ cần gõ đúng IP/Domain là nó đập ngay vào mắt, không cần gõ hậu tố loằng ngoằng.

---

## 🚀 9. CI/CD Flow & Advanced Configuration

Hệ thống đã được tích hợp luồng xuất bản tự động qua GitHub Actions. Dưới đây là cách tùy biến và vận hành nâng cao:

```mermaid
graph TD
    A[Push Code] --> B{GitHub Actions}
    B --> C[Setup Build Env]
    C --> D[Override BUILD_TARGET]
    D --> E[npm run build]
    E --> F[Generate manifest.json]
    F --> G[Deploy to Server/CDN]
    G --> H((Website Live!))
```

### Biến môi trường trong CI/CD
Có thể tùy biến danh sách module cần build thông qua file workflow. Tuy nhiên, dự án đã được tích hợp **Bảng điều khiển thủ công (Manual Trigger)**.

### 🎮 Mẹo: Điều khiển Build từ xa (Không cần sửa code)
Khi muốn build nhanh một danh sách module khác mà không muốn sửa file YAML:
1.  Vào mục **Actions** trên GitHub repository.
2.  Chọn workflow **Deploy to GitHub Pages**.
3.  Bấm vào nút **Run workflow**.
4.  Nhập danh sách module vào ô **build_target**.
    - **Ví dụ 1 (Build tất cả)**: `home,SalonDetail,Landing`
    - **Ví dụ 2 (Chỉ build Landing để demo nhanh)**: `Landing`
    - **Ví dụ 3 (Build trang chủ và Salon)**: `home,SalonDetail`
5.  Bấm **Run workflow** một lần nữa. Hệ thống sẽ tự động build và cập nhật đúng những gì yêu cầu.

### Cơ chế Tự động nhận diện (ReactLoader + Manifest)
Đây là "phép thuật" giúp PHP luôn trỏ đúng file dù ở bất kỳ môi trường nào:
1. **Webpack**: Khi build (ở Local hay CI/CD), Webpack sinh ra `manifest.json` ghi lại ánh xạ giữa tên module và file thực tế (ví dụ `Landing.js` -> `Landing.a1b2c3.js`).
2. **ReactLoader**: Lớp PHP này luôn đọc `manifest.json` trước khi nhúng script. 
3. **Kết quả**: Chỉ cần tệp manifest được cập nhật trên server, PHP sẽ tự động nạp đúng phiên bản JS/CSS mới nhất mà không cần can thiệp vào mã nguồn backend.

> [!IMPORTANT]
> GitHub Pages hiện tại chỉ dùng để phục vụ bản Preview tĩnh. Để vận hành toàn bộ hệ thống (PHP + DB), cần triển khai lên Hosting/VPS hỗ trợ PHP 8.x và đảm bảo thư mục `public/assets/react/` luôn chứa bản build mới nhất kèm manifest.

---

## 🔄 10. Luồng Tài nguyên Chi tiết (Asset Lifecycle)

Để hiểu rõ cách React và PHP "bắt tay" với nhau qua từng bản build, dưới đây là mô tả chi tiết luồng dữ liệu kèm ví dụ minh họa:

### 1. Luồng tạo File (Webpack Build Flow)
Khi bạn chạy `npm run start` (hoặc `npm run build`), Webpack sẽ thực hiện các bước sau:
1.  **Xác định Entry Points**: Webpack đọc file `.env` để biết cần build những component nào (ví dụ: `home`, `SalonDetail`). Nó tìm các file tương ứng trong `src/entries/`.
2.  **Biên dịch (Compilation)**:
    *   **JS/JSX**: Được Babel chuyển đổi về mã Javascript mà trình duyệt hiểu được.
    *   **CSS/Tailwind**: Được PostCSS xử lý và đóng gói.
3.  **Băm tên file (Hashing)**: Để tránh việc trình duyệt lưu bản cũ (cache), Webpack thêm một chuỗi mã băm vào tên file, ví dụ: `SalonDetail.1b164725.js`.
4.  **Tạo Manifest (`manifest.json`)**: Đây là bước quan trọng nhất. Plugin `WebpackManifestPlugin` sẽ tạo ra một file "từ điển" lưu tại `public/assets/react/manifest.json`. Nội dung của nó trông như thế này:
    ```json
    {
      "SalonDetail.js": "/assets/react/SalonDetail.1b164725.js",
      "vendor.js": "/assets/react/vendor.1c956590.js"
    }
    ```
5.  **Tạo file HTML Preview**: `HtmlWebpackPlugin` tạo ra các file `.html` trong thư mục output để bạn có thể xem nhanh các hòn đảo này mà không cần PHP (phục vụ lúc phát triển giao diện).

---

### 2. Luồng PHP đọc Manifest và tải Tài nguyên
Khi một người dùng truy cập vào một trang PHP (ví dụ: `salon-detail.php`), quá trình tải React diễn ra như sau:
1.  **Gọi Loader**: Trong mã nguồn PHP, bạn gọi hàm:
    ```php
    ReactLoader::loadScripts('SalonDetail');
    ```
2.  **Đọc Manifest**: Lớp `ReactLoader` tìm đến file `public/assets/react/manifest.json` và đọc nội dung của nó vào một mảng (array).
3.  **Tra cứu tên file thật**:
    *   `ReactLoader` tìm từ khóa `SalonDetail.js` trong mảng manifest.
    *   Nó nhận được giá trị là `/assets/react/SalonDetail.1b164725.js`.
4.  **Xử lý Vendor (Thư viện chung)**: Vì Webpack đã tách các thư viện (như React, ReactDOM) ra một file riêng gọi là `vendor.js` để tối ưu, `ReactLoader` sẽ tự động tìm và in ra thẻ `<script>` của `vendor` trước.
5.  **In thẻ HTML**: Cuối cùng, PHP sẽ "đổ" ra mã HTML tương ứng vào trình duyệt:
    ```html
    <script src="/assets/react/vendor.1c956590.js" defer></script>
    <script src="/assets/react/SalonDetail.1b164725.js" defer></script>
    ```

---
**Nail360 Hybrid Pro V3** - *Kiến trúc bền vững cho tương lai. 🚀*
