import { ProjectData } from "../../types";

export const projectsData: ProjectData[] = [
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
      { label: "🏠 Trang chủ", url: "/images/MainScreen.png" },
      { label: "🔐 Đăng nhập", url: "/images/LoginScreen.png" },
      { label: "📝 Đăng ký", url: "/images/RegisterScreen.png" },
      { label: "🛒 Giỏ hàng", url: "/images/CartScreen.png" },
      { label: "💳 Thông tin thanh toán", url: "/images/PaymentInforScreen.png" },
      { label: "💳 Xác nhận thanh toán", url: "/images/PaymentScreen1.png" },
      { label: "📦 Chi tiết sản phẩm", url: "/images/DetailProductScreen.png" },
      { label: "🤖 Chatbot AI hỗ trợ", url: "/images/AIScreen.png" },
      { label: "👤 Quản lý người dùng (Admin)", url: "/images/AccountAdminScreen.png" },
      { label: "🛍️ Quản lý sản phẩm", url: "/images/ProductScreen.png" },
      { label: "📦 Quản lý đơn hàng", url: "/images/OrderManagermentScreen.png" },
      { label: "📁 Danh mục & Thương hiệu", url: "/images/CategoriesManagementScreen.png" },
      { label: "📊 Trang thống kê (Admin)", url: "/images/StaticalScreen.png" },
      { label: "🚚 Thông tin Shipper", url: "/images/InforShipperScreen.png" },
      { label: "📦 Chính sách vận chuyển", url: "/images/ShippingPolicyScreen.png" },
      { label: "🔧 Chính sách bảo hành", url: "/images/GuaranteeScreen.png" },
      { label: "✉️ Liên hệ", url: "/images/ContactScreen.png" }
    ]
  },
  {
    title: "ZALACHAT",
    role: "FULLSTACK DEVELOPER",
    duration: "Feb 2025 - Apr 2025",
    github: "https://github.com/HoGiaKham/ZalaChatWeb",
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
      { label: "🔐 Đăng nhập", url: "/images/LoginScreen.jpg" },
      { label: "🆕 Đăng ký", url: "/images/RegisterScreen.jpg" },
      { label: "🔁 Quên mật khẩu", url: "/images/ForgetPasswordScreen.jpg" },
      { label: "🔒 Đổi mật khẩu", url: "/images/ChangePasswordScreen.jpg" },
      { label: "💬 Chat cá nhân", url: "/images/ChatScreen.jpg" },
      { label: "👥 Chat nhóm", url: "/images/ChatGroupScreen.jpg" },
      { label: "🧑‍💼 Thông tin cá nhân", url: "/images/ViewMyProfile.jpg" },
      { label: "👨‍👩‍👧‍👦 Thông tin người dùng", url: "/images/ViewChatPeopleInformation.jpg" },
      { label: "🎨 Chọn màu chủ đề", url: "/images/SelectColorTheme.jpg" },
      { label: "✍️ Đặt biệt hiệu", url: "/images/SetNicknameScreen.jpg" },
      { label: "🧭 Danh bạ bạn bè", url: "/images/ContactScreen.jpg" },
      { label: "🔍 Tìm tin nhắn", url: "/images/SearchForMessage.jpg" },
      { label: "🖼️ Ảnh được chia sẻ", url: "/images/ImageSharedScreen.jpg" },
      { label: "🧩 Modal nhóm (header)", url: "/images/ModalChatHeaderGroupScreen.jpg" },
      { label: "🧩 Modal nhóm (danh sách)", url: "/images/ModalChatHeaderScreen.jpg" }
    ]
  }
];