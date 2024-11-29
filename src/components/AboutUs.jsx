import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const AboutUs = () => {

  return (
    <section className={layout.section} id='about us'>

      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>2005 yılında temelleri atılan <br className='sm:block hidden'/>AK CAM ALÜMİNYUM;</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          
         cam balkon, alüminyum doğrama, giyotin, silikonlu cam cephe, alüminyum pencere kapı sistemleri, kış bahçesi ,sineklik, açılır kapanır pergole, hareketli kupeşte, panjur ve gibi sektörümüzde her türlü beklentiye yönelik ürün ve sistemler sunmaktayız..
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default AboutUs
