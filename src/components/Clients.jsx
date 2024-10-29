import React from 'react'

import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7184.1008343679005!2d29.410596771828455!3d40.79407502143634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadfa50a6b8451%3A0x1043022034ebd3e6!2sVip%20concept%20Gebze!5e0!3m2!1str!2str!4v1730143306255!5m2!1str!2str" className='w-full rounded-lg' height="450"   loading="lazy" ></iframe>
      </div>
    </section>
  )
}

export default Clients
