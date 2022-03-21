import React from 'react'
import '../steyls/content.css'

function Content() {
  return (
    <header>
      <nav className="navbar">
       <div className="container">
       <a href="#" className="nav_link">Escape.</a>
        <ul className='nav_list'>
          <li className='nav_item'>
            <a href="#">HOME</a>
          </li>

          <li className='nav_item'>
            <a href="#">Categories</a>
          </li>

          <li className='nav_item'>
            <a href="#">About</a>
          </li>

          <li className='nav_item'>
            <a href="#">Contact</a>
          </li>
        </ul>
       </div>
      </nav>

      <main>
        <div className="container">
          <div className="main_box">
            <h1>Let's do it together.</h1>
            <p>We travel the world in search of stories. Come along for the ride.</p>
            <a href="#">View Latest Posts</a>
          </div>
        </div>
      </main>
    </header>
  )
}

export default Content