import React from 'react'
import { Link } from 'react-router-dom'
import '../steyls/blog.css'

function Blog() {
  return (
    <nav className="nav_blog">
      <div className="container">
        <ul className='blog_list'>
          <li className='blog_item'>
            <Link to="/" className='blog_link'>Nature</Link>
          </li>

          <li className='blog_item'>
            <Link to="/Contact" className='blog_link'>Photography</Link>
          </li>

          <li className='blog_item'>
            <a className='blog_link' href="#">Relaxation</a>
          </li>

          <li className='blog_item'>
            <a className='blog_link' href="#">Vacation</a>
          </li>

          <li className='blog_item'>
            <a className='blog_link' href="#">Travel</a>
          </li>

          <li className='blog_item'>
            <a className='blog_link' href="#">Adventure</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Blog