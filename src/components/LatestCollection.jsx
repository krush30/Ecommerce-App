import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts , setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere ducimus veniam voluptate quibusdam iusto, unde doloribus assumenda nemo deleniti commodi optio dolorem atque fugiat fuga distinctio esse ipsa delectus?
            </p>
        </div>
        {/* Showing products */}
      
    </div>
  )
}

export default LatestCollection