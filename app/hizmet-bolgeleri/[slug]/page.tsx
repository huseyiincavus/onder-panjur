import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { coreServices, getServiceArea, serviceAreas, siteUrl } from "@/app/lib/service-areas";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return {
      title: "Hizmet Bölgesi Bulunamadı | Önder Panjur",
    };
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    keywords: area.keywords,
    alternates: {
      canonical: `/hizmet-bolgeleri/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `${siteUrl}/hizmet-bolgeleri/${area.slug}`,
      type: "article",
      locale: "tr_TR",
      siteName: "Önder Panjur",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: `${area.name} hizmet bölgesi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.seoTitle,
      description: area.seoDescription,
      images: ["/images/logo.png"],
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Panjur, Pimapen, Cam Balkon ve Sineklik Hizmetleri",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Önder Panjur",
      url: siteUrl,
      telephone: "+90 532 793 63 18",
      email: "info@onderpanjuruskudar.com",
    },
    areaServed: [area.name, ...area.neighborhoods],
    offers: coreServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  return (
    <main className="service-area-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="service-area-hero">
        <div className="container-custom service-area-hero__inner">
          <p className="section-heading__eyebrow">HİZMET BÖLGESİ</p>
          <h1>{area.title}</h1>
          <p>{area.intro}</p>

          <div className="service-area-hero__actions">
            <Link href="/#iletisim" className="hero-button">
              Ücretsiz Keşif Talep Et
            </Link>
            <Link href="/" className="service-area-link">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>

      <section className="service-area-content">
        <div className="container-custom service-area-grid">
          <article className="service-area-card">
            <h2>{area.shortName} İçin Hizmet Detayı</h2>
            <p>{area.description}</p>
            <p>
              Bölgede keşif, ölçü alma, ürün seçimi, uygulama planlaması ve satış sonrası destek
              süreçlerini tek elden yönetiyoruz. Konut, villa, mağaza ve iş yeri projeleri için
              hızlı dönüş sağlıyoruz.
            </p>
          </article>

          <aside className="service-area-card">
            <h2>Hizmet Verdiğimiz Noktalar</h2>
            <ul className="service-area-list">
              {area.neighborhoods.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="service-area-services">
        <div className="container-custom">
          <div className="section-heading">
            <p className="section-heading__eyebrow">BÖLGEYE ÖZEL ÇÖZÜMLER</p>
            <h2>{area.name} İçin Öne Çıkan Hizmetler</h2>
            <div className="section-heading__line" />
          </div>

          <div className="service-area-service-grid">
            {coreServices.map((service) => (
              <article className="service-area-service-card" key={service}>
                <h3>{service}</h3>
                <p>
                  {area.name} genelinde {service.toLowerCase()} için keşif, teklif ve uygulama
                  desteği sağlıyoruz.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-area-links">
        <div className="container-custom">
          <div className="section-heading">
            <p className="section-heading__eyebrow">DİĞER BÖLGELER</p>
            <h2>Yakın Hizmet Bölgeleri</h2>
            <div className="section-heading__line" />
          </div>

          <div className="service-area-link-grid">
            {serviceAreas
              .filter((item) => item.slug !== area.slug)
              .map((item) => (
                <Link key={item.slug} href={`/hizmet-bolgeleri/${item.slug}`} className="service-area-link-card">
                  <strong>{item.name}</strong>
                  <span>{item.seoDescription}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
