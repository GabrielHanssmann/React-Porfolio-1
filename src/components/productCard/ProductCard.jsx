import React from 'react'
import './ProductCard.css'


const ProductCard = ({ img, link}) => {
  return (
    <div className='p'>
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_black" rel='noreferrer'>
          <img className='p-img' 
          src={img} 
          alt="" />
        </a>
    </div>
  )
}

export default ProductCard