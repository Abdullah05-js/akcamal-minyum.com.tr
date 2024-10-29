import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap  gap-3`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-between items-center flex-col   rounded-lg h-60 p-6 feature-card`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] text-gradient xs:leading-[53px] leading-[43px] text-white animate-pulse '>{stat.title}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3 text-center'>{stat.value}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
