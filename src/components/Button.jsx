import React from 'react'

const Button = ({ styles }) => {
  return (
    <a href="https://api.whatsapp.com/send?phone=905393577701" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary bg-primary outline-none ${styles} rounded-[10px]`}>
     WhatsApp
    </a>
  )
}

export default Button
