import React from 'react'
import styles from '../style'
import {  SosyalMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col  border-t-[1px] border-t-[#3F3E45]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col md:justify-between md:items-center mb-8 w-full`}>
      
              <div className='w-full flex justify-between items-center md:flex-col flex-col gap-4 pt-6 '>
              <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
                2024 AK CAM ALÜMİNYUM. Tüm Haklar Saklıdır.
              </p>  
              <div className='flex flex-row md:mt-0 mt-6'>
                {SosyalMedia.map((social, index) => (
                  <img
                    src={social.icon}
                    key={social.id}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== SosyalMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                  />
                ))}
              </div>    
         </div>
      </div>
   
    </section>
  )
}

export default Footer
