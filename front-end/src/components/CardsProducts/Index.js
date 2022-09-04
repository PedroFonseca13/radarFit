import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getAllProducts } from '../../utils/fetchApi';

export default function Index() {
  const [products, setProducts] = useState([]);

  const fetchGetProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    fetchGetProducts();
  });
  return (
    <div>
      { products.map(product => (
        <div className="">
          <h3>{ product.productName }</h3>
          <p>{ product.description }</p>
          <p>R$ { product.valor }</p>
        </div>
      ))
      }
    </div>
  )
}
