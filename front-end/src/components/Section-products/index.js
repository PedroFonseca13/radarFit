import React from 'react';
import Products from '../CardsProducts/Index';
import './Section.css';

export default function SectionProducts() {
  return (
    <section className="section">
      <div className="container">
        <h4>Lista de Produtos</h4>
        <div>
          <Products />
        </div>
      </div>
    </section>
  )
}
