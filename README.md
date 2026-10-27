# Wanderlust World — Điểm đến và hành trình được tuyển chọn trên toàn cầu

Trang giới thiệu du lịch cao cấp hiện đại, tương thích với nhiều kích thước màn hình, lấy cảm hứng từ **Airbnb** và **National Geographic**. Dự án được xây dựng bằng **React**, **Vite**, **Tailwind CSS** và **Lucide Icons**.

---

## ✨ Tính năng và kiến trúc

### 1. Thanh điều hướng kính mờ cố định
- **Nhận diện thương hiệu:** Logo biểu tượng la bàn cùng kiểu chữ mang phong cách tạp chí.
- **Hiệu ứng kính mờ:** Nền làm mờ thay đổi linh hoạt (`backdrop-blur-md` chuyển sang `backdrop-blur-xl`) và có bóng khi cuộn trang.
- **Điều hướng:** Liên kết cuộn mượt đến các mục Điểm đến, Trải nghiệm, Cẩm nang và Đánh giá.
- **Tương tác nhỏ:** Huy hiệu đếm số địa điểm yêu thích có hiệu ứng nhịp; nút “Lên kế hoạch chuyến đi” màu san hô hoàng hôn.
- **Trên điện thoại:** Ngăn điều hướng dạng trượt với nền kính mờ.

### 2. Khu vực mở đầu
- **Hình ảnh:** Ảnh Unsplash toàn màn hình về núi ven biển lúc hoàng hôn, phủ nhiều lớp chuyển sắc.
- **Kiểu chữ biên tập:** Tiêu đề serif tương phản cao kết hợp nội dung sans-serif hiện đại.
- **Thanh tìm kiếm kính mờ nổi:**
  - **Địa điểm:** Chọn nhanh Paris, Kyoto, Santorini, Machu Picchu, Rome, Maldives, Banff và Petra.
  - **Thời gian:** Các mùa khởi hành gồm Mùa xuân hoa anh đào, Hạ chí, Mùa thu hoạch mùa thu và Mùa đông thanh bình.
  - **Phong cách du lịch:** Trải nghiệm văn hóa, Kỳ quan cổ đại, Đảo riêng và Hoang dã vùng núi cao.
  - **Thao tác:** Gửi truy vấn, lọc thẻ điểm đến và cuộn mượt đến kết quả.
- **Dải thông tin uy tín:** Hơn 140 điểm nghỉ dưỡng toàn cầu, đánh giá lữ khách 4,98, trung hòa carbon 100% và dịch vụ hỗ trợ riêng 24/7.

### 3. Bộ lọc danh mục tương tác
- **Thẻ lọc:** Mọi hành trình, Châu Âu, Châu Á, Châu Mỹ và Kỳ quan thế giới.
- **Huy hiệu số lượng:** Hiển thị số địa điểm theo từng danh mục theo thời gian thực.
- **Trạng thái tìm kiếm:** Hiển thị thẻ truy vấn đang áp dụng, có thể xóa bằng một lần nhấn.

### 4. Lưới điểm đến nổi tiếng
- **Các điểm đến tiêu biểu được tuyển chọn:**
  - **Paris, Pháp:** Kinh đô Ánh sáng, thời trang cao cấp và hoàng hôn bên sông Seine.
  - **Kyoto, Nhật Bản:** Không gian thiền tĩnh lặng và rừng tre thanh bình.
  - **Santorini, Hy Lạp:** Mái vòm xanh coban và miệng núi lửa hùng vĩ.
  - **Machu Picchu, Peru:** Thánh địa thất lạc của người Inca giữa rừng mây.
  - **Rome, Ý:** Vẻ uy nghi của đế chế, đài phun nước Baroque và phong vị La Dolce Vita.
  - **Maldives:** Đảo san hô riêng, hiện tượng phát quang sinh học và sự yên bình trên mặt nước.
  - **Banff và hồ Louise, Canada:** Hồ băng xanh ngọc và dãy núi Rocky của Canada.
  - **Petra, Jordan:** Thành phố Đỏ Hồng tạc vào đá sa thạch sa mạc.
- **Tương tác trên thẻ:** Phóng ảnh khi rê chuột (`group-hover:scale-110`), nút trái tim lưu yêu thích, huy hiệu quốc gia, xếp hạng sao, giá khởi điểm và nút xem nhanh.

### 5. Khu vực tính năng dạng Bento Grid
- **Xem trước ảo 360°:** Khung không gian tương tác với bộ chọn địa điểm (Santorini, Maldives, Kyoto), điểm tương tác và cửa sổ xem 360° toàn màn hình có hiệu ứng lia giả lập theo con quay hồi chuyển cùng âm thanh sóng biển.
- **Hướng dẫn viên địa phương được tuyển chọn:** Giới thiệu các chuyên gia bản địa đã được thẩm định (bậc thầy thiền, nhà khảo cổ học biển, sử gia vùng Andes), kèm chứng chỉ và yêu cầu tư vấn trực tiếp.
- **Theo dõi thời điểm đẹp nhất để ghé thăm:** Bảng thông tin mùa tương tác với các tab tháng (Tháng 4, 5, 6, 9, 11), nhiệt độ, mật độ du khách và thời điểm hoa nở.
- **Thẻ du lịch có trách nhiệm:** Các hành trình trung hòa carbon 100% và quỹ bảo tồn di sản bản địa.

### 6. Nhật ký lữ khách và lời chứng thực
- Trích dẫn theo phong cách National Geographic từ lữ khách đã xác minh, kèm xếp hạng sao và thông tin chuyến đi.
- Biểu ngữ ghi nhận từ báo chí: Condé Nast, National Geographic, Robb Report và Travel + Leisure.

### 7. Bản tin Wanderlust và chân trang
- **Đăng ký nhận bản tin:** Biểu mẫu email tương tác, hiển thị trạng thái đăng ký thành công.
- **Liên kết tuyển chọn:** Điểm nghỉ dưỡng, Trải nghiệm và Cam kết & Độ tin cậy.
- **Mạng xã hội:** Biểu tượng SVG gọn gàng, phát sáng khi rê chuột.
- **Tiện ích:** Bộ chọn tiền tệ (USD) và ngôn ngữ.

### 8. Cửa sổ tương tác
- **Chi tiết điểm đến:** Thư viện ảnh độ phân giải cao dạng băng chuyền, tổng quan hành trình, các điểm nổi bật được tuyển chọn và nút bắt đầu đặt chỗ.
- **Chuyến tham quan ảo 360°:** Điều khiển xoay toàn cảnh (Sang trái, Sang phải, Đặt lại), chỉ báo phương vị la bàn, điểm tương tác trong không gian và mô phỏng âm thanh môi trường.
- **Lên kế hoạch chuyến đi:** Biểu mẫu tùy chỉnh hành trình (điểm đến, thời gian, số khách, yêu cầu riêng), xác nhận tức thì và mã đặt chỗ.

---

## 🚀 Chạy dự án

```bash
# 1. Khởi động máy chủ phát triển Vite
npm run dev

# 2. Tạo bản dựng cho môi trường production
npm run build

# 3. Xem thử bản dựng production
npm run preview
```

Mở [http://localhost:5173](http://localhost:5173) trong trình duyệt.
