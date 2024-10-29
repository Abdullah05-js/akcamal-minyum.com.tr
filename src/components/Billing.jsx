import React,{useState} from 'react'
import  { layout } from '../style'
import { Urun } from '../assets'
import { useNavigate } from 'react-router-dom'
import { products } from '../constants'
const Billing = () => {
  const navigate = useNavigate();
  const [List,setList] = useState(products)

  const ReturnList = List.map((urun,index) =>{
    return <div onClick={() => navigate(`/urun/${urun.id}`)} key={index} className='flex flex-col border-2 border-teal-200 rounded-md hover:shadow-lg hover:shadow-teal-400 hover:translate-y-2 transition duration-300 ease-in-out justify-between items-center'><img src={urun.img[0]} className='object-cover w-[500px]  h-[500px]' alt="urunler" /> <h1 className='font-bold text-lg text-center text-white shadow-md p-4 uppercase rounded-xl w-full '>{urun.name}</h1></div>
  })
  return (
    <section id='product' className={layout.sectionReverse}>
      {ReturnList}
    </section>
  )
}

export default Billing
