import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <input type="search" placeholder="Search" className="search-input" />
      </div>
    </header>
  )
}

