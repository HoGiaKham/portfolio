import { ProjectData } from "../../types";

export const projectsData: ProjectData[] = [
  {
    title: "EduTest Pro - Online Testing Platform",
    role: "FULLSTACK DEVELOPER",
    duration: "Aug 2025 - Dec 2025",
    github: "https://github.com/HoGiaKham/KTLN-FINAL",
    videoUrl: "https://youtu.be/lely0oyd8mE",
    tech: ["ReactJS", "Node.js", "ExpressJS", "MongoDB", "OpenAI API", "JWT", "Vercel", "Render"],
    description: [
      "Architected and developed a comprehensive online multiple-choice testing platform for university lecturers and students.",
      "Integrated OpenAI API to intelligently generate diverse exam questions and prevent repetitive testing structures.",
      "Built a secure real-time exam-taking interface for students featuring countdown timers, auto-save functionality, and answer flagging.",
      "Implemented strict anti-cheat mechanisms including tab-switching detection and copy-paste prevention during active exam sessions.",
      "Developed an advanced question bank management system for lecturers with Excel import/export capabilities and category filtering.",
      "Engineered automated grading logic and dynamic statistical dashboards with PDF/Excel reporting features.",
      "Deployed the robust full-stack application using Vercel for the frontend and Render for the server and database."
    ],
    images: [
      { label: "🔐 Đăng nhập hệ thống", url: "/images/edutest/KLTN-login.png" },
      { label: "📝 Tạo đề luyện tập", url: "/images/edutest/create-practice-questions.png" },
      { label: "📝 Tạo đề kiểm tra", url: "/images/edutest/create-test.png" },
      { label: "📚 Làm bài luyện tập", url: "/images/edutest/do-the-exercises.png" },
      { label: "📚 Làm bài kiểm tra", url: "/images/edutest/take-the-test.png" },
      { label: "✅ Xem lại kết quả", url: "/images/edutest/review-the-results.png" },
      { label: "📊 Thống kê điểm số", url: "/images/edutest/score-statistics.png" }
    ]
  },
  {
    title: "ZALACHAT",
    role: "FULLSTACK DEVELOPER",
    duration: "Feb 2025 - Apr 2025",
    github: "https://github.com/HoGiaKham/ZalaChatWeb",
    liveUrl: "https://zalachat-frontend.vercel.app/",
    tech: ["ReactJS", "Node.js", "Express", "Socket.IO", "AWS Cognito", "DynamoDB", "S3"],
    description: [
      "Built a real-time chat application supporting private and group conversations with a responsive interface.",
      "Implemented seamless real-time messaging using Socket.IO and Node.js for low-latency communication.",
      "Integrated AWS Cognito for robust user authentication, including secure OTP-based login and registration.",
      "Utilized AWS DynamoDB for highly scalable message storage and AWS S3 for reliable media/image sharing.",
      "Developed rich chat features including customizable chat themes, user nicknames, and message/user search.",
      "Created comprehensive group management functionalities allowing users to create groups, manage members, and change group settings."
    ],
    images: [
      { label: "🔐 Đăng nhập", url: "/images/zalachat/LoginScreen.jpg" },
      { label: "🆕 Đăng ký", url: "/images/zalachat/RegisterScreen.jpg" },
      { label: "🔁 Quên mật khẩu", url: "/images/zalachat/ForgetPasswordScreen.jpg" },
      { label: "🔒 Đổi mật khẩu", url: "/images/zalachat/ChangePasswordScreen.jpg" },
      { label: "💬 Chat cá nhân", url: "/images/zalachat/ChatScreen.jpg" },
      { label: "👥 Chat nhóm", url: "/images/zalachat/ChatGroupScreen.jpg" },
      { label: "🧑‍💼 Thông tin cá nhân", url: "/images/zalachat/ViewMyProfile.jpg" },
      { label: "👨‍👩‍👧‍👦 Thông tin người dùng", url: "/images/zalachat/ViewChatPeopleInformation.jpg" },
      { label: "🎨 Chọn màu chủ đề", url: "/images/zalachat/SelectColorTheme.jpg" },
      { label: "✍️ Đặt biệt hiệu", url: "/images/zalachat/SetNicknameScreen.jpg" },
      { label: "🧭 Danh bạ bạn bè", url: "/images/zalachat/ContactScreen.jpg" },
      { label: "🔍 Tìm tin nhắn", url: "/images/zalachat/SearchForMessage.jpg" },
      { label: "🖼️ Ảnh được chia sẻ", url: "/images/zalachat/ImageSharedScreen.jpg" },
      { label: "🧩 Modal nhóm (header)", url: "/images/zalachat/ModalChatHeaderGroupScreen.jpg" },
      { label: "🧩 Modal nhóm (danh sách)", url: "/images/zalachat/ModalChatHeaderScreen.jpg" }
    ]
  },
  {
    title: "LapTopStore - E-commerce Website",
    role: "FULLSTACK DEVELOPER",
    duration: "Mar 2025 - May 2025",
    github: "https://github.com/HoGiaKham/LapTopStore",
    tech: ["ReactJS", "TailwindCSS", "Node.js", "ExpressJS", "MySQL", "JWT"],
    description: [
      "Built a full-featured e-commerce platform for selling laptops with a responsive UI using ReactJS and TailwindCSS.",
      "Implemented secure user authentication and authorization using JSON Web Tokens (JWT).",
      "Developed comprehensive Admin dashboards to manage products, categories, orders, and user accounts.",
      "Integrated an AI Chatbot to assist users with product inquiries and enhance customer experience.",
      "Handled core e-commerce features including shopping cart management, checkout process, and order tracking.",
      "Designed and optimized a relational database schema using MySQL."
    ],
    images: [
      { label: "🏠 Trang chủ", url: "/images/laptop-store/MainScreen.png" },
      { label: "🔐 Đăng nhập", url: "/images/laptop-store/LoginScreen.png" },
      { label: "📝 Đăng ký", url: "/images/laptop-store/RegisterScreen.png" },
      { label: "🛒 Giỏ hàng", url: "/images/laptop-store/CartScreen.png" },
      { label: "💳 Thông tin thanh toán", url: "/images/laptop-store/PaymentInforScreen.png" },
      { label: "💳 Xác nhận thanh toán", url: "/images/laptop-store/PaymentScreen1.png" },
      { label: "📦 Chi tiết sản phẩm", url: "/images/laptop-store/DetailProductScreen.png" },
      { label: "🤖 Chatbot AI hỗ trợ", url: "/images/laptop-store/AIScreen.png" },
      { label: "👤 Quản lý người dùng (Admin)", url: "/images/laptop-store/AccountAdminScreen.png" },
      { label: "🛍️ Quản lý sản phẩm", url: "/images/laptop-store/ProductScreen.png" },
      { label: "📦 Quản lý đơn hàng", url: "/images/laptop-store/OrderManagermentScreen.png" },
      { label: "📁 Danh mục & Thương hiệu", url: "/images/laptop-store/CategoriesManagementScreen.png" },
      { label: "📊 Trang thống kê (Admin)", url: "/images/laptop-store/StaticalScreen.png" },
      { label: "🚚 Thông tin Shipper", url: "/images/laptop-store/InforShipperScreen.png" },
      { label: "📦 Chính sách vận chuyển", url: "/images/laptop-store/ShippingPolicyScreen.png" },
      { label: "🔧 Chính sách bảo hành", url: "/images/laptop-store/GuaranteeScreen.png" },
      { label: "✉️ Liên hệ", url: "/images/laptop-store/ContactScreen.png" }
    ]
  }
];