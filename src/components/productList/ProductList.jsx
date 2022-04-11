import React from 'react';
import ProductCard from '../productCard/ProductCard';
import './ProductList.css'
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-text">
      <h1 className="pl-title">Create & inspire. It's me! Mario!</h1>
        <p className="pl-desc">
          Mario is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (
          <ProductCard 
          key={item.id}
          link= {item.link}
          img = {item.img}/>
        ))}
        
      </div>
    </div>
  )
}

export default ProductList;