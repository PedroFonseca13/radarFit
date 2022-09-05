import React from 'react'
import { Link } from 'react-router-dom'


export default function Post() {
  return (
    <div>
      <h1>Post</h1>

      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  )
}
