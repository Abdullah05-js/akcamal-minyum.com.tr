import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Ak Cam Alüminyum Yapı sistemlerini <br /> Şimdi Deneyimleyebilirsiniz!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kalite ve sürümden ödün vermeme, alüminyumda en iyi çözümler sunuyoruz. İşinizi global ölçekte büyütmek için buradayız.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
