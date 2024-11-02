import { 
  facebook, 
  instagram, 
  linkedin, 
  twitter,  
  send, 
  shield, 
  star,
Data,
Urun,
Alm1,Alm2,AlmD1,ALMK1,ALMK2,ALMK3,CamB1,CamB2,DusK1,DusK2,Giyo1,Giyo2,Giyo3,kisB1,kisB2,kisB3,OfisB1,OfisB2,OfisB3,Pegola,PvcD,Tente1,Tente2,TerasK1,TerasK2,TerasK3,
} from "../assets";


export const products = [
  {img:[Alm1, Alm2],name:"ALM CAM KÜPEŞTE",id:0,content:""},
  {img:[AlmD1],name:"ALM DOĞRAMA",id:1,content:""},
  {img:[ALMK1,ALMK2,ALMK3],name:"ALM KÜPEŞTE",id:2,content:""},
  {img:[CamB1,CamB2],name:"CAM BALKON",id:3,content:""},
  {img:[DusK1,DusK2],name:"DUŞAKABİN",id:4,content:""},
  {img:[Giyo1,Giyo2,Giyo3],name:"GİYOTİN",id:5,content:""},
  {img:[kisB1,kisB2,kisB3],name:"KIŞ BAHÇESİ",id:6,content:""},
  {img:[OfisB1,OfisB2,OfisB3],name:"OFİS BÖLME",id:7,content:""},
  {img:[Pegola],name:"PEGOLA",id:8,content:""},
  {img:[PvcD],name:"PVC DOGRAMA",id:9,content:""},
  {img:[Tente1,Tente2],name:"TENTE",id:10,content:""},
  {img:[TerasK1,TerasK2,TerasK3],name:"TERAS KAPATMA",id:11,content:""}
]

export const navLinks = [
  {
    id: "home",
    title: "AnaSayfa",
  },
  {
    id: "features",
    title: "Hizmetlermiz",
  },
  {
    id: "product",
    title: "Ürünler",
  },
  {
    id: "about us",
    title: "Hakkımızda",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Müşteri Odaklı Hizmet",
    content:
      "Müşterilerimizin beklentilerini karşılamayı, şikâyetlerini etkin şekilde ele almayı ve müşteri memnuniyetini arttırmayı planlıyoruz.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Yasal Süreç",
    content:
      "Tüm faaliyetlerimizi; ISO 9001, ISO 14001, ISO 45001, ISO 10002 standartlarının ulusal ve uluslararası yasal mevzuat şartlarına ve diğer şartlara uygun olarak yürütüyoruz.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Süreç Yönetimi",
    content:
      "Riskleri ve fırsatları etkin şekilde yöneterek tüm süreçlerimizi sürekli iyileştiriyoruz",
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "TEKNOLOJİ",
    value: "kuruluşundan bugüne, tüm teknolojik gelişmeleri takip ederek, en ekonomik, fonksiyonel ve en estetik çözümleri müşteri memnuniyeti ile buluşturmayı amaç edinmiştir.",
  },
  {
    id: "stats-2",
    title: "KALİTE YÖNETİMİ",
    value: "Standartların gerekliliklerine uyarak, bu doğrultuda hedefler oluşturmayı, gerekli kaynakları temin etmeyi, tüm çalışanlarımızın katılımı ile uygulamayı ve sürekli gelişmeyi taahhüt ediyoruz.",
  },
  {
    id: "stats-3",
    title: "ÇEVRE DEĞERLERİ",
    value: "   Küresel ısınma ve iklim değişikliği konusunda duyarlı olup tedbirler alıyoruz. İş Güvenliği Risklere karşı çalışanlarımızı ve ilgili kişileri eğitiyoruz ve denetliyoruz.",
  },
];



export const SosyalMedia = [
  {
    id: "SosyalMedia-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "SosyalMedia-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "SosyalMedia-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "SosyalMedia-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo:Data,
  },
  {
    id: "client-2",
    logo:Data,
  },
  {
    id: "client-3",
    logo:Data,
  },
  {
    id: "client-4",
    logo:Data,
  },
];


