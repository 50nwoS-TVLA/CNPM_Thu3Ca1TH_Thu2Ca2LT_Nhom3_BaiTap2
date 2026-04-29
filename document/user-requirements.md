# Tài Liệu Yêu Cầu Người Dùng (URD)

**Dự án:** Trò chơi Battleship  
**Phiên bản:** 2.0  
**Ngày tạo:** 21-04-2026  
**Ngày cập nhật:** 27-04-2026  
**Tác giả:** Nhóm dự án (5 thành viên)  

---

## Lịch Sử Thay Đổi

| Phiên bản | Ngày | Người thực hiện | Mô tả thay đổi |
|---|---|---|---|
| 1.0 | 21-04-2026 | Nhóm dự án | Bản nháp đầu tiên. |
| 1.1 | 21-04-2026 | Nhóm dự án | Bổ sung ma trận truy xuất yêu cầu (RTM). |
| 2.0 | 27-04-2026 | Nhóm dự án | - Thêm metadata, tóm tắt, mô tả người dùng, tổng quan hệ thống.<br>- Tái cấu trúc User Story theo Nhóm tính năng (Epic). <br> - Sửa tiêu chí chấp nhận mơ hồ; viết lại Tiêu chí chấp nhận dạng GIVEN/WHEN/THEN. <br>- Thêm tiêu chí lỗi cho US-05, đổi tiền tố định danh (ACT-/ASM-/DEP-), mở rộng bảng phụ thuộc, bổ sung bảng thuật ngữ. <br>- Chuyển yêu cầu phi chức năng (NFR) vào Định nghĩa Hoàn thành (DoD).<br>- Bỏ bảng FR/NFR riêng và ma trận truy xuất yêu cầu (RTM). |

---

## Tóm Tắt

Tài liệu này mô tả yêu cầu người dùng cho phiên bản 1 của trò chơi Battleship trên nền tảng web. Người chơi — nhóm người dùng duy nhất trong phiên bản này — cần có thể khởi tạo ván chơi mới, đặt hạm đội (Fleet) lên bảng 10×10, thực hiện tấn công theo lượt với đối thủ máy tính, nhận phản hồi kết quả trúng/trượt/nhấn chìm, và xem kết quả thắng/thua khi ván chơi kết thúc. 

Toàn bộ yêu cầu được tổ chức dưới dạng Danh sách Hạng mục Sản phẩm (Product Backlog) gồm 4 Nhóm tính năng (Epic) và 10 Hạng mục người dùng (User Story), là đầu vào trực tiếp cho quá trình phát triển.

---

## 1. Giới Thiệu

### 1.1. Mục Đích Tài Liệu

Tài liệu này mô tả các yêu cầu người dùng cho hệ thống trò chơi Battleship, dưới dạng Danh sách Hạng mục Sản phẩm (Product Backlog) gồm các Nhóm tính năng (Epic) và Hạng mục người dùng (User Story). 

Tài liệu là đầu ra trực tiếp từ Tài liệu Yêu cầu Nghiệp vụ (BRD) và là đầu vào cho quá trình phát triển — team dùng tài liệu này để lập kế hoạch, triển khai và kiểm thử từng vòng lặp.

### 1.2. Phạm Vi Tài Liệu

- **Hệ thống:** Trò chơi Battleship — ứng dụng web đơn trang (Single Page Application — SPA)
- **Phiên bản sản phẩm được bao phủ:** v1.0
- **Nhóm người dùng được bao phủ:** Người chơi (Player)
- **Nhóm người dùng ngoài phạm vi:** Không có — phiên bản 1 chỉ có một nhóm người dùng

**Trong phạm vi:**

- **(SC-01)** Bắt đầu một ván Battleship mới trên giao diện web.
- **(SC-02)** Chơi ở chế độ đơn người chơi (Single Player) với đối thủ là máy tính.
- **(SC-03)** Quan sát bảng chơi 10×10.
- **(SC-04)** Đặt tàu trước khi bắt đầu ván chơi.
- **(SC-05)** Chơi theo hạm đội (Fleet) Battleship tiêu chuẩn.
- **(SC-06)** Thực hiện tấn công theo lượt.
- **(SC-07)** Nhận phản hồi rõ ràng cho từng lượt tấn công: trúng (Hit), trượt (Miss), nhấn chìm (Sunk).
- **(SC-08)** Nhận kết quả cuối ván: thắng hoặc thua.

**Ngoài phạm vi:**

- **(EX-01)** Chế độ nhiều người chơi trực tuyến (Online Multiplayer).
- **(EX-02)** Chế độ hai người chơi cùng thiết bị.
- **(EX-03)** Thư viện hoặc framework AI/ML cho đối thủ máy tính.
- **(EX-04)** Hệ thống xếp hạng hoặc bảng điểm cạnh tranh (Leaderboard).
- **(EX-05)** Lưu trữ lịch sử trận đấu.
- **(EX-06)** Hoạt ảnh phức tạp, đồ họa chất lượng cao vượt mức cần thiết cho gameplay rõ ràng.
- **(EX-07)** Bộ chỉnh sửa quy tắc hoặc thiết lập tùy chỉnh trận đấu.

### 1.3. Tài Liệu Liên Quan

| Tên tài liệu | Phiên bản | Ngày | Mối liên hệ |
|---|---|---|---|
| Tài liệu Yêu cầu Nghiệp vụ (BRD) | v1.1 | 26-04-2026 | Nguồn gốc của URD này |

---

## 2. Mô Tả Người Dùng

### 2.1. Phân Nhóm Người Dùng

| ID | Nhóm người dùng | Đặc điểm | Tần suất sử dụng | Quyền hạn |
|---|---|---|---|---|
| UG-01 | Người chơi (Player) | Người dùng phổ thông, không yêu cầu kinh nghiệm kỹ thuật; quen thuộc với trò chơi trên trình duyệt web | Không thường xuyên — theo nhu cầu giải trí | Toàn quyền tương tác gameplay (đặt tàu, tấn công, xem kết quả) |

### 2.2. Persona Người Dùng Chính

**Persona 1: "Huy, sinh viên đại học"**

| Trường | Nội dung |
|---|---|
| Tên & Vai trò | Huy — Sinh viên năm 3, khoa Công nghệ Thông tin |
| Nhóm người dùng | UG-01 |
| Trình độ công nghệ | Khá — sử dụng thành thạo trình duyệt web, quen với các trò chơi web đơn giản |
| Mục tiêu chính | Chơi một ván Battleship nhanh để giải trí giữa các giờ học |
| Điểm đau (Pain points) | Không muốn cài đặt phần mềm; muốn bắt đầu chơi ngay mà không cần tạo tài khoản hay đọc hướng dẫn dài |
| Thiết bị sử dụng | Laptop, trình duyệt Chrome/Firefox, kết nối Wi-Fi |
| Điều kiện thành công | Hoàn thành một ván chơi từ đầu đến cuối trong vòng 10–15 phút mà không gặp lỗi |

### 2.3. Môi Trường Người Dùng

- **Địa điểm sử dụng:** Bất kỳ — tại nhà, trường học, quán cà phê
- **Thiết bị:** Máy tính bàn / Laptop
- **Hệ điều hành / Trình duyệt:** Windows 10+ / macOS / Chrome, Firefox, Edge phiên bản hiện hành
- **Kết nối mạng:** Wi-Fi hoặc mạng LAN ổn định (chỉ cần kết nối để tải trang ban đầu)
- **Số lượng người dùng đồng thời dự kiến:** 1 (ứng dụng chạy hoàn toàn phía client)
- **Tần suất sử dụng điển hình:** Không cố định — chơi theo nhu cầu, mỗi phiên khoảng 10–15 phút

---

## 3. Tổng Quan Hệ Thống Từ Góc Nhìn Người Dùng

### 3.1. Bối Cảnh Hệ Thống

Trò chơi Battleship là một ứng dụng web đơn trang (SPA) chạy hoàn toàn trên trình duyệt của người chơi. 

Người chơi là actor duy nhất tương tác trực tiếp với hệ thống; đối thủ máy tính là thành phần nội bộ của hệ thống, thực hiện lượt tấn công tự động theo logic đơn giản. 

Hệ thống không kết nối đến server bên ngoài hoặc hệ thống thứ ba nào trong quá trình gameplay.

> Sơ đồ ngữ cảnh chi tiết xem tại System Architecture Diagram (DEL-03).

### 3.2. Tổng Quan Tính Năng Từ Góc Nhìn Người Dùng

| ID | Tính năng (từ góc nhìn người dùng) | Nhóm người dùng | Nguồn BRD |
|---|---|---|---|
| F-01 | Người chơi có thể bắt đầu một ván Battleship mới từ giao diện web | UG-01 | BR-01 |
| F-02 | Người chơi chơi ở chế độ đơn người chơi đối đấu với máy tính | UG-01 | BR-02 |
| F-03 | Người chơi thấy bảng chơi kích thước 10×10 | UG-01 | BR-03 |
| F-04 | Ván chơi sử dụng hạm đội (Fleet) Battleship tiêu chuẩn | UG-01 | BR-04 |
| F-05 | Người chơi có thể đặt toàn bộ tàu lên bảng trước khi tấn công | UG-01 | BR-05 |
| F-06 | Ván chơi diễn ra theo lượt luân phiên giữa người chơi và máy tính | UG-01 | BR-06 |
| F-07 | Người chơi nhận phản hồi trúng (Hit), trượt (Miss) hoặc nhấn chìm (Sunk) sau mỗi lượt tấn công | UG-01 | BR-07 |
| F-08 | Ván chơi kết thúc khi toàn bộ tàu của một bên bị nhấn chìm | UG-01 | BR-08 |
| F-09 | Người chơi thấy kết quả thắng hoặc thua khi ván chơi kết thúc | UG-01 | BR-09 |

---

## 4. Ràng Buộc Từ Góc Nhìn Người Dùng

| ID | Ràng buộc | Nguồn | Tác động |
|---|---|---|---|
| CON-01 | Trò chơi chạy trên trình duyệt web — người chơi không cần cài đặt phần mềm | Quy định kiến trúc (BRD SC-01, SC-06) | Không thể triển khai dạng desktop hoặc mobile app |
| CON-02 | Giao diện đơn giản, rõ ràng và dễ hiểu — người chơi không cần hướng dẫn phức tạp | Kỳ vọng UX (BRD SC-05) | Giới hạn độ phức tạp giao diện |
| CON-03 | Phiên bản 1 giữ phạm vi gọn — không thêm tính năng ngoài bộ yêu cầu đã xác định | Quy định phạm vi v1 (BRD §3.2) | Mọi yêu cầu mới phải qua quy trình xét duyệt |
| CON-04 | Hành vi máy tính ở mức cơ bản — không sử dụng thư viện AI/ML | Quy định kỹ thuật (BRD EX-03) | Đối thủ máy tính có thể không thách thức cao với người chơi có kinh nghiệm |
| CON-05 | Phiên bản 1 không có tính năng điểm số, bảng xếp hạng, lưu lịch sử trận đấu | Quy định phạm vi v1 (BRD BR-10) | Mỗi ván chơi là độc lập, không lưu trữ kết quả |

---

## 5. Danh Sách Hạng Mục Sản Phẩm (Product Backlog)

### 5.1. Cấu Trúc Nhóm Tính Năng (Epic)

| ID | Tên Epic | Mô tả ngắn | Nguồn BRD | Nhóm người dùng |
|---|---|---|---|---|
| EP-01 | Khởi động ván chơi | Người chơi có thể bắt đầu một ván Battleship mới ở chế độ đơn người chơi | BR-01, BR-02 | UG-01 |
| EP-02 | Thiết lập bảng và đặt tàu | Người chơi chuẩn bị hạm đội trên bảng 10×10 trước khi bắt đầu tấn công | BR-03, BR-04, BR-05 | UG-01 |
| EP-03 | Tấn công theo lượt | Người chơi và máy tính luân phiên tấn công, nhận phản hồi kết quả | BR-06, BR-07 | UG-01 |
| EP-04 | Kết thúc ván chơi | Hệ thống xác định kết thúc và hiển thị kết quả thắng/thua | BR-08, BR-09 | UG-01 |

### 5.2. Danh Sách User Story

---

#### EP-01: Khởi Động Ván Chơi

**US-01 — Bắt đầu ván chơi mới**

| Trường | Nội dung |
|---|---|
| **ID** | US-01 |
| **Epic** | EP-01 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn bắt đầu một ván Battleship mới, để tham gia vào một trận đấu với máy tính. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-01 |
| **Ghi chú** | Ván chơi mới không yêu cầu dữ liệu từ trận trước. |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN người chơi đang ở giao diện chính của trò chơi
WHEN  người chơi chọn bắt đầu ván chơi mới
THEN  hệ thống khởi tạo ván chơi mới và đưa người chơi vào trạng thái sẵn sàng thiết lập trước trận

GIVEN ván chơi mới được khởi tạo
WHEN  người chơi quan sát giao diện
THEN  không có dữ liệu nào từ ván chơi trước được hiển thị hoặc ảnh hưởng đến ván mới
```

---

**US-02 — Nhận biết chế độ đơn người chơi**

| Trường | Nội dung |
|---|---|
| **ID** | US-02 |
| **Epic** | EP-01 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn được thông báo rõ ràng rằng tôi đang chơi với máy tính, để hiểu đúng bối cảnh của ván chơi. |
| **Ưu tiên** | SHOULD |
| **Nguồn BRD** | BR-02 |
| **Ghi chú** | Giao diện không được gây hiểu nhầm rằng phiên bản 1 hỗ trợ chế độ nhiều người chơi. |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN người chơi bắt đầu ván chơi mới
WHEN  người chơi quan sát giao diện ván chơi
THEN  giao diện hiển thị text label hoặc tiêu đề chỉ rõ chế độ đơn người chơi (ví dụ: "vs Computer")

GIVEN người chơi đang trong bất kỳ giai đoạn nào của ván chơi
WHEN  người chơi quan sát giao diện
THEN  không có yếu tố giao diện nào gợi ý rằng hệ thống hỗ trợ chế độ nhiều người chơi
```

---

#### EP-02: Thiết Lập Bảng Và Đặt Tàu

**US-03 — Quan sát bảng chơi 10×10**

| Trường | Nội dung |
|---|---|
| **ID** | US-03 |
| **Epic** | EP-02 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn thấy bảng chơi kích thước 10×10, để hiểu không gian chơi và vị trí thao tác của mình. |
| **Ưu tiên** | SHOULD |
| **Nguồn BRD** | BR-03 |
| **Ghi chú** | Kích thước bảng cố định theo RUL-01. |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN ván chơi đã được khởi tạo
WHEN  người chơi quan sát bảng chơi
THEN  bảng chơi hiển thị đúng 10 hàng và 10 cột

GIVEN ván chơi đang diễn ra ở bất kỳ giai đoạn nào
WHEN  người chơi quan sát bảng chơi
THEN  bảng chơi giữ cùng kiểu bố cục và phân biệt ô bằng border/viền xuyên suốt ván chơi
```

---

**US-04 — Đặt tàu trước khi tấn công**

| Trường | Nội dung |
|---|---|
| **ID** | US-04 |
| **Epic** | EP-02 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn đặt toàn bộ tàu của mình lên bảng trước khi bắt đầu gameplay, để chuẩn bị chiến thuật cho ván chơi. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-05 |
| **Ghi chú** | Quy tắc đặt tàu tuân theo RUL-04 (ngang/dọc, không chéo) và RUL-05 (không chồng ô). |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN ván chơi đang ở giai đoạn thiết lập
WHEN  người chơi đặt tàu lên bảng theo đúng quy tắc
THEN  hệ thống chấp nhận vị trí đặt tàu và hiển thị tàu trên bảng

GIVEN người chơi chưa đặt xong toàn bộ hạm đội
WHEN  người chơi cố gắng bắt đầu giai đoạn tấn công
THEN  hệ thống không cho phép chuyển sang giai đoạn tấn công cho đến khi đặt tàu hoàn tất

GIVEN người chơi thực hiện thao tác đặt tàu không hợp lệ (chồng ô, ngoài bảng, sai hướng)
WHEN  hệ thống kiểm tra vị trí đặt tàu
THEN  hệ thống thông báo lỗi và cho phép người chơi điều chỉnh
```

---

**US-05 — Hạm đội Battleship tiêu chuẩn**

| Trường | Nội dung |
|---|---|
| **ID** | US-05 |
| **Epic** | EP-02 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn trò chơi sử dụng hạm đội Battleship tiêu chuẩn, để có thể chơi theo luật quen thuộc và nhất quán. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-04 |
| **Ghi chú** | Cấu hình hạm đội theo RUL-02. Người chơi không tự cấu hình số lượng hoặc loại tàu. |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN ván chơi mới được khởi tạo
WHEN  người chơi bước vào giai đoạn đặt tàu
THEN  hệ thống cung cấp đúng cấu hình hạm đội tiêu chuẩn: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)

GIVEN ván chơi mới bất kỳ
WHEN  người chơi quan sát danh sách tàu cần đặt
THEN  cấu hình hạm đội giống nhau mỗi ván: 5 tàu cùng loại, cùng kích thước, không thay đổi giữa các ván chơi

GIVEN hệ thống khởi tạo hạm đội cho ván chơi mới
WHEN  số lượng hoặc kích thước tàu không khớp cấu hình chuẩn (5 tàu: 5-4-3-3-2)
THEN  hệ thống không cho phép bắt đầu giai đoạn đặt tàu và ghi log lỗi cấu hình hạm đội
```

---

#### EP-03: Tấn Công Theo Lượt

**US-06 — Chọn ô tấn công**

| Trường | Nội dung |
|---|---|
| **ID** | US-06 |
| **Epic** | EP-03 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn chọn một ô trên bảng của đối thủ để tấn công, để thực hiện lượt chơi của mình. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-06 |
| **Ghi chú** | Mỗi ô chỉ bị tấn công một lần (RUL-06). Người chơi đi lượt đầu tiên (RUL-07). |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN đang là lượt của người chơi trong giai đoạn tấn công
WHEN  người chơi chọn một ô hợp lệ (chưa bị tấn công) trên bảng đối thủ
THEN  hệ thống xử lý lượt tấn công và hiển thị kết quả

GIVEN đang là lượt của người chơi
WHEN  người chơi chọn một ô đã bị tấn công trước đó
THEN  hệ thống không chấp nhận lượt tấn công và thông báo cho người chơi chọn ô khác

GIVEN người chơi vừa thực hiện lượt tấn công hợp lệ
WHEN  hệ thống xử lý xong lượt
THEN  hệ thống chuyển sang lượt của máy tính theo đúng trình tự ván chơi
```

---

**US-07 — Phản hồi kết quả tấn công**

| Trường | Nội dung |
|---|---|
| **ID** | US-07 |
| **Epic** | EP-03 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn biết ngay kết quả tấn công là trúng, trượt hay nhấn chìm, để điều chỉnh chiến thuật cho các lượt tiếp theo. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-07 |
| **Ghi chú** | — |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN người chơi vừa thực hiện lượt tấn công vào ô có tàu đối thủ
WHEN  hệ thống xử lý kết quả
THEN  hệ thống hiển thị kết quả "Trúng" (Hit) trên bảng đối thủ

GIVEN người chơi vừa thực hiện lượt tấn công vào ô không có tàu đối thủ
WHEN  hệ thống xử lý kết quả
THEN  hệ thống hiển thị kết quả "Trượt" (Miss) trên bảng đối thủ

GIVEN lượt tấn công trúng vào ô cuối cùng còn lại của một tàu đối thủ
WHEN  hệ thống xử lý kết quả
THEN  hệ thống hiển thị kết quả "Nhấn chìm" (Sunk) và đánh dấu toàn bộ ô của tàu đó bằng trạng thái hiển thị khác biệt so với Hit thông thường
```

---

**US-08 — Theo dõi lượt tấn công của máy tính**

| Trường | Nội dung |
|---|---|
| **ID** | US-08 |
| **Epic** | EP-03 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn thấy lượt tấn công của máy tính lên bảng của mình, để theo dõi thiệt hại và diễn biến trận đấu. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-06, BR-07 |
| **Ghi chú** | — |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN vừa kết thúc lượt của người chơi
WHEN  máy tính thực hiện lượt tấn công
THEN  hệ thống hiển thị ô bị tấn công trên bảng của người chơi cùng kết quả trúng hoặc trượt

GIVEN máy tính vừa thực hiện lượt tấn công
WHEN  người chơi quan sát bảng của mình
THEN  mỗi ô đã bị tấn công hiển thị trạng thái phân biệt được với ô chưa bị tấn công (ví dụ: màu sắc hoặc icon khác nhau cho Hit và Miss)

GIVEN tàu của người chơi bị nhấn chìm bởi lượt tấn công của máy tính
WHEN  hệ thống xử lý kết quả
THEN  hệ thống đánh dấu toàn bộ ô của tàu bị nhấn chìm bằng trạng thái hiển thị khác biệt so với Hit thông thường
```

---

#### EP-04: Kết Thúc Ván Chơi

**US-09 — Thông báo kết thúc ván chơi**

| Trường | Nội dung |
|---|---|
| **ID** | US-09 |
| **Epic** | EP-04 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn được thông báo khi ván chơi kết thúc, để biết trận đấu đã hoàn thành. |
| **Ưu tiên** | MUST |
| **Nguồn BRD** | BR-08 |
| **Ghi chú** | — |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN toàn bộ tàu của một bên (người chơi hoặc máy tính) đã bị nhấn chìm
WHEN  hệ thống kiểm tra điều kiện kết thúc
THEN  hệ thống xác định ván chơi kết thúc và hiển thị thông báo kết thúc dạng text label

GIVEN ván chơi đã kết thúc
WHEN  người chơi cố gắng thực hiện thêm lượt tấn công
THEN  hệ thống không chấp nhận lượt tấn công mới
```

---

**US-10 — Hiển thị kết quả thắng/thua**

| Trường | Nội dung |
|---|---|
| **ID** | US-10 |
| **Epic** | EP-04 |
| **User Story** | Là UG-01 — Người chơi, tôi muốn thấy kết quả cuối ván là thắng hoặc thua cùng lý do kết thúc, để có cảm giác kết thúc rõ ràng và dễ hiểu. |
| **Ưu tiên** | SHOULD |
| **Nguồn BRD** | BR-09 |
| **Ghi chú** | — |

**Tiêu chí chấp nhận (AC - acceptance criteria):**

```
GIVEN ván chơi kết thúc do toàn bộ tàu của máy tính bị nhấn chìm
WHEN  hệ thống hiển thị kết quả
THEN  hệ thống hiển thị text label "THẮNG" cùng lý do: toàn bộ tàu đối thủ đã bị nhấn chìm

GIVEN ván chơi kết thúc do toàn bộ tàu của người chơi bị nhấn chìm
WHEN  hệ thống hiển thị kết quả
THEN  hệ thống hiển thị text label "THUA" cùng lý do: toàn bộ tàu của người chơi đã bị nhấn chìm

GIVEN kết quả ván chơi đã hiển thị
WHEN  người chơi đọc thông tin kết thúc
THEN  kết quả (THẮNG/THUA) và lý do nằm cùng 1 màn hình, không cần thao tác thêm để xem
```

---

### 5.3. Định Nghĩa Hoàn Thành (Definition of Done)

**DoD áp dụng từ:** 27-04-2026

**Tiêu chí chất lượng code:**
- Code đã được review bởi ít nhất 1 thành viên khác trong nhóm.
- Không có lỗi blocker hoặc critical chưa được xử lý.

**Tiêu chí kiểm thử:**
- Tất cả Tiêu chí chấp nhận (AC) của Story đã pass.
- Không có lỗi mức Severity 1 hoặc 2 còn mở.

**Tiêu chí giao diện và trải nghiệm:**
- Giao diện đơn giản, rõ ràng và dễ hiểu — người chơi không cần hướng dẫn phức tạp để sử dụng. *(từ BRD SC-05)*
- Giao diện hiển thị đúng trên Chrome, Firefox và Edge phiên bản hiện hành.
- Không có lỗi hiển thị hoặc văn bản bị cắt trên màn hình laptop (≥ 1366×768).

**Tiêu chí ổn định:**
- Trải nghiệm sử dụng đủ ổn định để có thể demo và đánh giá. *(từ BRD BG-01, BG-02)*
- Trò chơi phải phục vụ trải nghiệm chơi trên nền tảng web. *(từ BRD SC-01)*

**Tiêu chí phạm vi:**
- Story không bao gồm tính năng ngoài bộ yêu cầu đã xác định trong URD này. *(từ BRD BG-03)*
- Hành vi máy tính ở mức cơ bản, không sử dụng thư viện AI/ML. *(từ BRD SC-02, EX-03)*

**Tiêu chí hiệu năng:**
- Trang tải xong trong ≤ 3 giây trên mạng Wi-Fi thông thường (first contentful paint).
- Phản hồi click tấn công (từ lúc click đến hiển thị kết quả Hit/Miss/Sunk) ≤ 500ms.

**Tiêu chí bảo mật:**
- Không lưu trữ dữ liệu nhạy cảm của người chơi. *(Game offline, client-side thuần túy — không có backend hoặc đăng nhập, do đó các tiêu chí bảo mật nâng cao không áp dụng cho phiên bản này.)*

**Tiêu chí triển khai:**
- Story đã được deploy và kiểm tra trên môi trường staging hoặc local thành công.

---

## 6. Actor Và Use Case

### 6.1. Danh Sách Actor

| ID | Actor | Loại | Mô tả |
|---|---|---|---|
| ACT-01 | Người chơi (Player) | Chính | Người trực tiếp khởi tạo và tham gia ván chơi, đặt tàu, thực hiện tấn công và theo dõi kết quả. |
| ACT-02 | Máy tính (Computer Opponent) | Phụ | Đối thủ do hệ thống điều khiển, thực hiện lượt tấn công đối lại người chơi theo logic đơn giản. |

### 6.2. Bảng Use Case Tổng Quan

| ID | Tên Use Case | Actor chính | Actor phụ | User Story liên quan | Ưu tiên |
|---|---|---|---|---|---|
| UC-01 | Bắt đầu ván chơi | ACT-01 | — | US-01, US-02 | MUST |
| UC-02 | Đặt tàu | ACT-01 | — | US-03, US-04, US-05 | MUST |
| UC-03 | Thực hiện lượt tấn công (Người chơi) | ACT-01 | — | US-06, US-07 | MUST |
| UC-04 | Thực hiện lượt tấn công (Máy tính) | ACT-02 | — | US-08 | MUST |
| UC-05 | Kết thúc ván chơi | ACT-01 | — | US-09, US-10 | MUST |

*Đặc tả Use Case chi tiết được tách thành tài liệu riêng tại thư mục `document/`.*

**Tài liệu tham chiếu:**
- Đặc tả Use Case chi tiết: `document/`
- Sơ đồ Use Case tổng: `document/use-case-diagram.md`

---

## 7. Giả Định Và Phụ Thuộc

### 7.1. Giả Định

| ID | Giả định | Rủi ro nếu giả định sai |
|---|---|---|
| ASM-01 | Mức độ khả dụng cơ bản là đủ, miễn là các quy tắc và tương tác trong trò chơi được truyền đạt rõ ràng. | Cần đầu tư thêm thời gian cho UX/UI nếu người dùng gặp khó khăn khi sử dụng. |
| ASM-02 | Hạm đội (Fleet) Battleship tiêu chuẩn có thể được triển khai mà không cần tùy chỉnh trong phiên bản đầu tiên. | Cần bổ sung giao diện cấu hình hạm đội nếu luật chuẩn không phù hợp. |
| ASM-03 | Logic điều khiển đối thủ máy tính ở mức cơ bản là chấp nhận được cho phiên bản 1. | Cần nâng cấp logic hoặc bổ sung mức độ khó nếu trải nghiệm quá đơn điệu. |
| ASM-04 | Người chơi sử dụng thiết bị có màn hình đủ lớn (laptop/desktop) với trình duyệt hiện đại. | Cần thiết kế responsive hoặc hỗ trợ thêm thiết bị nếu giả định sai. |

### 7.2. Phụ Thuộc

| ID | Phụ thuộc | Loại | Tác động đến URD | Thời hạn cần sẵn sàng | Bên chịu trách nhiệm |
|---|---|---|---|---|---|
| DEP-01 | Trình duyệt web hiện đại hỗ trợ React (Chrome, Firefox, Edge) | Môi trường runtime | Trò chơi không hoạt động trên trình duyệt cũ không hỗ trợ ES6+ | Trước khi bắt đầu Sprint 1 | Người dùng cuối (tự cài đặt trình duyệt) |

---

## Phụ Lục

### Phụ Lục A: Thuật Ngữ Và Định Nghĩa

| Thuật ngữ | Định nghĩa |
|---|---|
| URD | User Requirements Document — Tài liệu Yêu cầu Người dùng |
| BRD | Business Requirements Document — Tài liệu Yêu cầu Nghiệp vụ |
| Product Backlog | Danh sách Hạng mục Sản phẩm — toàn bộ công việc cần làm để xây dựng sản phẩm, được sắp xếp theo thứ tự ưu tiên |
| Epic | Nhóm tính năng lớn — tập hợp nhiều User Story liên quan, thường tương đương một module hoặc luồng nghiệp vụ chính |
| User Story | Hạng mục người dùng — đơn vị yêu cầu chức năng từ góc nhìn người dùng |
| AC | Acceptance Criteria — Tiêu chí chấp nhận của từng User Story |
| DoD | Definition of Done — Định nghĩa Hoàn thành, áp dụng cho toàn hệ thống |
| UC | Use Case — Luồng tương tác để đạt một mục tiêu cụ thể |
| MoSCoW | Must / Should / Could / Won't — Phương pháp ưu tiên yêu cầu |
| Actor | Vai trò người dùng hoặc hệ thống ngoài tương tác với hệ thống |
| Single Player | Chế độ một người chơi, không cần người chơi khác tham gia cùng |
| Fleet | Hạm đội — đội tàu trong Battleship, gồm loại tàu, số lượng và kích thước theo quy tắc chuẩn |
| Hit | Trúng — kết quả khi tấn công vào ô có tàu của đối thủ |
| Miss | Trượt — kết quả khi tấn công vào ô không có tàu của đối thủ |
| Sunk | Đã nhấn chìm — trạng thái khi toàn bộ các ô của một tàu đã bị tấn công trúng |
| SPA | Single Page Application — Ứng dụng web đơn trang |
| React | Thư viện JavaScript mã nguồn mở dùng để xây dựng giao diện người dùng (UI) — framework chính của dự án |
| AI/ML | Artificial Intelligence / Machine Learning — Trí tuệ nhân tạo / Học máy |
| Framework | Bộ khung phần mềm cung cấp cấu trúc và công cụ nền tảng để phát triển ứng dụng |
| Runtime | Môi trường thực thi mã nguồn (ví dụ: trình duyệt web chạy JavaScript) |
| ES6+ | ECMAScript 2015 trở lên — phiên bản tiêu chuẩn của JavaScript với cú pháp hiện đại |
| Staging | Môi trường kiểm thử gần giống môi trường thực tế, dùng để xác nhận trước khi phát hành |
| Deploy | Triển khai — đưa ứng dụng lên môi trường để người dùng truy cập |
| Local | Môi trường phát triển trên máy cá nhân của lập trình viên |
| Leaderboard | Bảng xếp hạng — hiển thị thứ hạng người chơi theo điểm số hoặc thành tích |
| Gameplay | Lối chơi — tổng thể các tương tác và cơ chế trong quá trình chơi game |
| Carrier / Battleship / Cruiser / Submarine / Destroyer | 5 loại tàu trong hạm đội Battleship tiêu chuẩn, lần lượt chiếm 5, 4, 3, 3, 2 ô |
| Trình duyệt hiện đại (Chrome, Firefox, Edge) | Nhóm trình duyệt web thông dụng hỗ trợ đầy đủ ES6+ và các API web hiện hành — là điều kiện chạy của ứng dụng |
| NFR | Non-Functional Requirement — Yêu cầu phi chức năng, mô tả đặc tính chất lượng của hệ thống (hiệu năng, bảo mật, khả năng sử dụng…) |
| Sprint | Chu kỳ phát triển ngắn (thường 1–4 tuần) trong quy trình Agile/Scrum |
| Client-side | Phía máy khách — mã nguồn chạy trực tiếp trên trình duyệt của người dùng |
| Backend | Phần xử lý phía máy chủ của ứng dụng, bao gồm logic nghiệp vụ, cơ sở dữ liệu và API |
| First Contentful Paint (FCP) | Thời điểm trình duyệt hiển thị nội dung đầu tiên lên màn hình — chỉ số đo tốc độ tải trang |
| Severity | Mức độ nghiêm trọng của lỗi phần mềm, thường chia từ 1 (cao nhất) đến 4 (thấp nhất) |
| Blocker / Critical | Các mức lỗi nghiêm trọng: Blocker = chặn hoàn toàn việc sử dụng, Critical = ảnh hưởng nghiêm trọng đến chức năng chính |
| Responsive | Thiết kế đáp ứng — giao diện tự điều chỉnh bố cục phù hợp với kích thước màn hình khác nhau |
| UX/UI | User Experience / User Interface — Trải nghiệm người dùng / Giao diện người dùng |
| SC | Scope (In Scope) — Ký hiệu định danh cho hạng mục trong phạm vi (SC-01, SC-02, …) |
| EX | Exclusion (Out of Scope) — Ký hiệu định danh cho hạng mục ngoài phạm vi (EX-01, EX-02, …) |

### Phụ Lục B: Đặc Tả Use Case Chi Tiết

Đặc tả Use Case chi tiết — luồng chính, luồng thay thế, tiền/hậu điều kiện — được tách thành tài liệu riêng tại thư mục `document/`.

### Phụ Lục C: Tài Liệu Tham Chiếu

| # | Tài liệu | Phiên bản / Ngày |
|---|---|---|
| [1] | Tài liệu Yêu cầu Nghiệp vụ (BRD) — Trò chơi Battleship | v1.1 / 26-04-2026 |
| [2] | Hasbro Inc., *Battleship — Game Rules* | Hiện hành |
| [3] | Mike Cohn, *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004 | — |

### Phụ Lục D: Wireframe / Mockup

*Chưa có wireframe cho phiên bản hiện tại. Sẽ bổ sung khi có thiết kế giao diện.*