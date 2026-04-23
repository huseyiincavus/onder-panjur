"use client";

import { useState } from "react";

type Status = {
  type: "success" | "error";
  message: string;
} | null;

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        throw new Error(data.error || "Mesaj gönderilemedi.");
      }

      setStatus({
        type: "success",
        message: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Mesaj gönderilirken bir sorun oluştu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <input
          type="text"
          placeholder="Adınız Soyadınız"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          required
        />
        <input
          type="tel"
          placeholder="Telefon Numaranız"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          required
        />
        <input
          type="email"
          placeholder="E-posta Adresiniz"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        />
        <select
          value={form.service}
          onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
          required
        >
          <option value="" disabled>
            Hizmet Seçimi
          </option>
          <option>Panjur Sistemleri</option>
          <option>Pimapen Sistemleri</option>
          <option>Cam Balkon Sistemleri</option>
          <option>Sineklik Sistemleri</option>
          <option>Duşakabin Sistemleri</option>
          <option>Küpeşte Sistemleri</option>
          <option>Çatı Sistemleri</option>
        </select>
        <textarea
          placeholder="Mesajınız"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
        />
      </div>

      {status ? (
        <p className={`contact-form__status contact-form__status--${status.type}`}>{status.message}</p>
      ) : null}

      <button type="submit" className="contact-form__button" disabled={isSubmitting}>
        {isSubmitting ? "GÖNDERİLİYOR..." : "GÖNDER"}
      </button>
    </form>
  );
}
