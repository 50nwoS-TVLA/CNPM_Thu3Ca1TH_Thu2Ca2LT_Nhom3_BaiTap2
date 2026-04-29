# Tài Liệu Yêu Cầu Nghiệp Vụ (Business Requirements)

**Dự án:** Trò chơi Battleship  
**Phiên bản:** 1.1  
**Ngày tạo:** 21-04-2026  
**Ngày cập nhật:** 27-04-2026  
**Tác giả:** Nhóm dự án (5 thành viên)  

---

## Lịch Sử Thay Đổi

| Phiên bản | Ngày | Người thực hiện | Mô tả thay đổi |
|---|---|---|---|
| 1.0 | 21-04-2026 | Nhóm dự án | Phiên bản BRD đầu tiên. |
| 1.1 | 27-04-2026 | Nhóm dự án | Trình bày lại và sắp xếp lại cấu trúc nội dung.<br>- Bổ sung lịch sử phiên bản.<br>- Bổ sung sản phẩm bàn giao (DEL-XX) và lộ trình tổng quan.<br>- Bổ sung metadata cho yêu cầu nghiệp vụ (Mức độ ưu tiên, Bên yêu cầu).<br>- Bổ sung cấu hình đội tàu tiêu chuẩn.<br>- Rút gọn và cập nhật bảng thuật ngữ.<br>- Làm rõ dự án không bao gồm AI module/integration. |

---

## 1. Tóm Tắt Dự Án

### 1.1. Bối Cảnh Và Vấn Đề

Bài tập học phần Công nghệ Phần mềm yêu cầu nhóm 5 thành viên xây dựng và bàn giao một sản phẩm phần mềm hoàn chỉnh, có tài liệu đầy đủ, có thể demo và được đánh giá trong khoảng 3 tuần.

### 1.2. Giải Pháp Đề Xuất

Xây dựng trò chơi Battleship dạng ứng dụng web đơn trang (SPA) sử dụng React, hỗ trợ chế độ đơn người chơi đối đấu với đối thủ máy tính điều khiển bằng logic đơn giản (không dùng AI/ML). 

Sản phẩm bao gồm đầy đủ luồng gameplay Battleship tiêu chuẩn — đặt tàu, tấn công theo lượt, xác định thắng/thua — trên bảng 10×10, chạy trực tiếp trên trình duyệt mà không cần cài đặt.

### 1.3. Kết Quả Kỳ Vọng

- Trò chơi Battleship web hoàn chỉnh, có thể chơi được với quy tắc rõ ràng và gameplay ổn định.
- Phiên bản 1 được bàn giao đúng hạn (trước 10-05-2026) và không vượt phạm vi đã xác định.
- Toàn bộ sản phẩm bàn giao (xem mục 3.3) hoàn thành, không có lỗi nghiêm trọng (critical issue) nào chưa được giải quyết tính đến 09-05-2026.

---

## 2. Mục Tiêu Dự Án

### 2.1. Mục Tiêu Kinh Doanh

Dự án được thực hiện trong bối cảnh học thuật nhằm vận dụng kỹ năng phân tích nghiệp vụ, thiết kế hệ thống và phát triển phần mềm. Mục tiêu chiến lược là hoàn thành một sản phẩm phần mềm hoàn chỉnh, có thể demo và đánh giá được, đúng phạm vi và đúng thời hạn.

### 2.2. Mục Tiêu Cụ Thể

| ID | Mục tiêu | Cách đánh giá | Giá trị mục tiêu | Thời hạn |
|---|---|---|---|---|
| BG-01 | Cung cấp một trò chơi Battleship có thể chơi được với quy tắc rõ ràng và gameplay ổn định. | Tỷ lệ test cases PASS cho 5 luồng gameplay cốt lõi | 100% | 08-05-2026 |
| BG-02 | Cung cấp một sản phẩm có thể demo và đánh giá được. | Số sản phẩm bàn giao hoàn thành, không có lỗi nghiêm trọng (critical issue) chưa được giải quyết | 11/11 sản phẩm bàn giao (xem mục 3.3) | 09-05-2026 |
| BG-03 | Đảm bảo phạm vi phiên bản 1 được kiểm soát và bàn giao đúng hạn. | Số hạng mục ngoài phạm vi đã chốt trong BRD v1.1 và thời hạn bàn giao | 0 - Không có hạng mục ngoài phạm vi được triển khai; bàn giao trước 10-05-2026 | 10-05-2026 |

### 2.3. Tiêu Chí Nghiệm Thu

| Tiêu chí | Mô tả | Cách kiểm chứng |
|---|---|---|
| Trò chơi vận hành trên web | Trò chơi chạy được trên môi trường web. | Khởi chạy và chơi thử trực tiếp trên trình duyệt. |
| Luồng gameplay hoàn chỉnh | Người chơi có thể tham gia ván đấu với máy tính từ giai đoạn thiết lập đến kết thúc trận. | Thực hiện ít nhất một ván chơi hoàn chỉnh từ đầu đến cuối. |
| Bảng và đội tàu tiêu chuẩn | Trò chơi sử dụng bảng 10×10 và đội tàu (Fleet) Battleship tiêu chuẩn. | Kiểm tra cấu hình bảng và đội tàu trong ván chơi. |
| Điều kiện thắng/thua | Trò chơi xác định đúng điều kiện thắng/thua. | Chơi đến khi có bên thắng và kiểm tra kết quả hiển thị. |
| Giới hạn phạm vi | Phiên bản 1 không bao gồm chế độ trực tuyến, theo dõi điểm số hoặc lưu lịch sử trận đấu. | Xác nhận không có tính năng ngoài phạm vi trong sản phẩm. |
| Sẵn sàng bàn giao | Sản phẩm và tài liệu bàn giao đạt trạng thái có thể đánh giá trước ngày 10-05-2026. | Kiểm tra danh sách 11 sản phẩm bàn giao tại mục 3.3. |

---

## 3. Phạm Vi Dự Án

### 3.1. Trong Phạm Vi

| # | Hạng mục | Mô tả ngắn |
|---|---|---|
| SC-01 | Trò chơi Battleship trên web | Trò chơi Battleship chạy trên nền tảng trình duyệt web. |
| SC-02 | Chế độ đơn người chơi | Người chơi đối đấu với đối thủ máy tính điều khiển bằng logic đơn giản (không dùng AI/ML). |
| SC-03 | Luồng gameplay cốt lõi | Thiết lập bảng, đặt tàu, tấn công theo lượt, phản hồi trúng/trượt, và kết quả thắng/thua. |
| SC-04 | Quy tắc Battleship tiêu chuẩn | Áp dụng quy tắc Battleship tiêu chuẩn (bảng 10×10, đội tàu chuẩn). |
| SC-05 | Giao diện người dùng | Giao diện tập trung vào sự rõ ràng và dễ sử dụng. |
| SC-06 | Triển khai React frontend | Hệ thống được triển khai bằng React trên frontend. |

### 3.2. Ngoài Phạm Vi

| # | Hạng mục | Lý do loại trừ |
|---|---|---|
| EX-01 | Chế độ nhiều người chơi trực tuyến | Yêu cầu kết nối thời gian thực và hạ tầng backend phức tạp, vượt khả năng của nhóm trong thời gian này. |
| EX-02 | Chế độ hai người chơi cùng thiết bị | Cần giao diện chia màn hình hoặc luân phiên thiết bị; không phải mục tiêu thiết kế của phiên bản này. |
| EX-03 | Thư viện hoặc framework AI/ML | Đối thủ máy tính dùng logic đơn giản (không phải AI); tích hợp thư viện AI/ML tăng độ phức tạp không cần thiết. |
| EX-04 | Hệ thống xếp hạng hoặc bảng điểm cạnh tranh | Yêu cầu lưu trữ dữ liệu người chơi và backend; phù hợp hơn cho phiên bản sau. |
| EX-05 | Lưu trữ lịch sử trận đấu | Cần cơ chế persistence (local storage hoặc backend); nằm ngoài gameplay cốt lõi cần hoàn thành. |
| EX-06 | Hoạt ảnh phức tạp, đồ họa chất lượng cao | Tốn thời gian phát triển frontend đáng kể mà không cải thiện tính năng gameplay. |
| EX-07 | Bộ chỉnh sửa quy tắc hoặc thiết lập tùy chỉnh | Cần UI tùy chỉnh phức tạp; phiên bản 1 chỉ hỗ trợ luật Battleship tiêu chuẩn. |

### 3.3. Sản Phẩm Bàn Giao

Các sản phẩm bàn giao sau là tài liệu hoặc đầu ra thuộc phạm vi dự án, không phải yêu cầu chức năng trực tiếp của trò chơi Battleship.

| Mã | Sản phẩm bàn giao | Mô tả | Deadline |
|---|---|---|---|
| DEL-01 | Business Requirements Document | Mô tả yêu cầu nghiệp vụ và phạm vi dự án. | 29-04-2026 |
| DEL-02 | Use Case Diagram | Thể hiện actor và use case chính. | 29-04-2026 |
| DEL-03 | System Architecture Diagram | Mô tả kiến trúc tổng quan của hệ thống. | 01-05-2026 |
| DEL-04 | Use Case Specification | Mô tả chi tiết từng use case. | 29-04-2026 |
| DEL-05 | Sequence Diagram | Mô tả luồng tương tác chính theo thời gian. | 01-05-2026 |
| DEL-06 | Activity Diagram hoặc Class Diagram | Bổ sung góc nhìn thiết kế khác cho hệ thống. | 01-05-2026 |
| DEL-07 | Test Case Document | Mô tả test cases dùng để kiểm tra hệ thống. | 03-05-2026 |
| DEL-08 | Setup Development Environment Document | Hướng dẫn thiết lập môi trường phát triển. | 03-05-2026 |
| DEL-09 | Deploy Document | Hướng dẫn quy trình triển khai. | 08-05-2026 |
| DEL-10 | Slide PPTX | Tài liệu trình bày/demo dự án. | 09-05-2026 |
| DEL-11 | Video Demo | Video minh họa sản phẩm hoạt động. | 09-05-2026 |

### 3.4. Lộ Trình Tổng Quan

| Giai đoạn | Thời gian | Nội dung chính | Kết quả đầu ra |
|---|---|---|---|
| 1 | 26-04-2026 → 29-04-2026 | Chuẩn hóa BRD, URD, Use Case Diagram và Use Case Specification. | Bộ tài liệu yêu cầu và use case đã thống nhất. |
| 2 | 30-04-2026 → 01-05-2026 | Hoàn thiện System Architecture Diagram, Sequence Diagram và Activity/Class Diagram. | Bộ design diagrams. |
| 3 | 02-05-2026 → 03-05-2026 | Viết Test Case Document và Setup Development Environment Document. | Test Case Document, Setup Document. |
| 4 | 04-05-2026 → 06-05-2026 | Implement chức năng theo từng use case. | Phiên bản chức năng có thể chạy. |
| 5 | 07-05-2026 → 08-05-2026 | Execute test cases, fix lỗi và hoàn thiện Deploy Document. | Test execution result, Deploy Document. |
| 6 | 09-05-2026 | Chuẩn bị Slide PPTX, Video Demo và review tổng thể. | Slide, video demo, bộ tài liệu hoàn chỉnh. |
| Release v1.0 | Trước 10-05-2026 | Bàn giao phiên bản đầu tiên. | Sản phẩm và tài liệu sẵn sàng đánh giá. |

---

## 4. Yêu Cầu Nghiệp Vụ

### 4.1. Yêu Cầu Nghiệp Vụ Chính

| ID | Yêu cầu | Mức độ ưu tiên | Lý do | Tiêu chí kiểm tra | Bên yêu cầu |
|---|---|---|---|---|---|
| BR-01 | Người chơi cần có thể bắt đầu ván chơi Battleship mới từ trình duyệt web. | MUST | Đây là điểm khởi đầu bắt buộc của gameplay. | Người chơi có thể khởi tạo một ván chơi mới từ giao diện web. | Người chơi |
| BR-02 | Trò chơi cần hỗ trợ chế độ đơn người chơi đối đấu với đối thủ máy tính. | MUST | Phù hợp với phạm vi đơn người chơi của phiên bản 1. | Một ván chơi có thể diễn ra giữa người chơi và đối thủ máy tính điều khiển. | Người chơi |
| BR-03 | Ván chơi sử dụng bảng kích thước 10×10 theo luật Battleship tiêu chuẩn. | MUST | Bảng 10×10 là nền tảng của luật Battleship tiêu chuẩn. | Bảng chơi được khởi tạo và hiển thị đúng kích thước 10×10. | Người chơi |
| BR-04 | Ván chơi sử dụng cấu hình đội tàu (Fleet) Battleship tiêu chuẩn. | MUST | Đội tàu (Fleet) tiêu chuẩn giúp gameplay nhất quán với luật Battleship cơ bản. | Cấu hình đội tàu (Fleet) khớp với quy định tại RUL-02. | Người chơi |
| BR-05 | Người chơi cần có thể đặt toàn bộ đội tàu lên bảng trước khi bắt đầu lượt tấn công. | MUST | Đặt tàu là bước thiết lập cần thiết trước khi tấn công theo lượt. | Người chơi có thể đặt toàn bộ đội tàu (Fleet) hợp lệ trước khi bắt đầu lượt tấn công. | Người chơi |
| BR-06 | Ván chơi diễn ra theo lượt, luân phiên giữa người chơi và đối thủ máy tính. | MUST | Tấn công theo lượt là cơ chế gameplay chính của Battleship. | Người chơi và máy tính lần lượt thực hiện lượt tấn công theo đúng trạng thái ván chơi. | Người chơi |
| BR-07 | Kết quả mỗi lượt tấn công — trúng (Hit), trượt (Miss), nhấn chìm (Sunk) — cần được phản hồi rõ ràng cho người chơi. | MUST | Phản hồi kết quả tấn công giúp người chơi theo dõi trạng thái ván chơi. | Sau mỗi lượt, trạng thái trúng, trượt hoặc nhấn chìm được hiển thị đúng khi điều kiện tương ứng xảy ra. | Người chơi |
| BR-08 | Ván chơi kết thúc khi toàn bộ đội tàu của một bên bị nhấn chìm. | MUST | Điều kiện kết thúc là bắt buộc để hoàn thành gameplay. | Ván chơi kết thúc khi toàn bộ đội tàu (Fleet) của một bên đã bị nhấn chìm. | Người chơi |
| BR-09 | Kết quả thắng hoặc thua cần được thông báo khi ván chơi kết thúc. | SHOULD | Kết quả cuối ván hoàn thiện trải nghiệm chơi. | Khi ván chơi kết thúc, kết quả thắng hoặc thua được hiển thị tương ứng. | Người chơi |
| BR-10 | Phiên bản 1 không bao gồm tính năng điểm số, bảng xếp hạng hoặc lưu lịch sử trận đấu. | SHOULD | Giới hạn phạm vi giúp phiên bản 1 tập trung vào gameplay cốt lõi. | Phiên bản 1 không có tính năng điểm số, bảng xếp hạng hoặc lưu lịch sử trận đấu. | Nhóm phát triển |

### 4.2. Quy Tắc Nghiệp Vụ

| ID | Quy tắc | Nguồn / Cơ sở |
|---|---|---|
| RUL-01 | Kích thước bảng chơi cố định là 10×10. | Luật Battleship tiêu chuẩn |
| RUL-02 | Đội tàu (Fleet) tuân theo cấu hình Battleship tiêu chuẩn được mô tả trong bảng cấu hình đội tàu tiêu chuẩn. | Luật Battleship tiêu chuẩn |
| RUL-03 | Người chơi thắng khi toàn bộ tàu của đối thủ bị nhấn chìm. | Luật Battleship tiêu chuẩn |
| RUL-04 | Tàu phải được đặt theo chiều ngang hoặc dọc, không chéo. | Luật Battleship tiêu chuẩn |
| RUL-05 | Các tàu không được chồng ô lên nhau; đặt liền kề được cho phép. | Luật Battleship tiêu chuẩn |
| RUL-06 | Mỗi ô trên bảng chỉ có thể bị tấn công một lần trong ván chơi. | Luật Battleship tiêu chuẩn |
| RUL-07 | Người chơi thực hiện lượt đầu tiên; sau đó luân phiên với đối thủ máy tính. | Luật Battleship tiêu chuẩn |
| RUL-08 | Không áp dụng quy tắc đặc biệt trong phiên bản 1. | Quy định phạm vi v1 |
| RUL-09 | Phiên bản 1 không bao gồm tính năng điểm số hoặc xếp hạng. | Quy định phạm vi v1 |
| RUL-10 | Phiên bản 1 không lưu lịch sử trận đấu. | Quy định phạm vi v1 |
| RUL-11 | Phiên bản 1 không hỗ trợ chế độ chơi trực tuyến. | Quy định phạm vi v1 |

Cấu hình đội tàu (Fleet) tiêu chuẩn trong phiên bản 1 bao gồm:

| Loại tàu | Số lượng | Kích thước |
|---|---:|---:|
| Tàu sân bay (Carrier) | 1 | 5 ô |
| Thiết giáp hạm (Battleship) | 1 | 4 ô |
| Tàu tuần dương (Cruiser) | 1 | 3 ô |
| Tàu ngầm (Submarine) | 1 | 3 ô |
| Tàu khu trục (Destroyer) | 1 | 2 ô |

---

## 5. Các Bên Liên Quan

### 5.1. Danh Sách Stakeholder

| Bên liên quan | Mô tả | Kỳ vọng chính | Mức độ ảnh hưởng |
|---|---|---|---|
| Nhóm phát triển / Chủ dự án | Nhóm 5 thành viên cùng chịu trách nhiệm phân tích, phát triển, kiểm thử và bàn giao dự án. | Hoàn thành sản phẩm và tài liệu đúng phạm vi, đúng thời hạn. | Cao |
| Người chơi | Người dùng cuối trực tiếp tương tác với trò chơi. | Gameplay đơn giản, dễ hiểu và vận hành trơn tru. | Trung bình |
| Người đánh giá / Đối tác | Bên tiếp nhận, kiểm tra sản phẩm và tài liệu bàn giao. | Tài liệu đầy đủ, sản phẩm nhất quán, đáp ứng phạm vi đã cam kết. | Cao |

---

## 6. Ràng Buộc Dự Án

### 6.1. Ràng Buộc Chính

| Loại ràng buộc | Mô tả | Mức độ ảnh hưởng |
|---|---|---|
| Thời gian | Phiên bản đầu tiên cần hoàn thành và sẵn sàng bàn giao trước ngày 10-05-2026. | Cao |
| Kỹ thuật | Hệ thống phải được triển khai dưới dạng ứng dụng web sử dụng React. | Trung bình |
| Môi trường triển khai | Môi trường deployment cụ thể sẽ được xác định trong Deploy Document; BRD chỉ xác định hệ thống là web app React. | Thấp |
| Ngân sách | Không có ngân sách thực tế — dự án học thuật. | Thấp |
| Nhân lực | Nhóm 5 thành viên, không có nguồn lực bổ sung. | Trung bình |
| UX/UI | Giao diện phải đơn giản và rõ ràng, không yêu cầu trau chuốt cao. | Thấp |
| Phạm vi | Phiên bản 1 phải giới hạn trong bộ tính năng tối thiểu đã thống nhất. | Cao |

### 6.3. Rủi Ro Dự Án

| ID | Mô tả rủi ro | Xác suất | Mức độ tác động | Chiến lược xử lý |
|---|---|---|---|---|
| RSK-01 | Nhóm chủ động thêm tính năng ngoài phạm vi đã chốt (scope creep) | Cao | Cao | Đóng băng phạm vi theo BRD v1.0; mọi thay đổi phạm vi cần qua quy trình xét duyệt nội bộ. |
| RSK-02 | Phát triển giao diện web mất nhiều thời gian hơn dự kiến | Trung bình | Trung bình | Ưu tiên bố cục đơn giản, tránh thêm độ phức tạp thị giác không cần thiết. |
| RSK-03 | Logic điều khiển đối thủ máy tính trở nên phức tạp hơn kế hoạch | Trung bình | Trung bình | Giữ logic điều khiển đối thủ máy tính ở mức cơ bản trong phiên bản 1. |
| RSK-04 | Yêu cầu bị lệch trong quá trình triển khai | Trung bình | Cao | Sử dụng BRD này làm tài liệu tham chiếu (baseline) cho các tài liệu yêu cầu tiếp theo và kiểm tra xác nhận. |

### 6.4. Giả Định

- Mức độ khả dụng cơ bản là đủ, miễn là các quy tắc và tương tác trong trò chơi được truyền đạt rõ ràng.
- Đội tàu (Fleet) Battleship tiêu chuẩn có thể được triển khai mà không cần tùy chỉnh trong phiên bản đầu tiên.
- Logic điều khiển đối thủ máy tính ở mức cơ bản là chấp nhận được cho phiên bản 1.

---

## Phụ Lục

### Phụ Lục A: Thuật Ngữ Và Định Nghĩa

| Thuật ngữ | Định nghĩa |
|---|---|
| BRD | Business Requirements Document; tài liệu mô tả yêu cầu ở cấp độ nghiệp vụ, độc lập với giải pháp kỹ thuật. |
| URD | User Requirements Document; tài liệu mô tả yêu cầu người dùng và các nhu cầu tương tác với hệ thống. |
| Stakeholder | Cá nhân hoặc nhóm có lợi ích, trách nhiệm hoặc ảnh hưởng liên quan đến dự án. |
| Single Player | Chế độ một người chơi, không cần người chơi khác tham gia cùng. |
| Gameplay | Chuỗi tương tác và cơ chế chơi trong một phiên chơi. |
| UI | User Interface; giao diện người dùng, phần người dùng nhìn thấy và tương tác trực tiếp. |
| UX/UI | User Experience / User Interface; trải nghiệm người dùng và giao diện người dùng. |
| Frontend | Phần giao diện phía người dùng của ứng dụng web, chạy trực tiếp trên trình duyệt. |
| Deployment | Quá trình đưa hệ thống hoặc phiên bản sản phẩm vào môi trường có thể sử dụng. |
| Online Multiplayer | Chế độ nhiều người chơi trực tuyến qua kết nối mạng. |
| Fleet | Đội tàu trong Battleship, gồm loại tàu, số lượng và kích thước theo quy tắc chuẩn. |
| Standard Fleet Configuration | Cấu hình đội tàu tiêu chuẩn trong Battleship, gồm tàu sân bay (Carrier), thiết giáp hạm (Battleship), tàu tuần dương (Cruiser), tàu ngầm (Submarine) và tàu khu trục (Destroyer). |
| Hit | Trúng; kết quả khi người chơi tấn công vào ô có tàu của đối thủ. |
| Miss | Trượt; kết quả khi người chơi tấn công vào ô không có tàu của đối thủ. |
| Sunk | Đã nhấn chìm; trạng thái khi toàn bộ các ô của một tàu đã bị tấn công trúng. |
| Baseline | Phiên bản tài liệu được chốt làm tham chiếu chính thức cho so sánh và kiểm soát thay đổi. |
| Acceptance Criteria | Điều kiện tối thiểu mà hệ thống phải đáp ứng để được coi là hoàn thành và bàn giao thành công. |
| Use Case | Mô tả một mục tiêu hoặc tương tác chính giữa actor và hệ thống. |
| Test Case | Mô tả điều kiện, bước thực hiện và kết quả mong đợi để kiểm tra một chức năng hoặc yêu cầu. |
| Scope creep | Tình trạng phạm vi dự án mở rộng vượt ngoài kế hoạch ban đầu, gây ảnh hưởng đến tiến độ và nguồn lực. |
| BG | Business Goal; ký hiệu định danh cho mục tiêu nghiệp vụ của dự án (BG-01, BG-02, ...). |
| BR | Business Requirement; ký hiệu định danh cho yêu cầu nghiệp vụ (BR-01, BR-02, ...). |
| RUL | Business Rule; ký hiệu định danh cho quy tắc nghiệp vụ (RUL-01, RUL-02, ...). |
| RSK | Risk; ký hiệu định danh cho rủi ro dự án được theo dõi (RSK-01, RSK-02, ...). |
| DEL | Deliverable; ký hiệu định danh cho sản phẩm bàn giao của dự án (DEL-01, DEL-02, ...). |
| MUST / SHOULD / COULD | Các mức ưu tiên yêu cầu theo phương pháp MoSCoW: MUST = bắt buộc (dự án thất bại nếu thiếu), SHOULD = quan trọng nhưng có thể linh hoạt, COULD = mong muốn nhưng có thể trì hoãn. |
| Luật Battleship tiêu chuẩn | Bộ quy tắc chơi Battleship theo ấn bản chính thức của Hasbro Inc. (Milton Bradley, 1967). Xem Phụ Lục B [1]. |
| SPA | Single Page Application — Ứng dụng web đơn trang, tải một lần và cập nhật nội dung động mà không cần tải lại toàn bộ trang. |
| React | Thư viện JavaScript mã nguồn mở dùng để xây dựng giao diện người dùng (UI) — framework chính của dự án. |
| AI/ML | Artificial Intelligence / Machine Learning — Trí tuệ nhân tạo / Học máy. |
| Backend | Phần xử lý phía máy chủ của ứng dụng, bao gồm logic nghiệp vụ, cơ sở dữ liệu và API. |
| Persistence | Lưu trữ bền vững — khả năng giữ lại dữ liệu sau khi đóng ứng dụng (ví dụ: local storage, cơ sở dữ liệu). |
| SC | Scope (In Scope) — Ký hiệu định danh cho hạng mục trong phạm vi dự án (SC-01, SC-02, …). |
| EX | Exclusion (Out of Scope) — Ký hiệu định danh cho hạng mục ngoài phạm vi dự án (EX-01, EX-02, …). |

---

### Phụ Lục B: Tài Liệu Tham Chiếu

| # | Tài liệu | Phiên bản / Ngày |
|---|---|---|
| [1] | Hasbro Inc., *Battleship — Game Rules* | Hiện hành. xem: hasbro.com/battleship |
