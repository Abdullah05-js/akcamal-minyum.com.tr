import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import CustomCarousel from "./CustomCarousel";
import styles from "../style";
import { products } from "../constants";

const Products = () => {
    const [data,setData] = useState(products)
    const navigate = useNavigate();
     const params = useParams().id;

const ReturnImg = data.filter((urun) => {
    return urun.id == params
})



    return (
        <div className='bg-primary w-full h-screen flex flex-col justify-center items-center'>
         
         <div className="flex sm:flex-row flex-col justify-start  items-center w-full">
            
         <button onClick={()=>navigate("/")}  className={`py-4 px-6   font-poppins font-medium   text-blue-400 outline-none  rounded-xl`}>
                {"< Geri Dön"} 
             </button>

             
         </div>
         <h1 className={`font-poppins font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px]  text-blue-400`}>{ReturnImg[0].name}</h1>
            
         <CustomCarousel>
        {ReturnImg[0].img.map((image, index) => {
          return <img key={index} src={image}   />;
        })}
      </CustomCarousel>

        <p className={`${styles.paragraph} ${styles.padding} flex justify-center items-center  text-white`}>
        {ReturnImg[0].content}
    
        </p>



        </div>
    );
}

export default Products;
