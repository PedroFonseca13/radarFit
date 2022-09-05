import React from 'react'
// import { useFetch } from '../../hooks/useFetch';
import { FaPlusCircle } from 'react-icons/fa';
import './FormAdd.css';

export default function FormAdd() {
  return (
    <div className="container">
      <div className="form-add">
        <h3>Produtos</h3>

        <FaPlusCircle className="icon-plus" />
        <form action="http://localhost:3000/products" method="post">
          <input name="productName" type="text" value="me" placeholder="Product Name" />
          <input name="description" type="text" placeholder="Description" />
          <input name="valor" type="number" placeholder="Valor" />
          <button>Envie meus cumprimentos</button>
        </form>
      </div>
      <hr />
    </div>
  )
}
