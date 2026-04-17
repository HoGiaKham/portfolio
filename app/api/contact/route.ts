// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vui lòng điền đầy đủ thông tin" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Giữ nguyên dòng này để test
      to: ['hogiakham1705@gmail.com'], // Mail nhận của bạn
      subject: `Tin nhắn mới từ Portfolio: ${name}`,
      replyTo: email, // <-- Đã sửa thành replyTo ở đây
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Bạn có tin nhắn mới từ Portfolio!</h2>
          <p><strong>Người gửi:</strong> ${name}</p>
          <p><strong>Email liên hệ:</strong> ${email}</p>
          <hr />
          <p><strong>Nội dung tin nhắn:</strong></p>
          <div style="background-color: #f4f4f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Lỗi gửi mail:", error);
    return NextResponse.json({ error: "Đã có lỗi xảy ra khi gửi mail" }, { status: 500 });
  }
}