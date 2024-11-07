import React from 'react'
import { 
  Billing, 
  Business, 
  AboutUs, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
} from './components'
import styles from './style'
import {Helmet} from "react-helmet";


const App = () => {
  const services = [
    { name: "Cam Balkon Sistemleri", content: "Günümüzde evlerin ve iş yerlerinin mimarisine estetik ve fonksiyonellik katan cam balkon sistemleri, kullanıcılara modern ve konforlu bir yaşam alanı sunmaktadır. Cam balkon sistemleri, balkonları dış etkenlerden korurken aynı zamanda mevsim koşullarına uygun olarak kullanılabilmesini sağlar.", keywords: "cam balkon, estetik, fonksiyonellik, balkon sistemleri, modern yaşam alanı" },
    { name: "Alm. Doğrama Seri ve Sistemleri", content: "Alüminyum doğrama sistemleri, estetik ve dayanıklı yapıları sayesinde yapılarda sıklıkla tercih edilen çözümlerden biridir. Kapı, pencere, cephe sistemleri, cam balkonlar ve daha birçok uygulama alanında kullanılan alüminyum doğrama sistemleri, hem iç hem de dış mekanlarda yüksek performans gösterir.", keywords: "alüminyum doğrama, kapı pencere, cephe sistemleri, alüminyum profiller, dayanıklı yapılar, modern mimari, alüminyum sistemler" },
    { name: "PVC Doğrama Sistemleri", content: "PVC doğrama sistemleri, dayanıklı ve uzun ömürlü yapı elemanları olarak kapı, pencere ve diğer doğrama işlemlerinde tercih edilen bir malzeme türüdür. PVC doğrama, ses yalıtımı sağlar ve çevresel etkilere karşı dayanıklıdır.", keywords: "PVC doğrama, ses yalıtımı, çevresel dayanıklılık, uzun ömürlü yapı elemanları, PVC pencere" },
    { name: "Giyotin Cam Sistemleri", content: "Giyotin cam sistemleri, dikey hareket eden cam panellerden oluşan modern bir camlama çözümüdür. Giyotin cam sistemleri, estetik bir görünüm sağlar ve mekana ekstra kullanım alanı kazandırır.", keywords: "giyotin cam, modern camlama, estetik sistemler, dikey cam paneller, cam sistemleri" },
    { name: "Tente & Pergola Sistemleri", content: "Tente ve pergola sistemleri, açık alanların korunması ve konforlu bir yaşam alanı oluşturulması için kullanılan yapısal çözümlerdir. Pergola sistemleri, özellikle daha büyük alanlar için tasarlanmıştır.", keywords: "tente sistemleri, pergola sistemleri, açık alan çözümleri, güneş koruması, modüler yapılar" },
    { name: "Kış Bahçesi", content: "Kış bahçesi, özellikle soğuk havalarda dış mekan keyfini sürdürebilmek için tasarlanan, genellikle cam ve alüminyum profillerden oluşan kapalı bir yaşam alanıdır.", keywords: "kış bahçesi, alüminyum profiller, cam yapılar, dört mevsim kullanım, dış mekan keyfi" },
    { name: "Teras Kapama", content: "Teras kapama, teras alanlarını dış etkenlerden koruyarak dört mevsim kullanıma uygun hale getiren bir yapı sistemidir. Teras kapama sistemleri, cam, alüminyum, ahşap veya polikarbonat malzemelerle yapılır.", keywords: "teras kapama, alüminyum teras, cam kapama, dış etkenlere karşı koruma, modern teras sistemleri" },
    { name: "Ofis Bölme Sistemleri", content: "Ofis bölme sistemleri, çalışma alanlarını daha verimli ve organize bir şekilde kullanmak için uygulanan modüler yapısal çözümlerdir. Çeşitli malzemeler kullanılarak yapılan bu bölme sistemleri, ofis alanlarını bireysel çalışma alanları, toplantı odaları veya sosyal alanlar gibi farklı bölümlere ayırmak için idealdir.", keywords: "ofis bölme, modüler çözümler, alüminyum bölme, cam bölme, ofis yapıları" },
    { name: "Alm. ve Cam Küpeşte", content: "Alüminyum ve cam küpeşte sistemleri, modern yapılarda estetik ve güvenlik sağlayan dayanıklı korkuluk çözümleridir. Alüminyum profillerin cam panellerle birleştiği bu sistemler, balkon, teras, merdiven ve havuz kenarlarında sıklıkla tercih edilir.", keywords: "alüminyum küpeşte, cam küpeşte, güvenlik sistemleri, balkon korkuluğu, estetik küpeşte" },
    { name: "Duşakabin", content: "Duşakabin, banyolarda duş alanını sınırlayarak suyun dışarıya sıçramasını önleyen, kullanımı pratik bir yapı sistemidir. Duşakabinler, estetik bir görünüm sunarken banyo temizliğini ve hijyenini korur.", keywords: "duşakabin, banyo çözümleri, duş sistemi, estetik banyo, pratik duş kabinleri" },
    { name: "Sineklik", content: "Sineklik sistemleri, pencerelere ve kapılara uygulanan, böcekleri dışarıda tutmaya yardımcı olan pratik sistemlerdir. Menteşeli, stor ve sürme sineklik sistemleri mevcuttur.", keywords: "sineklik, menteşeli sineklik, stor sineklik, sürme sineklik, böcek koruma sistemleri" }
];

const additionalKeywords = "alüminyum, alüminyum profil, alüminyum kapı, alüminyum pencere, alüminyum doğrama, alüminyum yapılar, alüminyum sistemleri, alüminyum mimari, dayanıklı alüminyum, alüminyum balkon, alüminyum pergola";

  return (
    <div className='bg-primary w-full overflow-hidden'>
             <Helmet>
            <title>akcamaleminyum</title>
            <meta content="Alüminyum PVC Fiyatları, Alüminyum mu PVC mi ucuz, PVC Alüminyum DOĞRAMA, Alüminyum doğrama fiyatları, PVC Alüminyum Doğrama iş ilanları, Pvc mi alüminyum mu, En iyi alüminyum doğrama markası Alüminyum Doğrama Markaları" name="keywords"></meta>
            <meta name="Author" content=""></meta>
            <meta http-equiv="Content-Language" content="tr"></meta>
            <meta name="description" content="Estetik, fonksiyonel ve dayanıklı yapı çözümleri sunan bir platform. Cam balkon, pergola, giyotin cam sistemleri ve daha fazlası." />
            <meta name="keywords" content={services.map(service => service.keywords).join(', ') + ', ' + additionalKeywords} />
            {services.map((service, index) => (
                <meta key={index} name={`description-${service.name}`} content={service.content} />
            ))}
        </Helmet>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} relative`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <AboutUs/>
         
          <Clients/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App