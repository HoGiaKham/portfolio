portfolio-dev/ (Thư mục gốc hiện tại của bạn)
├── app/                  # (Đã có) Chứa routing và layouts
│   ├── layout.tsx        # Cấu trúc chung (Font, Metadata)
│   ├── page.tsx          # Trang chủ chính
│   └── globals.css       # (Đã có) CSS toàn cục
├── components/           # Chứa các thành phần giao diện tái sử dụng
│   ├── layout/           # Các phần cố định: Navbar, Footer
│   ├── sections/         # Tách riêng từng phần: Hero, About, Projects, Experience
│   └── ui/               # Các component nhỏ (Atomic): Button, Card, Input
├── lib/                  # Chứa logic, tiện ích và dữ liệu tĩnh
│   ├── data.ts           # NƠI QUAN TRỌNG NHẤT: Chứa toàn bộ nội dung CV
│   └── utils.ts          # Các hàm helper (ví dụ: format ngày tháng)
├── public/               # (Đã có) Chứa tài sản tĩnh
│   ├── images/           # Ảnh cá nhân, ảnh dự án (LaptopShop, ZalaChat)
│   └── docs/             # File CV PDF để người dùng tải về
├── types/                # Định nghĩa các kiểu dữ liệu (TypeScript interfaces)
│   └── index.ts          # Type cho Project, Experience, Skill
├── hooks/                # (Tùy chọn) Các React hooks tự viết
└── .env                  # Lưu biến môi trường (nếu sau này làm gửi mail)



