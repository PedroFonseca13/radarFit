import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../utils/fetchApi';
import './Cards.css';

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
        <div className="card-products">
          <h6>{ product.productName }</h6>
          <p>{ product.description }</p>
          <p>R$ { product.valor }</p>
        </div>
      ))
      }
    </div>
  )
}
