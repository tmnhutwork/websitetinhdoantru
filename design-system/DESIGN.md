# Design system Tịnh Độ An Trú — v2 "thanh mảnh"

Cập nhật: 12/10/2026. Đây là nguồn chuẩn cho mọi giao diện của website Tịnh Độ An Trú. Đọc file này trước khi thiết kế, code hoặc review một trang.

Tịnh Độ An Trú là nơi Phật tử, nhất là người lớn tuổi và người mới, niệm Phật mỗi ngày và học pháp môn Tịnh Độ. Giao diện phải trầm, ấm, dễ đọc không cần kính, và luôn chỉ rõ một việc tiếp theo. Bản v2 giữ bảng màu trầm hương / hổ phách của v1 nhưng làm mọi thứ mảnh hơn: viền 1px, chữ tiêu đề Crimson Pro 400, chỉ hai độ đậm, chip đã chọn không tô nền đặc, vòng tiến độ nét mảnh, bóng gần như không thấy.

## Các file

| File | Vai trò |
| --- | --- |
| `tokens.css` | Toàn bộ token v2 trên `:root`, theme tối trong `[data-theme="dark"]`, và khối bí danh tên cũ ở cuối file. |
| `tokens.json` | Cùng bộ token dạng JSON (cấu trúc giống artifact Design System). Sửa token thì sửa cả hai file. |
| `components.css` | 20 component tiền tố `td-` và lớp nền (`.site-section`, `.td-container`, kiểu chữ). Chỉ dùng token. |
| `icons.svg` | Sprite icon riêng: 42 hình, lưới 24px, nét 1.25. |
| `check_contrast.py` | Kiểm tra tương phản mọi cặp chữ/nền trong `tokens.json`: `python3 design-system/check_contrast.py`. |
| `preview.html` | Trang xem nhanh token và component ở theme Sáng/Tối. Không liên kết từ trang nào của site. |

Artifact "Tịnh Độ An Trú" Design System (https://claude.ai/artifact/91WB9rrgrwdgNVNGdKb9hJ) vẫn là bản v1. Khi hai bên lệch nhau, thư mục này là bản mới hơn. Khác biệt chính so với v1 được liệt kê ở mục [Khác với v1](#khác-với-v1-artifact).

Cách nạp (khi một trang bắt đầu chuyển sang hệ này):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;1,400&family=Inter:wght@400;500&family=Noto+Serif+TC&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
```

Theme tối: đặt `data-theme="dark"` trên `<html>`. Không viết CSS dark riêng cho component.

---

## 1. Nguyên tắc

1. **Chỉ dùng token.** Không viết mã màu, cỡ chữ, bán kính, bóng trực tiếp trong code giao diện: `color: var(--ink)`, `padding: var(--space-6)`, `font: var(--type-body)`.
2. **Dùng component có sẵn** (`td-`). Cần component mới thì đề xuất với chủ site trước, rồi thêm vào `components.css` và mục 8 của file này.
3. **Mảnh và yên.** Viền 1px (`--hairline`), bóng rất nhẹ, không gradient, không glassmorphism, không viền màu bên trái thẻ.
4. **Một việc chính mỗi vùng.** Một nút `primary` mỗi vùng màn hình; mỗi trang một H1.
5. **Đọc được với người trên 50 tuổi.** Thân bài 18px/1.7, không chữ nào dưới 14px, tương phản chữ >= 4.5:1 ở cả hai theme.
6. **Trang nghiêm.** Không emoji, không chấm than, không màu để phân loại nội dung; ảnh tượng Phật không bị chữ hay badge đè lên.

### Giọng văn

- Xưng "bạn"; gọi chư Tổ, giảng sư đúng danh xưng ("Ấn Quang Đại Sư", "HT. Thích Trí Tịnh").
- Câu ngắn, từ thường ngày. Thuật ngữ Hán Việt lần đầu xuất hiện trên trang có một câu giải nghĩa.
- Viết hoa đầu câu cho tiêu đề, eyebrow, nút ("Thời khóa hằng ngày"); chỉ tên riêng viết hoa từng chữ. Không in hoa toàn bộ (`text-transform: uppercase` không dùng).
- Nhãn nút bắt đầu bằng động từ: "Bắt đầu niệm Phật", "Nghe tiếp", "Đọc kinh", "Gửi câu hỏi". Không "OK", "Xem thêm".
- Thông báo sau hành động viết ở thể đã xong: "Đã sao chép liên kết", "Đã lưu bài".
- Lời trích dẫn ghi rõ người dạy và nguồn.

---

## 2. Màu

20 token, mỗi token có giá trị cho theme Sáng và Tối. Đổi theme chỉ đổi giá trị token.

| Token | Sáng | Tối | Dùng cho |
| --- | --- | --- | --- |
| `--bg` | `#faf8f4` | `#16130f` | Nền trang |
| `--surface` | `#ffffff` | `#1f1b17` | Thẻ, Header, TabBar, dialog, bảng trượt, ô nhập |
| `--surface-sunken` | `#f2eee7` | `#2a2520` | Nền lõm: tag trung tính, track tiến độ, hover control trung tính |
| `--line` | `#e6e0d6` | `#3a332c` | Đường kẻ mảnh trang trí (viền thẻ, chia mục) |
| `--line-strong` | `#8c8174` | `#7d7265` | Viền control (ô nhập, nút secondary, chip): đạt 3:1 |
| `--ink` | `#1f1a15` | `#f2ece3` | Chữ chính, tiêu đề |
| `--ink-muted` | `#574e45` | `#c9beb1` | Chữ phụ, lead, mục nav chưa chọn |
| `--ink-subtle` | `#6f665c` | `#a69a8c` | Metadata 14px, placeholder, icon TabBar chưa chọn. Không dùng cho đoạn văn |
| `--primary` | `#43301d` | `#e9c98f` | Trầm hương: nền nút chính, bước đang học |
| `--primary-hover` | `#5a4129` | `#f2d8a6` | Nút primary khi hover/nhấn |
| `--on-primary` | `#fffaf2` | `#1f1a15` | Chữ, icon trên primary |
| `--accent` | `#a8500a` | `#f0a95a` | Hổ phách, chỉ để nhấn: từ nghiêng trong H1/H2, eyebrow, link, mục nav đang chọn, vạch TabBar, vòng tiến độ, viền chip đã chọn |
| `--accent-soft` | `#fbeedd` | `#3a2612` | Nền nhấn nhẹ: chip đã chọn, tập đang phát, hôm nay |
| `--success` | `#2f6b45` | `#86c99f` | Đã xong. Luôn kèm icon check hoặc chữ |
| `--success-soft` | `#e6f2ea` | `#18301f` | Nền ngày đã tu, tag thành công |
| `--danger` | `#b42318` | `#f6877d` | Chỉ lỗi biểu mẫu và hành động xóa |
| `--danger-soft` | `#fdecea` | `#3b1512` | Nền thông báo lỗi |
| `--seal` | `#ba2e22` | `#e0614f` | Đỏ son: chỉ cho con triện thư pháp |
| `--focus-ring` | `#a8500a` | `#f0a95a` | Vòng focus bàn phím |
| `--scrim` | `rgba(31,26,21,.45)` | `rgba(0,0,0,.6)` | Lớp phủ sau dialog và bảng trượt |

Quy tắc:

- Một nút `primary` mỗi vùng. `accent` chỉ để nhấn, không làm nền lớn.
- `success` luôn đi với icon `i-check` hoặc chữ ("Đã nghe").
- `seal` chỉ cho con triện; không dùng cho nút, badge, lỗi.
- Không dùng màu để phân loại nội dung (bỏ các màu indigo / rose / emerald theo chủ đề của code cũ). Phân loại bằng icon và chữ.
- Tỷ lệ gần đúng: 60% `bg`/`surface`, 30% chữ `ink`, 10% `primary` + `accent`.

### Kết quả kiểm tra tương phản

`check_contrast.py` kiểm 88 cặp (44 mỗi theme), **0 cặp không đạt**.

| Loại | Ngưỡng | Cặp thấp nhất (Sáng) | Cặp thấp nhất (Tối) |
| --- | --- | --- | --- |
| Chữ | 4.5:1 | `accent` trên `surface-sunken` 4.76:1 | `ink-subtle` trên `success-soft` 5.15:1 |
| Viền control, focus, đồ họa | 3:1 | `line-strong` trên `surface-sunken` 3.30:1 | `line-strong` trên `surface-sunken` 3.23:1 |

Chữ chính `ink` đạt từ 12:1 trở lên trên mọi nền. `on-primary` trên `primary`: 12.03:1 (Sáng), 10.86:1 (Tối).

---

## 3. Chữ

| Họ chữ | Token | Dùng cho |
| --- | --- | --- |
| Crimson Pro | `--font-display` | H1, H2, H3, tên kinh, kinh văn, lời trích, số chuỗi niệm. Luôn độ đậm 400 |
| Inter | `--font-sans` | Mọi thứ còn lại: thân bài, thẻ, nút, menu, metadata |
| Noto Serif TC | `--font-han` | Tên kinh chữ Hán |
| Ma Shan Zheng | `--font-brush` | Chỉ cụm thư pháp ở footer |

Chỉ hai độ đậm: `--weight-regular` 400 và `--weight-medium` 500. Không dùng 600 trở lên. Không chữ nào dưới 14px.

Dùng kiểu chữ qua `font: var(--type-<tên>)` hoặc lớp `.td-text-<tên>`.

| Kiểu | Cỡ / dòng | Độ đậm | Họ | Dùng cho |
| --- | --- | --- | --- | --- |
| `display` | 48 / 1.15 | 400 | Crimson Pro | H1 từ 1024px |
| `display-sm` | 36 / 1.2 | 400 | Crimson Pro | H1 dưới 1024px |
| `heading-2` | 32 / 1.25 | 400 | Crimson Pro | Tiêu đề section từ 640px |
| `heading-2-sm` | 28 / 1.25 | 400 | Crimson Pro | Tiêu đề section dưới 640px |
| `heading-3` | 26 / 1.3 | 400 | Crimson Pro | Tên kinh, tiêu đề dialog |
| `scripture` | 22 / 1.7 | 400 | Crimson Pro | Kinh văn, lời khai thị |
| `scripture-lg` | 28 / 1.7 | 400 | Crimson Pro | Kinh văn cỡ lớn nhất ở chế độ tụng |
| `quote` | 24 / 1.5 nghiêng | 400 | Crimson Pro | Lời trích trong Quote |
| `counter` | 72 / 1 | 400 | Crimson Pro | Số câu niệm (kèm `tabular-nums`) |
| `brand` | 24 / 1 | 400 | Crimson Pro | Chữ thương hiệu trong Header |
| `heading-4` | 20 / 1.4 | 500 | Inter | Tiêu đề thẻ (luôn kiểu này), tiêu đề bước học, trạng thái trống |
| `lead` | 20 / 1.6 | 400 | Inter | Đoạn mở đầu dưới H1/H2 |
| `body` | 18 / 1.7 | 400 | Inter | Thân bài mặc định |
| `body-sm` | 16 / 1.6 | 400 | Inter | Mô tả trong thẻ, ô nhập |
| `ui-lg` | 18 / 1.5 | 500 | Inter | Nút lớn, câu hỏi trong Accordion |
| `ui` | 16 / 1.5 | 500 | Inter | Nhãn nút, chip, menu, tên tập |
| `eyebrow` | 14 / 1.4 | 500 | Inter | Nhãn trên H2, màu accent, viết hoa đầu câu |
| `label` | 14 / 1.4 | 500 | Inter | Tag |
| `meta` | 14 / 1.5 | 400 | Inter | Metadata, chú thích |
| `han` | 20 / 1.4 | 400 | Noto Serif TC | Tên kinh chữ Hán, dưới tên tiếng Việt |

Khi chỉ cần cỡ chữ (ví dụ nút A−/A+ đổi cỡ kinh văn), dùng `--fs-*` (`--fs-scripture` 22px tới `--fs-scripture-lg` 28px). Đoạn văn rộng tối đa `--measure` (68ch).

---

## 4. Khoảng cách, nhịp dọc, bố cục

Lưới 4/8:

| Token | Giá trị | Dùng cho |
| --- | --- | --- |
| `--space-1` | 4px | Icon với chữ nhỏ |
| `--space-2` | 8px | Icon với nhãn nút; tiêu đề thẻ tới mô tả |
| `--space-3` | 12px | Giữa các chip |
| `--space-4` | 16px | Lề trang trên điện thoại |
| `--space-5` | 20px | Padding thẻ trên điện thoại |
| `--space-6` | 24px | Padding thẻ; khoảng cách giữa thẻ |
| `--space-8` | 32px | Lề trang từ 1024px; tiêu đề section tới nội dung (điện thoại) |
| `--space-10` | 40px | Tiêu đề section tới nội dung (máy tính) |
| `--space-12` | 48px | Giữa các khối trong một section |
| `--space-16` | 64px | Giữa các section (điện thoại) |
| `--space-20` | 80px | Giữa các section (từ 1024px) |
| `--space-24` | 96px | Dự phòng cho khoảng trống lớn; không dùng làm nhịp section |

Nhịp dọc (token đổi theo breakpoint, đã đặt sẵn trong `tokens.css`):

| Token | Dưới 1024px | Từ 1024px | Áp dụng |
| --- | --- | --- | --- |
| `--section-space` | 64px | 80px | `.site-section` (padding trên; section cuối thêm padding dưới) |
| `--section-head-gap` | 32px | 40px | `.td-section-head` tới nội dung |
| `--page-gutter` | 16px | 32px | `.td-container` |
| `--card-title-gap` | 8px | 8px | Tiêu đề thẻ tới mô tả (cho phép tới 12px) |

```html
<section class="hero">…</section>              <!-- hero không tự thêm padding dưới -->
<section class="site-section">
  <div class="td-container">
    <header class="td-section-head">
      <p class="td-eyebrow">Khuyến tấn tu trì</p>
      <h2 class="td-h2">Ba món tư lương</h2>
    </header>
    …
  </div>
</section>
```

Breakpoint: `640` (dưới mức này một cột), `1024` (Header thay TabBar), `1280` (lưới 3 cột). Riêng trang xem bài giảng có mốc `1080` cho bảng danh sách tập. Không trang nào cuộn ngang ở 375px. Khung tối đa `--page-max` 1200px.

---

## 5. Bề mặt

- **Viền:** `--hairline` (`1px solid var(--line)`) cho thẻ, chia mục, Header, TabBar. `--hairline-strong` (`1px solid var(--line-strong)`) cho control. Không viền dày hơn 1px, trừ vạch chỉ báo 2px (`--indicator-height`) và vòng focus 2px.
- **Bo góc:** `--radius-sm` 8 (tag vuông, ô lịch) · `--radius-md` 12 (nút, ô nhập, toast, mục tập, bìa kinh) · `--radius-lg` 16 (thẻ, dialog) · `--radius-xl` 24 (khối lớn) · `--radius-full` (chip, tag, nút icon).
- **Bóng:** `--shadow-card` (thẻ, gần như không thấy) · `--shadow-raised` (thẻ khi hover, toast) · `--shadow-overlay` (dialog, bảng trượt). Phân lớp bằng viền trước, bóng sau.
- **Lớp phủ:** `--scrim`.
- **Lớp chồng:** `--z-tabbar` 90 · `--z-header` 100 · `--z-scrim` 190 · `--z-drawer` 200 (bảng trượt, dialog) · `--z-toast` 300.

## 6. Chuyển động

- `--duration-fast` 150ms (màu, hover) · `--duration-base` 250ms (accordion, bảng trượt, lớp phủ) · `--duration-slow` 400ms (dialog) · `--duration-indicator` 260ms (vạch TabBar).
- Easing `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`; vạch TabBar `--ease-indicator` `cubic-bezier(0.33, 1, 0.68, 1)`.
- Chỉ animate `opacity`, `transform`, màu. Không hiệu ứng cuộn trang cho nội dung đọc.
- `prefers-reduced-motion: reduce`: `components.css` tắt mọi chuyển động; vạch TabBar, bảng trượt, dialog đổi trạng thái tức thì.

---

## 7. Icon

- Chỉ dùng bộ riêng trong `icons.svg`; không trộn bộ khác, không emoji thay icon.
- Lưới 24 × 24, nét 1.25, đầu nét và góc nối tròn, không góc nhọn, không tô nền, màu `currentColor`.
- Cỡ: `--icon-md` 24 (độc lập, TabBar, nút icon) · `--icon-sm` 20 (trong nút, chip) · `--icon-xs` 16 (tag, dòng meta) · `--icon-lg` 32 (Quote, EmptyState).
- Icon trang trí có `aria-hidden="true"`; nút chỉ có icon phải có `aria-label`.

```html
<svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-lotus"/></svg>
```

Đường dẫn `href` tính từ trang HTML; trang ở thư mục gốc dùng `design-system/icons.svg#i-…`.

| Nhóm | Icon |
| --- | --- |
| Điều hướng chính | `i-lotus` (Giáo Lý) · `i-listen` (Bài Giảng) · `i-sutra` (Kinh Điển) · `i-clock` (Thời Khóa) · `i-ask` (Vấn Đáp) |
| Chủ đề | `i-mala` · `i-buddha` · `i-incense` · `i-bell` · `i-mo` · `i-lamp` · `i-temple` · `i-west` · `i-today` · `i-cloud` · `i-palms` |
| Phát và nghe | `i-episodes` (mở danh sách tập) · `i-play` · `i-pause` · `i-skip-back` · `i-skip-forward` · `i-volume` · `i-restart` · `i-fullscreen` |
| Giao diện | `i-close` · `i-chevron-left` · `i-chevron-right` · `i-chevron-down` · `i-arrow-left` · `i-arrow-right` · `i-search` · `i-check` · `i-share` · `i-link` · `i-bookmark` · `i-calendar` · `i-download` · `i-text-size` · `i-info` · `i-sun` · `i-moon` |
| Hạn chế | `i-menu`: chỉ khi thật cần, không dùng cho điều hướng chính |

`i-lotus`, `i-listen`, `i-sutra`, `i-clock`, `i-close`, `i-episodes` lấy đúng nét đang chạy trên site (TabBar, bảng danh sách tập). Các icon còn lại vẽ lại từ bộ v1 với nét 1.25. Icon mới: vẽ cùng lưới, cùng nét, thêm vào `icons.svg` và bảng trên.

---

## 8. Component

Tất cả trong `components.css`, tiền tố `td-`. Trạng thái đọc từ thuộc tính ARIA (`aria-pressed`, `aria-checked`, `aria-current`, `aria-expanded`, `aria-busy`), không thêm class `active`.

### Button
`.td-btn` + `--primary` / `--secondary` / `--ghost`; cỡ `--lg`, `--block`. Cao 48px (lớn 56px). Nhãn bắt đầu bằng động từ. Một nút primary mỗi vùng.
```html
<a class="td-btn td-btn--primary" href="niem-phat.html">
  <svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-mala"/></svg>Bắt đầu niệm Phật
</a>
<button class="td-btn td-btn--secondary" type="button">Nghe tiếp</button>
```

### IconButton
`.td-icon-btn` 44 × 44, luôn có `aria-label`. Biến thể `--outline`, `--square`. Bật/tắt: `aria-pressed`.
```html
<button class="td-icon-btn" type="button" aria-label="Chuyển chế độ tối" aria-pressed="false">
  <svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-moon"/></svg>
</button>
```

### Chip
`.td-chip` trong `.td-chip-group`. Chưa chọn: viền `line-strong`. Đã chọn: nền `accent-soft` + viền `accent`, chữ `ink`.
```html
<div class="td-chip-group" role="group" aria-label="Lọc theo chủ đề">
  <button class="td-chip" type="button" aria-pressed="true">Tất cả</button>
  <button class="td-chip" type="button" aria-pressed="false">Niệm Phật</button>
</div>
```

### Tag
`.td-tag` (không bấm được), biến thể `--accent`, `--success` (luôn kèm icon hoặc chữ), `--outline`.
```html
<span class="td-tag td-tag--success"><svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-check"/></svg>Đã nghe</span>
```

### SectionHeader
`.td-section-head` gồm `.td-eyebrow`, `.td-h2`, `.td-lead`; cách nội dung 32/40px. Biến thể `--center`. Tiêu đề: `.td-h1` (36 → 48px từ 1024px), `.td-h2` (28 → 32px từ 640px), `.td-h3`, `.td-h4`. Một từ nghiêng trong H1/H2 bằng `<em>` (màu accent).

### Header
Từ 1024px: `.td-brand` + `.td-nav` (5 mục) + `.td-header__actions`. Dưới 1024px: menu ẩn, điều hướng chuyển xuống TabBar; Header chỉ còn thương hiệu và công cụ (đổi theme). `.td-header__auth` chỉ hiện từ 1280px.
```html
<header class="td-header">
  <div class="td-container td-header__inner">
    <a class="td-brand" href="index.html">
      <svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-lotus"/></svg>Tịnh Độ <em>An Trú</em>
    </a>
    <nav class="td-nav" aria-label="Điều hướng chính">
      <a href="index.html" aria-current="page">Giáo Lý</a>
      <a href="bai-giang.html">Bài Giảng</a>
      <a href="kinh-dien.html">Kinh Điển</a>
      <a href="index.html#thoi-khoa">Thời Khóa</a>
      <a href="van-dap.html">Vấn Đáp</a>
    </nav>
    <div class="td-header__actions">…</div>
  </div>
</header>
```

### TabBar
Dưới 1024px, cố định ở đáy, cao 56px + safe-area, chỉ icon (nhãn `.td-tabbar-label` ẩn về mặt thị giác nhưng vẫn là tên truy cập). Các mục giống hệt menu Header, cùng thứ tự. Mục đang chọn: `aria-current="page"`, màu accent + vạch 16 × 2px dưới icon (không chỉ dựa vào màu). Khi chạm một mục, `animations.js` trượt vạch chung `.td-tabbar-indicator` tới mục đó rồi mới chuyển trang (260ms, tổng <= 300ms); giảm chuyển động thì đổi chỗ tức thì. Class do JS gắn: `.has-indicator`, `.is-ready`, `.is-visible`. Tên class trùng với code đang chạy.
```html
<nav class="td-tabbar" aria-label="Điều hướng chính">
  <a class="td-tabbar-item" href="index.html" aria-current="page">
    <svg class="td-tabbar-icon" aria-hidden="true"><use href="design-system/icons.svg#i-lotus"/></svg>
    <span class="td-tabbar-label">Giáo Lý</span>
  </a>
  <a class="td-tabbar-item" href="bai-giang.html">
    <svg class="td-tabbar-icon" aria-hidden="true"><use href="design-system/icons.svg#i-listen"/></svg>
    <span class="td-tabbar-label">Bài Giảng</span>
  </a>
  <!-- Kinh Điển: i-sutra · Thời Khóa: i-clock · Vấn Đáp: i-ask -->
</nav>
```

### ContentCard
`.td-card` (thường là `<a>`), `.td-card__media` 16:10, `.td-card__body` (padding 20 → 24px), `.td-card__meta`, `.td-card__title` (heading-4 sans 500), `.td-card__desc` (2 dòng). Lưới `.td-card-grid`.
```html
<a class="td-card" href="bai-giang/thap-niem-ky-so.html">
  <div class="td-card__media"><img src="…" alt="Ao sen lúc chiều"></div>
  <div class="td-card__body">
    <p class="td-card__meta"><svg class="td-icon" aria-hidden="true"><use href="design-system/icons.svg#i-clock"/></svg>12 phút</p>
    <h3 class="td-card__title">Phương pháp Thập niệm ký số</h3>
    <p class="td-card__desc">Cách đếm từ 1 đến 10 giúp câu Phật hiệu rõ ràng.</p>
  </div>
</a>
```

### SutraCard
`.td-sutra`: bìa 3:4 (`.td-sutra__cover`, rộng `--cover-width` từ 640px), tên kinh `.td-sutra__title` (Crimson Pro 400), tên chữ Hán `.td-sutra__han`, hành động `.td-sutra__actions` (một primary).

### Progress
`.td-progress` > `.td-progress__label` + `.td-progress__track` > `.td-progress__fill` (dày 4px). Xong: `.td-progress--done` và nhãn có chữ "Đã đọc xong" hoặc icon check. Dùng `role="progressbar"` với `aria-valuenow`.

### EpisodeItem
`.td-episodes` > `li` > `a.td-episode` (mỗi tập là liên kết thật, có URL riêng). Gồm `.td-episode__num`, `.td-episode__text` (`__title`, `__meta`), `.td-episode__state` (icon). Đang phát: `aria-current="true"`. Đã nghe: `data-done` + icon `i-check`.

### MalaCounter
`.td-mala` > `button.td-mala__ring` (SVG `viewBox="0 0 100 100"` với `circle.td-mala__track` và `circle.td-mala__value`, nét `--ring-width` = 1 đơn vị viewBox, khoảng 3px) + `.td-mala__center` (`__count` Crimson Pro 400 72px, `__chant`, `__hint`). Thống kê `.td-stats` > `.td-stat`.

### Quote
`figure.td-quote` > icon + `blockquote.td-quote__text` + `figcaption.td-quote__cite` (luôn có người dạy và nguồn).

### SearchField
`.td-field` > `label.td-label` + `.td-input-wrap` (icon `i-search` + `input.td-input` + nút xóa `.td-icon-btn`) + `.td-help` / `.td-error`. Ô nhập 16px để iOS không phóng to. Lỗi: `aria-invalid="true"` + `.td-error` có icon `i-info` và chữ.

### Accordion
`.td-accordion` > `details#id` > `summary` (câu hỏi, `ui-lg`, icon `i-chevron-down`) + `.td-accordion__body`. Mỗi câu hỏi có `id` riêng để chia sẻ URL `van-dap.html#id`; JS mở câu khớp `location.hash`.

### Toast
`.td-toast` (`role="status"`, `aria-live="polite"`), nền `ink`, chữ `bg`, nằm trên TabBar. Viết ở thể đã xong. `.td-toast--static` cho bản xem trước.

### Dialog và Drawer
- Lớp phủ `.td-scrim` (`--scrim`, trên Header và TabBar). `.is-open` bật cả lớp phủ và hộp.
- `.td-dialog`: hộp giữa màn hình, rộng tối đa 480px, `__head` (`__title` + nút đóng), `__body`, `__foot`. Dùng được với `<dialog>` (`::backdrop` dùng `--scrim`).
- `.td-drawer`: bảng trượt từ cạnh phải, rộng `--drawer-width` = `min(400px, 88vw)`, `__head` (`__title` + nút đóng `i-close`), `__body` cuộn riêng.
- Hành vi bắt buộc (JS): đóng bằng nút ×, chạm lớp phủ, phím Esc, và (drawer danh sách tập) khi chọn một mục; giữ focus trong hộp khi mở; trả focus về nút đã mở khi đóng; khóa cuộn kiểu an toàn cho iOS (`.td-scroll-lock` trên `body`, lưu `scrollY` vào `body.style.top`, khôi phục khi đóng); nút mở có `aria-controls` và `aria-expanded`.

### EmptyState
`.td-empty` > `.td-empty__icon` + `.td-empty__title` (heading-4) + `p` + một nút hành động.

### PracticeCalendar
`.td-cal` > `.td-cal__head` + `.td-cal__grid` (7 cột) > `.td-cal__dow` + `.td-day`. Đã tu: `.td-day--done` + icon `i-check` + chữ ẩn "đã tu". Hôm nay: `aria-current="date"`. Ô >= 44px.

### LessonSteps
`ol.td-steps` > `li.td-step` > `.td-step__dot` + `.td-step__body` (`__title` có liên kết tới URL riêng của bài, `__desc`). Đang học `.td-step--current` (primary); xong `.td-step--done` (success + icon check).

---

## 9. Điều hướng

- Năm mục cố định, cùng thứ tự ở Header và TabBar: **Giáo Lý · Bài Giảng · Kinh Điển · Thời Khóa · Vấn Đáp** (quyết định của chủ site, thay cho danh sách gốc "Hôm nay · Niệm Phật · Nghe và Học · Kinh · Hỏi đáp").
- Header (menu ngang) từ 1024px; TabBar dưới 1024px. Không hamburger.
- TabBar chỉ icon, cao 56px, vạch 16 × 2px trượt tới mục được chạm trước khi chuyển trang (<= 300ms, tắt khi giảm chuyển động).
- Đăng nhập / Đăng ký: không hiện dưới 1280px (xem mục 11 về việc có giữ hay không).
- Mỗi bài, tập giảng, câu hỏi, bước học có URL riêng để chia sẻ qua Zalo.

## 10. Accessibility — danh sách kiểm tra

- [ ] Vùng chạm mọi control >= 44 × 44px (`--touch-min`).
- [ ] Focus bàn phím: `outline: 2px solid var(--focus-ring)`, `outline-offset: 3px`, trên mọi phần tử bấm được, không tắt. Ngoại lệ duy nhất: mục TabBar dùng offset âm 3px vì sát mép màn hình.
- [ ] Chữ >= 4.5:1, viền control / icon / focus >= 3:1, ở cả theme Sáng và Tối (`check_contrast.py`).
- [ ] Không chữ nào dưới 14px; thân bài 18px.
- [ ] Trạng thái không chỉ dựa vào màu (vạch dưới mục đang chọn, icon check cho "đã xong").
- [ ] `prefers-reduced-motion` được tôn trọng.
- [ ] Nút chỉ icon có `aria-label`; icon trang trí `aria-hidden="true"`; ảnh có `alt` (ảnh trang trí `alt=""`).
- [ ] Dialog / drawer: giữ focus, Esc đóng, trả focus, khóa cuộn.
- [ ] Mỗi bài, tập, câu hỏi có URL riêng.
- [ ] Không cuộn ngang ở 375px; chụp kiểm tra 390px và 1280px ở cả hai theme.
- [ ] Grep file vừa sửa: không mã hex, không cỡ chữ px lẻ, không emoji, không `font-weight` 600 trở lên.

---

## 11. Quyết định của chủ site (sự thật hiện tại)

Những điểm dưới đây chủ site đã chốt cho site đang chạy; khi khác với bản quy tắc gốc thì theo mục này.

1. **Năm mục điều hướng:** Giáo Lý · Bài Giảng · Kinh Điển · Thời Khóa · Vấn Đáp (đang được đổi từ 4 mục sang 5 mục ở cả menu máy tính và TabBar).
2. **TabBar dưới 1024px chỉ icon:** nhãn ẩn về mặt thị giác nhưng trình đọc màn hình vẫn đọc; cao 56px; các mục giống hệt menu máy tính; một vạch 16 × 2px trượt tới mục được chạm rồi mới chuyển trang (<= 300ms, tắt khi giảm chuyển động).
3. **Đăng nhập / Đăng ký ẩn dưới 1280px.** Từ 1280px nút vẫn hiện dù chức năng chưa có.
4. **Danh sách tập trên trang xem bài giảng:** từ 1080px trở xuống thành bảng trượt phải rộng `min(400px, 88vw)`, nằm trên thanh trên và TabBar, lớp phủ `--scrim`; đóng bằng ×, chạm lớp phủ, Esc, hoặc khi chọn tập; giữ focus trong bảng và trả focus khi đóng; khóa cuộn an toàn cho iOS. Trên 1080px danh sách là cột phải luôn hiện.

Cần chủ site quyết:

- **Đăng nhập / Đăng ký:** quy tắc gốc v2 là không hiện khi chưa có chức năng; site đang hiện từ 1280px. Giữ hay bỏ?
- **Viết hoa nhãn điều hướng:** nhãn hiện viết hoa từng chữ ("Giáo Lý", "Bài Giảng") trong khi quy tắc là viết hoa đầu câu ("Giáo lý", "Bài giảng"). Coi đây là tên riêng của mục (giữ nguyên) hay đổi?
- **Đồng bộ artifact:** artifact Design System vẫn là v1; có cập nhật lên v2 theo thư mục này không.

---

## 12. Khác với v1 (artifact)

| Hạng mục | v1 (artifact) | v2 (thư mục này) |
| --- | --- | --- |
| Độ đậm | 400 / 500 / 600 | Chỉ 400 / 500 |
| Tiêu đề Crimson Pro | 500–600 | 400 |
| Tiêu đề thẻ | heading-4 sans 600 | heading-4 sans 500 |
| Eyebrow | 14px 600 | 14px 500 |
| Thân bài | 18px / 1.6 | 18px / 1.7 |
| Viền | 1–1.5px | 1px (`--hairline`), không viền 1.5px |
| Chip đã chọn | Nền `primary` đặc | Nền `accent-soft` + viền `accent` |
| Focus | 3px, offset 2px | 2px, offset 3px |
| Bóng | Nhẹ | Nhẹ hơn nữa (`shadow-card` chỉ còn 1 lớp) |
| Vòng chuỗi niệm | Nét 8 (theo viewBox), có bóng | Nét 1 (theo viewBox, khoảng 3px), track `line`, không viền, không bóng |
| Bo góc thẻ / dialog | 20px | 16px (`radius-lg`, trùng code đang chạy), thêm `radius-xl` 24px |
| Nhịp section | 64 / 96px | 64 / 80px qua `.site-section`; tiêu đề → nội dung 32 / 40px |
| Lớp phủ | `--overlay` | `--scrim` (trùng tên code đang chạy) |
| Icon | 37 hình, nét 1.5 | 42 hình, nét 1.25; TabBar dùng nét đang chạy trên site |
| Điều hướng | Hôm nay · Niệm Phật · Nghe và Học · Kinh · Hỏi đáp; tab có nhãn | Giáo Lý · Bài Giảng · Kinh Điển · Thời Khóa · Vấn Đáp; TabBar chỉ icon + vạch trượt |
| Token mới | | `space-5/10/20`, `--section-space`, `--section-head-gap`, `--hairline*`, `--type-heading-2-sm/ui-lg/label/quote/brand/scripture-lg`, `--fs-*`, `--duration-indicator`, `--z-*`, `--drawer-width`, `--tabbar-*` |

Bảng màu giữ nguyên 20 giá trị của v1 (riêng `overlay` đổi tên thành `scrim`); tất cả đã kiểm lại và đạt.

---

## 13. Hiện trạng code và lộ trình chuyển đổi

Số liệu đo ngày 12/10/2026 trên `styles.css`, `bai-giang.css`, `sutra.css`, `xem-bai-giang.css` và các trang HTML. Một số mục đang được sửa song song nên con số sẽ giảm dần.

### Site còn khác hệ ở đâu

1. **Chưa nạp design system.** Không trang nào nạp `design-system/tokens.css`, `components.css` hay dùng `icons.svg`.
2. **Tên token cũ.** Code dùng `--bg-primary`, `--bg-surface`, `--bg-surface-subtle`, `--text-main`, `--text-secondary`, `--text-muted`, `--text-subtle`, `--border-subtle`, `--border-muted`, `--border-focus`, `--btn-dark`, `--accent-gold`, `--accent-amber`, `--nav-active`, `--shadow-*`, `--transition-*`…; `xem-bai-giang.css` khai báo thêm bộ riêng (`--bg-page`, `--font-serif`, `--accent-gold-dark`, `--zen-green-*`); `bai-giang.css` gọi `--text-tertiary`, `--font-heading`, `--shadow-sm` mà không định nghĩa (chỉ có fallback). Bảng đối chiếu đầy đủ ở cuối `tokens.css` và `tokens.json` (`legacyAliases`).
3. **Màu cũ chưa đạt tương phản ở vài chỗ.** `--text-subtle` `#a8a29e` trên nền sáng chỉ 2.4:1; `--text-muted` trên `--bg-surface-subtle` 4.36:1; `--accent-amber` `#d97706` nếu làm chữ trên nền sáng chỉ 3.0:1; `--border-muted` `#d6d3d1` làm viền control chỉ 1.5:1.
4. **Màu phân loại nội dung** (`--accent-indigo`, `--accent-rose`, `--accent-emerald`, `--accent-stone` và nền của chúng) vẫn còn trong token cũ.
5. **Mã màu viết thẳng:** khoảng 105 mã hex trong `styles.css`, 438 trong `bai-giang.css`, 46 trong `xem-bai-giang.css`, 26 trong `sutra.css`; thêm vài mã inline trong HTML (ví dụ icon toast trang xem bài giảng).
6. **Thân bài 15px** (`body { font-size: 15px; line-height: 1.6 }` trong `styles.css`) thay vì 18px / 1.7.
7. **Chữ dưới 14px (đang được sửa):** khoảng 39 khai báo trong `styles.css`, 103 trong `bai-giang.css`, 21 trong `sutra.css`, 23 trong `xem-bai-giang.css`, và 15 style inline trong HTML.
8. **Độ đậm 600/700:** khoảng 23 chỗ trong `styles.css`, 75 trong `bai-giang.css`, 17 trong `sutra.css`, 17 trong `xem-bai-giang.css`. Google Fonts đang tải Inter 300–700 và Crimson Pro 400–700 (v2 chỉ cần Inter 400/500, Crimson Pro 400 thường + nghiêng).
9. **Emoji trong giao diện:** logo dùng 🪷; còn khoảng 11 ký tự emoji/biểu tượng trong `index.html`, 35 trong `bai-giang.html`, 14 trong `kinh-dien.html`, 79 trong `van-dap.html`, 8 trong `xem-bai-giang.html`, 5 trong `app.js` (gồm cả ✓ ✦ dùng làm icon).
10. **Chữ in hoa toàn bộ:** khoảng 12 chỗ `text-transform: uppercase` trong bốn file CSS.
11. **Dark mode viết riêng cho từng component:** theme tối bật bằng `body.dark-mode` (`app.js`) chứ không phải `data-theme`; `bai-giang.css` có khoảng 147 selector `body.dark-mode …`, `styles.css` khoảng 28 (phần lớn ngoài khối token).
12. **Icon lẫn nhiều bộ:** nhiều icon vẽ inline trong HTML với nét 2 (nút chia sẻ, đổi theme, tập trước / tập sau…). Chỉ TabBar và bảng danh sách tập đã theo nét 1.25.
13. **Focus:** TabBar và bảng danh sách tập dùng `outline: 2px solid var(--border-focus)` (màu chữ đậm) thay vì `--focus-ring` (hổ phách); offset chưa thống nhất.
14. **Điều hướng:** menu và TabBar đang chuyển từ 4 mục sang 5 mục; nhãn viết hoa từng chữ; "Thời Khóa" là neo `#thoi-khoa` trên trang chủ.
15. **Phần đã khớp:** TabBar dùng đúng tên class `td-tabbar*`, cao 56px, chỉ icon, vạch 16 × 2px trượt 260ms, tắt khi giảm chuyển động; bảng danh sách tập đúng hành vi ở mục 11; `--scrim`, `--tabbar-height`, `--tabbar-offset`, `--radius-sm/md/lg/xl/full`, `--font-display`, `--font-sans` trùng tên và nghĩa với v2.

### Lộ trình đề xuất

1. **Nạp token, chưa đổi selector.** Thêm `tokens.css` sau các file CSS cũ trên một nhánh riêng. Khối bí danh cuối `tokens.css` trỏ tên cũ về token v2 (gồm cầu nối tạm `body.dark-mode`), nên toàn site đổi sang bảng màu v2 và đạt tương phản ngay. Chụp kiểm tra mọi trang 390px và 1280px, Sáng và Tối.
2. **Theme bằng token.** Sửa `app.js` đặt `data-theme="dark"` trên `<html>` (giữ khóa lưu cũ); xóa các khối `body.dark-mode { --… }` trong file CSS cũ, rồi xóa dần selector `body.dark-mode .x` theo từng trang (component chỉ đọc token).
3. **Chữ.** Đổi `body` sang `font: var(--type-body)`; nâng mọi cỡ dưới 14px; đổi 600/700 thành 500; tiêu đề Crimson Pro về 400; bỏ `uppercase`; thu gọn link Google Fonts.
4. **Icon và emoji.** Thay emoji và icon inline bằng `icons.svg` (`<use href="design-system/icons.svg#i-…">`); logo dùng `i-lotus`.
5. **Component theo trang.** Mỗi lần một trang: thay khối cũ bằng component `td-` (thẻ, chip, accordion, danh sách tập, dialog/drawer), dùng `.site-section` cho nhịp dọc, xóa CSS cũ không còn dùng.
6. **Dọn bí danh.** Khi không còn file nào dùng tên cũ (grep `--text-main`, `--bg-surface`…), xóa khối bí danh và cầu nối `body.dark-mode` trong `tokens.css` và `legacyAliases` trong `tokens.json`.
7. **Đồng bộ artifact** Design System lên v2 khi chủ site đồng ý.
