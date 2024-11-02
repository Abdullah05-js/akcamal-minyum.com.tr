import React from 'react'

import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5653121701935!2d29.41022537613642!3d40.79356963261784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf86856f32e5%3A0x684f0bbb8b0b3563!2sOsman%20Y%C4%B1lmaz%2C%20Bahariye%20Cd.%20No%3A31%20D%3AE%2C%2041400%20Gebze%2FKocaeli!5e0!3m2!1str!2str!4v1730402243181!5m2!1str!2str"  height="450" className='w-full rounded-lg'  loading="lazy" ></iframe>      </div>
    </section>
  )
}

export default Clients
