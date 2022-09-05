import React from 'react'
import { Link } from 'react-router-dom'

export default function Feed() {
  return (
    <div>
      <h1>Feed</h1>

      <Link to='/post'>
        <button>Add new post</button>
      </Link>
    </div>
  )
}
