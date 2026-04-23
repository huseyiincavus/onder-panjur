export type ServiceArea = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  neighborhoods: string[];
};

export const siteUrl = "https://www.onderpanjuruskudar.com";

export const coreServices = [
  "Panjur Sistemleri",
  "Pimapen Sistemleri",
  "Cam Balkon Sistemleri",
  "Sineklik Sistemleri",
  "Duşakabin Sistemleri",
  "Küpeşte Sistemleri",
  "Çatı Sistemleri",
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "istanbul-anadolu-yakasi",
    name: "İstanbul Anadolu Yakası",
    shortName: "Anadolu Yakası",
    title: "İstanbul Anadolu Yakası Panjur ve Cam Balkon Hizmetleri",
    description:
      "Üsküdar, Kadıköy, Ataşehir, Ümraniye, Çekmeköy, Sancaktepe, Kartal, Maltepe, Pendik, Tuzla ve çevresinde keşif, montaj ve teknik destek.",
    intro:
      "Önder Panjur olarak İstanbul Anadolu Yakası genelinde panjur, pimapen, cam balkon ve sineklik çözümlerini keşif ve montaj desteğiyle sunuyoruz.",
    seoTitle:
      "İstanbul Anadolu Yakası Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "İstanbul Anadolu Yakası'nda panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, fiyat teklifi ve uygulama hizmetleri.",
    keywords: [
      "İstanbul Anadolu Yakası panjur",
      "Anadolu Yakası cam balkon",
      "Anadolu Yakası sineklik",
      "Üsküdar panjur",
      "Kadıköy cam balkon",
      "Ataşehir pimapen",
    ],
    neighborhoods: [
      "Üsküdar",
      "Kadıköy",
      "Ataşehir",
      "Ümraniye",
      "Çekmeköy",
      "Sancaktepe",
      "Maltepe",
      "Kartal",
      "Pendik",
      "Tuzla",
    ],
  },
  {
    slug: "istanbul-avrupa-yakasi",
    name: "İstanbul Avrupa Yakası",
    shortName: "Avrupa Yakası",
    title: "İstanbul Avrupa Yakası Panjur ve Cam Balkon Hizmetleri",
    description:
      "Beşiktaş, Şişli, Kağıthane, Eyüpsultan, Küçükçekmece, Beylikdüzü, Avcılar, Bahçelievler ve çevresine keşif ve uygulama hizmeti.",
    intro:
      "İstanbul Avrupa Yakası için panjur, pimapen, cam balkon, sineklik ve tamamlayıcı sistemlerde profesyonel uygulama ve teknik destek hizmeti veriyoruz.",
    seoTitle:
      "İstanbul Avrupa Yakası Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "İstanbul Avrupa Yakası'nda panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, montaj ve teknik destek hizmetleri.",
    keywords: [
      "İstanbul Avrupa Yakası panjur",
      "Avrupa Yakası cam balkon",
      "Avrupa Yakası sineklik",
      "Beylikdüzü panjur",
      "Şişli pimapen",
      "Kağıthane cam balkon",
    ],
    neighborhoods: [
      "Beşiktaş",
      "Şişli",
      "Kağıthane",
      "Eyüpsultan",
      "Bahçelievler",
      "Bakırköy",
      "Avcılar",
      "Beylikdüzü",
      "Küçükçekmece",
      "Başakşehir",
    ],
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    shortName: "Kocaeli",
    title: "Kocaeli Panjur, Cam Balkon ve Sineklik Hizmetleri",
    description:
      "İzmit, Başiskele, Kartepe, Gölcük, Derince, Körfez, Gebze ve çevresinde panjur ve cam balkon çözümleri.",
    intro:
      "Kocaeli genelinde konut ve iş yerleri için panjur, pimapen, cam balkon ve sineklik uygulamalarında keşif ve teklif desteği sağlıyoruz.",
    seoTitle: "Kocaeli Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "Kocaeli'nde panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, fiyat teklifi ve uygulama hizmetleri.",
    keywords: [
      "Kocaeli panjur",
      "İzmit cam balkon",
      "Gebze sineklik",
      "Kartepe pimapen",
      "Kocaeli cam balkon",
    ],
    neighborhoods: ["İzmit", "Başiskele", "Kartepe", "Gölcük", "Derince", "Körfez", "Gebze"],
  },
  {
    slug: "sakarya",
    name: "Sakarya",
    shortName: "Sakarya",
    title: "Sakarya Panjur, Cam Balkon ve Sineklik Hizmetleri",
    description:
      "Adapazarı, Serdivan, Erenler, Akyazı, Arifiye, Sapanca ve çevresinde keşif ve uygulama hizmeti.",
    intro:
      "Sakarya'da estetik, dayanıklı ve uzun ömürlü panjur, cam balkon, sineklik ve pimapen çözümleri için yerinde keşif ve planlama desteği sunuyoruz.",
    seoTitle: "Sakarya Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "Sakarya'da panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için profesyonel keşif ve uygulama hizmetleri.",
    keywords: [
      "Sakarya panjur",
      "Adapazarı cam balkon",
      "Serdivan sineklik",
      "Sapanca pimapen",
      "Sakarya cam balkon",
    ],
    neighborhoods: ["Adapazarı", "Serdivan", "Erenler", "Akyazı", "Arifiye", "Sapanca"],
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    shortName: "Tekirdağ",
    title: "Tekirdağ Panjur, Cam Balkon ve Sineklik Hizmetleri",
    description:
      "Süleymanpaşa, Çorlu, Çerkezköy, Kapaklı, Marmaraereğlisi ve çevresinde yaşam alanlarına özel çözümler.",
    intro:
      "Tekirdağ ve çevresinde modern yapılara uygun panjur, cam balkon, pimapen ve sineklik sistemleri için keşif ve uygulama planı hazırlıyoruz.",
    seoTitle: "Tekirdağ Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "Tekirdağ'da panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, montaj ve teknik destek hizmetleri.",
    keywords: [
      "Tekirdağ panjur",
      "Çorlu cam balkon",
      "Çerkezköy sineklik",
      "Kapaklı pimapen",
      "Tekirdağ cam balkon",
    ],
    neighborhoods: ["Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Marmaraereğlisi"],
  },
  {
    slug: "yalova",
    name: "Yalova",
    shortName: "Yalova",
    title: "Yalova Panjur, Cam Balkon ve Sineklik Hizmetleri",
    description:
      "Yalova merkez, Çınarcık, Altınova, Termal ve çevresinde keşif, teklif ve uygulama desteği.",
    intro:
      "Yalova'da ev ve iş yerlerine özel panjur, cam balkon, sineklik ve pimapen sistemleri için profesyonel keşif hizmeti sunuyoruz.",
    seoTitle: "Yalova Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "Yalova'da panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, fiyat teklifi ve uygulama hizmetleri.",
    keywords: [
      "Yalova panjur",
      "Yalova cam balkon",
      "Çınarcık sineklik",
      "Altınova pimapen",
      "Termal panjur",
    ],
    neighborhoods: ["Yalova Merkez", "Çınarcık", "Altınova", "Termal", "Çiftlikköy"],
  },
  {
    slug: "bursa",
    name: "Bursa",
    shortName: "Bursa",
    title: "Bursa Panjur, Cam Balkon ve Sineklik Hizmetleri",
    description:
      "Nilüfer, Osmangazi, Yıldırım, Mudanya, Gemlik ve çevresinde panjur ve cam balkon çözümleri.",
    intro:
      "Bursa genelinde yaşam alanlarını daha güvenli, konforlu ve estetik hale getiren panjur, pimapen, cam balkon ve sineklik uygulamaları yapıyoruz.",
    seoTitle: "Bursa Panjur, Pimapen ve Cam Balkon | Önder Panjur",
    seoDescription:
      "Bursa'da panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, uygulama ve teknik destek hizmetleri.",
    keywords: [
      "Bursa panjur",
      "Nilüfer cam balkon",
      "Mudanya sineklik",
      "Osmangazi pimapen",
      "Bursa cam balkon",
    ],
    neighborhoods: ["Nilüfer", "Osmangazi", "Yıldırım", "Mudanya", "Gemlik"],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
