import React from 'react'
import '../steyls/footer.css'

function footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer_box">
                <h1>Stay in Touch</h1>
            </div>
            <div className="footer_input">
                <input placeholder='Enter your email address' className='input' type="search" />
                <input className='submit' type="submit" />
            </div>
        </div>
        <div className="footer_flex">
            <div className="container">
                <a href="/">
                    <h1 className='footer_text'>Escape.</h1>
                </a>
                <div className="footer_links">
                    <a href="#">Home</a>
                    <a href="#">Categories</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer