import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import aboutImage from "@/public/images/about.png";
import cambalkonImage from "@/public/images/cambalkon.jpg";
import catiImage from "@/public/images/cati.png";
import dukkanImage from "@/public/images/dukkan.jpeg";
import dusakabinImage from "@/public/images/dusakabin.png";
import kupesteImage from "@/public/images/kupeste.png";
import logoImage from "@/public/images/logo.png";
import panjurImage from "@/public/images/panjur.png";
import pimapenImage from "@/public/images/pimapen.png";
import sineklikImage from "@/public/images/sineklik.png";

type IconProps = {
  className?: string;
};

type ContactItem = {
  icon: (props: IconProps) => ReactNode;
  label: string;
  value: string;
};

type FeatureItem = {
  icon: (props: IconProps) => ReactNode;
  title: string;
  text: string;
};

type ProductItem = {
  title: string;
  text: string;
  image: typeof panjurImage;
  whatsappMessage: string;
};

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M7.2 3.5h2.7c.4 0 .8.3.9.7l.9 4c.1.4-.1.8-.4 1l-1.8 1.3a15.5 15.5 0 0 0 4.9 4.9l1.3-1.8c.2-.3.6-.5 1-.4l4 .9c.4.1.7.5.7.9v2.7c0 .5-.4 1-1 1C11.3 21 3 12.7 3 4.5c0-.6.4-1 1-1h3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.5v5l3.1 1.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 3.2a8.8 8.8 0 0 0-7.5 13.4L3.4 20.8l4.4-1.1A8.8 8.8 0 1 0 12 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.5c.2-.3.4-.4.6-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.5.7c.5.9 1.2 1.6 2 2l.7-.4c.2-.1.4-.1.6 0l1.4.6c.3.1.4.2.4.5v.4c0 .2-.1.4-.4.6-.4.2-.9.2-1.4.1-2.6-.6-4.7-2.7-5.3-5.2-.1-.5 0-1 .2-1.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CogIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 8.3A3.7 3.7 0 1 0 12 15.7 3.7 3.7 0 1 0 12 8.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m19.4 13.2-.1-2.4-1.9-.6a5.9 5.9 0 0 0-.6-1.3l.9-1.8-1.7-1.7-1.8.9c-.4-.2-.8-.4-1.3-.6l-.6-1.9h-2.4l-.6 1.9c-.5.2-.9.4-1.3.6l-1.8-.9-1.7 1.7.9 1.8c-.2.4-.4.8-.6 1.3l-1.9.6v2.4l1.9.6c.2.5.4.9.6 1.3l-.9 1.8 1.7 1.7 1.8-.9c.4.2.8.4 1.3.6l.6 1.9h2.4l.6-1.9c.5-.2.9-.4 1.3-.6l1.8.9 1.7-1.7-.9-1.8c.2-.4.4-.8.6-1.3l1.9-.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="8.2" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 18c1.5-2.6 4-4 6.5-4s5 1.4 6.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M4 6.5h10v8H4Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M14 9h3.5l2 2.2v3.3H14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="17.2" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="17.2" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 3.5 19 6v5.5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V6l7-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M5 12h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 7 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

const contactItems: ContactItem[] = [
  { icon: PhoneIcon, label: "Hemen Ara", value: "0532 793 63 18" },
  { icon: ClockIcon, label: "Çalışma Saatlerimiz", value: "Pazartesi - Cumartesi: 09.00 - 17.00" },
  { icon: MailIcon, label: "Mail Adresimiz", value: "info@onderpanjuruskudar.com" },
];

const features: FeatureItem[] = [
  { icon: CogIcon, title: "Yüksek Kalite", text: "Dayanıklı ve uzun ömürlü ürünler" },
  { icon: UserIcon, title: "Profesyonel Hizmet", text: "Uzman ekibimizle hızlı ve güvenilir çözümler" },
  { icon: TruckIcon, title: "Zamanında Teslimat", text: "Söz verdiğimiz tarihte teslimat garantisi" },
  { icon: ShieldIcon, title: "%100 Müşteri Memnuniyeti", text: "Memnuniyet odaklı çalışma prensibi" },
];

const products: ProductItem[] = [
  {
    title: "Panjur Sistemleri",
    text: "Manuel ve motorlu panjur sistemleri ile güvenlik ve konforu bir arada sunuyoruz.",
    image: panjurImage,
    whatsappMessage: "Merhaba, panjur yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Pimapen Sistemleri",
    text: "Isı ve ses yalıtımı sağlayan pimapen sistemleri ile enerji tasarrufu sağlayın.",
    image: pimapenImage,
    whatsappMessage: "Merhaba, pimapen yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Cam Balkon Sistemleri",
    text: "Dört mevsim kullanabileceğiniz cam balkon sistemleri ile yaşam alanlarınızı genişletin.",
    image: cambalkonImage,
    whatsappMessage: "Merhaba, cam balkon yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Sineklik Sistemleri",
    text: "Sinek, böcek ve haşerelere karşı etkili sineklik sistemleri ile konforlu alanlar.",
    image: sineklikImage,
    whatsappMessage: "Merhaba, sineklik yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Duşakabin Sistemleri",
    text: "Şık ve dayanıklı duşakabin çözümleri ile banyoda konforu hissedin.",
    image: dusakabinImage,
    whatsappMessage: "Merhaba, duşakabin yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Küpeşte Sistemleri",
    text: "Cam ve alüminyum küpeşte sistemleri ile estetik ve güvenliği birleştirin.",
    image: kupesteImage,
    whatsappMessage: "Merhaba, küpeşte yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
  {
    title: "Çatı Sistemleri",
    text: "Bioklimatik pergola ve çatı sistemleri ile dış mekanlarınızı dört mevsim kullanın.",
    image: catiImage,
    whatsappMessage: "Merhaba, çatı sistemi yaptırmak istiyorum. Keşif ve fiyat bilgisi alabilir miyim?",
  },
];

const footerColumns = [
  {
    title: "Hakkımızda",
    links: ["Hakkımızda"],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      "Keşif & Danışmanlık",
      "Montaj Hizmeti",
      "Bakım & Onarım",
      "Teknik Destek",
      "Panjur Sistemleri",
      "Pimapen Sistemleri",
      "Cam Balkon Sistemleri",
      "Sineklik Sistemleri",
      "Duşakabin Sistemleri",
      "Küpeşte Sistemleri",
      "Çatı Sistemleri",
    ],
  },
];

const navigationItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetlerimiz" },
  { label: "İletişim", href: "#iletisim" },
];

const whatsappBaseUrl = "https://wa.me/905387403029";
const siteUrl = "https://www.onderpanjuruskudar.com";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Önder Panjur",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  telephone: "+90 532 793 63 18",
  email: "info@onderpanjuruskudar.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ünalan Mah., İsmet Paşa Cd. No:66B",
    addressLocality: "Üsküdar",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    "İstanbul",
    "Kocaeli",
    "Sakarya",
    "Tekirdağ",
    "Yalova",
    "Bursa",
  ],
  sameAs: ["https://www.instagram.com/onderpanjurofficial"],
  makesOffer: [
    "Panjur Sistemleri",
    "Pimapen Sistemleri",
    "Cam Balkon Sistemleri",
    "Sineklik Sistemleri",
    "Duşakabin Sistemleri",
    "Küpeşte Sistemleri",
    "Çatı Sistemleri",
  ],
};

export default function Page() {
  return (
    <main className="homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <header className="site-header site-header--light">
        <div className="container-custom header-top">
          <div className="brand-lockup">
            <Image src={logoImage} alt="Önder Panjur logosu" className="brand-logo" priority />
          </div>

          <div className="top-contact-row">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="top-contact" key={item.label}>
                  <Icon className="top-contact__icon" />
                  <div>
                    <p className="top-contact__label">{item.label}</p>
                    <p className="top-contact__value">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="header-nav-wrap">
          <div className="container-custom">
            <nav className="main-nav main-nav--linked" aria-label="Ana menü">
              {navigationItems.map((item, index) => (
                <Link
                  href={item.href}
                  className={`main-nav__link${index === 0 ? " is-active" : ""}`}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="hero-section" id="anasayfa">
        <div className="container-custom hero-grid">
          <div className="hero-copy">
            <h1>
              KALİTELİ ÜRÜNLER,
              <span> GÜVENLİ VE KONFORLU</span>
              <br />
              YAŞAM ALANLARI
            </h1>
            <p>
              Panjur, pimapen, cam balkon, sineklik, çatı ve küpeşte sistemlerinde uzman kadromuzla,
              dayanıklı, estetik ve uzun ömürlü çözümler sunuyoruz.
            </p>
          </div>

          <div className="hero-visual">
            <Image
              src={dukkanImage}
              alt="Önder Panjur mağaza cephesi"
              fill
              className="hero-visual__image"
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container-custom features-panel">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`feature-card${index < features.length - 1 ? " feature-card--bordered" : ""}`}
              >
                <div className="feature-card__icon-wrap">
                  <Icon className="feature-card__icon" />
                </div>
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="hakkimizda">
        <div className="container-custom about-grid">
          <div className="about-copy">
            <p className="section-heading__eyebrow section-heading__eyebrow--left">HAKKIMIZDA</p>
            <h2>Önder Panjur Hakkında</h2>
            <p>
              1996&apos;dan bu yana edindiğimiz tecrübe ile yaşam alanlarınıza değer katıyoruz.
              Kaliteli malzeme, titiz işçilik ve müşteri memnuniyetini ön planda tutarak her
              projede güven ve estetiği bir araya getiriyoruz.
            </p>
            <p>
              Üsküdar merkezli ekibimizle İstanbul&apos;un yanı sıra Kocaeli, Sakarya, Tekirdağ,
              Yalova ve Bursa çevresine de hizmet sağlıyoruz.
            </p>

            <ul className="about-list">
              {[
                "Kaliteli ve uzun ömürlü malzeme",
                "Uzman ve deneyimli kadro",
                "Zamanında teslimat ve montaj",
                "Satış sonrası teknik destek",
              ].map((item) => (
                <li key={item}>
                  <span className="about-list__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-visual">
            <Image
              src={aboutImage}
              alt="Önder Panjur modern villa uygulaması"
              fill
              className="about-visual__image"
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="products-section" id="hizmetlerimiz">
        <div className="container-custom section-heading">
          <p className="section-heading__eyebrow">HİZMETLERİMİZ</p>
          <h2>Yaşam Alanlarınızı Güzelleştiren Çözümler</h2>
          <div className="section-heading__line" />
        </div>

        <div className="container-custom products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-card__media">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="product-card__image"
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                />
              </div>

              <div className="product-card__body">
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(product.whatsappMessage)}`}
                  className="product-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Detaylı Bilgi
                  <ArrowIcon className="product-card__link-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="iletisim">
        <div className="container-custom contact-panel">
          <div className="contact-copy">
            <p className="section-heading__eyebrow section-heading__eyebrow--left">İLETİŞİME GEÇİN</p>
            <h2>Ücretsiz Keşif ve Fiyat Teklifi Alın</h2>
            <p>
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler sunmak için sizlere ücretsiz keşif
              hizmeti vermekten memnuniyet duyar.
            </p>
            <p>
              İstanbul ve çevre illerden gelen keşif ve fiyat teklifi talepleri için de bizimle
              hızlıca iletişime geçebilirsiniz.
            </p>

            <div className="contact-shortcuts">
              <a className="contact-shortcut" href="tel:+905327936318">
                <PhoneIcon className="contact-shortcut__icon" />
                <div>
                  <span>Hemen Ara</span>
                  <strong>0532 793 63 18</strong>
                </div>
              </a>
              <a
                className="contact-shortcut"
                href="https://wa.me/905387403029?text=Merhaba%2C%20evim%20i%C3%A7in%20yapt%C4%B1rmak%20istedi%C4%9Fim%20i%C5%9Fler%20var.%20Ke%C5%9Fif%20ve%20fiyat%20bilgisi%20alabilir%20miyim%3F"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="contact-shortcut__icon contact-shortcut__icon--whatsapp" />
                <div>
                  <span>WhatsApp</span>
                  <strong>0538 740 30 29</strong>
                </div>
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="Önder Panjur Konum"
                src="https://www.google.com/maps?q=%C3%96nder%20Panjur%2C%20%C3%9Cnalan%20Mah.%20%C4%B0smet%20Pa%C5%9Fa%20Cd.%20No%3A66%2C%20%C3%9Csk%C3%BCdar%20%C4%B0stanbul&ll=41.0024647,29.0637955&z=18&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form">
            <div className="contact-form__grid">
              <input type="text" placeholder="Adınız Soyadınız" />
              <input type="tel" placeholder="Telefon Numaranız" />
              <input type="email" placeholder="E-posta Adresiniz" />
              <select defaultValue="">
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
              <textarea placeholder="Mesajınız" rows={5} />
            </div>

            <button type="submit" className="contact-form__button">
              GÖNDER
              <ArrowIcon className="contact-form__button-icon" />
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer site-footer--light">
        <div className="container-custom footer-grid">
          <div className="footer-brand">
            <div className="brand-lockup brand-lockup--footer">
              <Image src={logoImage} alt="Önder Panjur logosu" className="brand-logo brand-logo--footer" />
            </div>

            <p>
              Panjur, Pimapen, Cam Balkon ve Sineklik sistemlerinde kaliteli, güvenilir ve estetik
              çözümler sunuyoruz.
            </p>

            <div className="social-row">
              <Link
                href="https://www.instagram.com/onderpanjurofficial"
                className="social-row__item"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="social-row__icon" />
              </Link>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <h3>İletişim</h3>
            <ul>
              <li>Ünalan Mah., İsmet Paşa Cd. No:66B Üsküdar / İstanbul</li>
              <li>0532 793 63 18</li>
              <li>info@onderpanjuruskudar.com</li>
            </ul>
          </div>
        </div>

        <div className="container-custom footer-bottom">
          <p>© 2026 Önder Panjur. Tüm hakları saklıdır.</p>
          <div className="footer-bottom__links" />
        </div>
      </footer>
    </main>
  );
}
