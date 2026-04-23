function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, message } = (await request.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      message?: string;
    };

    if (!name?.trim() || !phone?.trim() || !service?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Lütfen ad soyad, telefon, hizmet seçimi ve mesaj alanlarını doldurun." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          error:
            "Mail servisi henüz yapılandırılmadı. Vercel ortam değişkenlerine RESEND_API_KEY eklenmeli.",
        },
        { status: 500 },
      );
    }

    const subject = `Yeni İletişim Formu Talebi - ${service}`;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "huseyiincavusx@gmail.com";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <h2 style="margin-bottom: 16px;">Yeni İletişim Formu Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email?.trim() || "-")}</p>
        <p><strong>Hizmet:</strong> ${escapeHtml(service)}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        reply_to: email?.trim() || undefined,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return Response.json(
        { error: `Mail gönderilemedi. ${errorText || "Resend isteği başarısız oldu."}` },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}
