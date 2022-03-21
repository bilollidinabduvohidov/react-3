import React from 'react'
import { Link } from 'react-router-dom'
import right from "../img/contact-right.png"
import left from "../img/contact-left.png"
import '../steyls/contact.css'

function Contact() {
  return (
    <main className="contact">
      <div className="container">
        <div className="contact_box">
          <h1>Featured Posts</h1>
        </div>
        <div className="contactPhotos">
          <div className="photo_right">
            <img src={right} alt="" />
          </div>

          <div className="photo_right">
            <img src={left} alt="" />
          </div>
        </div>
        <div className="bootom_link">
            <Link className='gale_link' to="/contact/galereya">Most Recent</Link>
        </div>
      </div>
    </main>
  )
}

export default Contact