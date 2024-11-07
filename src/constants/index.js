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
Alm1,cam,cam1,Alm2,AlmD1,ALMK1,ALMK2,ALMK3,CamB1,CamB2,DusK1,DusK2,Giyo1,Giyo2,Giyo3,kisB1,kisB2,kisB3,OfisB1,OfisB2,OfisB3,Pegola,PvcD,Tente1,Tente2,TerasK1,TerasK2,TerasK3,sineklik,sineklik1,CamB0
} from "../assets";



export const products = [
  { id: 0, name: "Cam Balkon Sistemleri", img: [CamB1,cam,CamB0, CamB2], content: "Günümüzde evlerin ve iş yerlerinin mimarisine estetik ve fonksiyonellik katan cam balkon sistemleri, kullanıcılara modern ve konforlu bir yaşam alanı sunmaktadır. Cam balkon sistemleri, balkonları dış etkenlerden korurken aynı zamanda mevsim koşullarına uygun olarak kullanılabilmesini sağlar." },
    { id: 1, name: "Alm. Doğrama Seri ve Sistemleri", img: [AlmD1,cam1], content: "Alüminyum doğrama sistemleri, estetik ve dayanıklı yapıları sayesinde yapılarda sıklıkla tercih edilen çözümlerden biridir. Kapı, pencere, cephe sistemleri, cam balkonlar ve daha birçok uygulama alanında kullanılan alüminyum doğrama sistemleri, hem iç hem de dış mekanlarda yüksek performans gösterir. Modern mimaride de sıkça kullanılan bu sistemler, yapıya değer katarken aynı zamanda işlevsel avantajlar sunar." },
    { id: 2, name: "PVC Doğrama Sistemleri", img: [PvcD], content: "PVC doğrama sistemleri, dayanıklı ve uzun ömürlü yapı elemanları olarak kapı, pencere ve diğer doğrama işlemlerinde tercih edilen bir malzeme türüdür. Polivinil klorür (PVC) kullanılarak üretilen bu sistemler, özellikle yüksek ısı yalıtımı ve düşük bakım gereksinimi ile bilinir. PVC doğrama, ses yalıtımı sağlar ve çevresel etkilere karşı dayanıklıdır, bu nedenle binaların iç ve dış mekanlarında sıkça tercih edilir. Hafif, estetik ve çeşitli renk seçenekleri sunan PVC doğramalar, montaj kolaylığı ve çevre dostu özellikleriyle öne çıkar." },
    { id: 3, name: "Giyotin Cam Sistemleri", img: [Giyo1, Giyo2, Giyo3], content: "Giyotin cam sistemleri, dikey hareket eden cam panellerden oluşan modern bir camlama çözümüdür. Genellikle motorlu ve otomatik olarak kontrol edilen bu sistem, özellikle restoran, kafe, balkon, teras ve ofislerde kullanılır. Giyotin cam sistemlerinde cam paneller yukarı veya aşağı doğru hareket eder ve gerektiğinde tamamen açılarak açık hava hissi verir ya da kapanarak iç mekanı rüzgar, yağmur ve diğer dış etkenlerden korur. Hem estetik bir görünüm sağlar hem de mekana ekstra kullanım alanı kazandırır. Kolay kullanımı, ısı ve ses yalıtımı sağlaması gibi avantajlarıyla giyotin cam sistemleri, modern mimaride giderek daha fazla tercih edilmektedir." },
    { id: 4, name: "Tente & Pergola Sistemleri", img: [Tente1, Tente2, Pegola], content: "Tente ve pergola sistemleri, açık alanların korunması ve konforlu bir yaşam alanı oluşturulması için kullanılan yapısal çözümlerdir. Tente sistemleri, özellikle güneş, yağmur gibi hava koşullarından korunmak amacıyla kullanılabilen açılır-kapanır ya da sabit özellikteki gölgeleme sistemleridir. Genellikle teras, balkon, kafe ve restoranlarda tercih edilir. Tente sistemleri manuel ya da motorlu olarak kullanılabilir ve geniş renk, kumaş ve desen seçenekleri sunar.<br/>Pergola sistemleri ise, genellikle daha büyük açık alanları kapsayan, kışın ve yazın kullanılabilir modüler yapılar olarak öne çıkar. Özellikle motorlu, katlanır ya da açılır kapanır özellikte olan pergola sistemleri, dayanıklı alüminyum veya ahşap malzemelerden yapılır ve su geçirmez kumaşlarla kaplanabilir. Hem şık hem de fonksiyonel bir çözüm sunan tente ve pergola sistemleri, açık alanları dört mevsim konforlu bir şekilde kullanılabilir hale getirir." },
    { id: 5, name: "Kış Bahçesi", img: [kisB1, kisB2, kisB3], content: "Kış bahçesi, özellikle soğuk havalarda dış mekan keyfini sürdürebilmek için tasarlanan, genellikle cam ve alüminyum profillerden oluşan kapalı bir yaşam alanıdır. Bu sistem, teras, balkon, bahçe gibi alanlara uygulanarak dört mevsim kullanılabilir hale getirir. Kış bahçesi, dış etkenlere karşı koruma sağlarken doğal ışık alır ve açık hava hissini korur. Isıtma sistemleri ile desteklenerek konforlu bir alan sunar ve hobi alanı, dinlenme odası, bitki yetiştirme alanı veya ekstra yaşam alanı gibi farklı amaçlarla kullanılabilir. Estetik ve fonksiyonel yapısıyla kış bahçesi, modern evlerde popüler bir çözüm olarak öne çıkar." },
    { id: 6, name: "Teras Kapama", img: [TerasK1, TerasK2, TerasK3], content: "Teras kapama, teras alanlarını dış etkenlerden koruyarak dört mevsim kullanıma uygun hale getiren bir yapı sistemidir. Teras kapama uygulamaları, genellikle cam, alüminyum, ahşap veya polikarbonat malzemelerle yapılır ve terasın mimarisine uyum sağlayacak şekilde tasarlanır. Kapama sistemi sayesinde teras, yağmur, kar, rüzgar gibi hava koşullarından etkilenmez ve konforlu bir yaşam alanına dönüşür. Teras kapama sistemleri, katlanır veya sürgülü camlar, tente ve pergola gibi seçeneklerle desteklenebilir ve gerektiğinde açılarak açık alan keyfi sunar. Böylece, teras alanları hem estetik hem de işlevsel bir hale gelir." },
    { id: 7, name: "Ofis Bölme Sistemleri", img: [OfisB1, OfisB2, OfisB3], content: "Ofis bölme sistemleri, çalışma alanlarını daha verimli ve organize bir şekilde kullanmak için uygulanan modüler yapısal çözümlerdir. Çeşitli malzemeler kullanılarak yapılan bu bölme sistemleri, ofis alanlarını bireysel çalışma alanları, toplantı odaları veya sosyal alanlar gibi farklı bölümlere ayırmak için idealdir. Cam, alüminyum, ahşap, alçıpan ve PVC gibi malzemelerle yapılabilen bölme sistemleri, ofis içinde hem şeffaflık hem de mahremiyet sağlar." },
    { id: 8, name: "Alm. ve Cam Küpeşte", img: [ALMK1, ALMK2, ALMK3, Alm1, Alm2], content: "Alüminyum ve cam küpeşte sistemleri, modern yapılarda estetik ve güvenlik sağlayan dayanıklı korkuluk çözümleridir. Alüminyum profillerin cam panellerle birleştiği bu sistemler, balkon, teras, merdiven ve havuz kenarlarında sıklıkla tercih edilir. Cam küpeşteler, panoramik bir görüş alanı sunarken minimal ve şık bir görünüm sağlar; alüminyum profiller ise hafif ve dayanıklı yapısıyla uzun ömürlü kullanım sunar." },
    { id: 9, name: "Duşakabin", img: [DusK1, DusK2], content: "Duşakabin, banyolarda duş alanını sınırlayarak suyun dışarıya sıçramasını önleyen, kullanımı pratik bir yapı sistemidir. Genellikle temperli cam veya akrilik panellerden üretilen duşakabinler, estetik bir görünüm sunarken banyo temizliğini ve hijyenini korumaya da yardımcı olur. Farklı model seçenekleri ile duşakabinler, banyoların boyutlarına ve kullanıcı tercihine göre sürgülü, menteşeli veya katlanır kapaklı olarak tasarlanabilir." },
    { id: 10, name: "Sineklik", img: [sineklik1,sineklik], content: "Var olan PVC pencere veya kapıların dış tarafından uygulanarak kullanılırlar. Pratik, menteşeli, stor ve sürme sineklik sistemleri vardır. Narin sistemler olduklarından, kullanılmasında hassasiyet gerektirirler. Pratik ve menteşeli sineklik sistemlerinin yılın belli dönemlerinde sökülüp takılabilmesi mümkündür. Sökülüp-takılma veya kullanım kolaylığı bakımından en avantajlı sistem stor sineklik sistemleridir." }
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
    link: "https://www.instagram.com/akcamaluminyum/",
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


