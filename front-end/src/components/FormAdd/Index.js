import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import './FormAdd.css';

export default function FormAdd() {
  return (
    <div className="container">
      <div className="form-add">
        <h3>Produtos</h3>

        <FaPlusCircle className="icon-plus" />
      </div>
      <hr />
    </div>
  )
}

