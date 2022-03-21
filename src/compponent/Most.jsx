import React from 'react'
import '../steyls/most.css'
import foto1 from '../img/IMAGE1.png'
import foto2 from '../img/IMAGE (2).png'
import foto3 from '../img/IMAGE (3).png'
import foto4 from '../img/IMAGE (4).png'
import foto5 from '../img/IMAGE (5).png'
import foto6 from '../img/IMAGE (6).png'
import smil1 from '../img/smil1.png'
import smil2 from '../img/smil2.png'

function Most() {
  return (
      <section>
          <div className="container">
              <div className="section_box">
                  <div className="section_simile_box">
                      <img src={foto1} alt="" />
                      <h1>Still Standing Tall</h1>
                      <p>Life begins at the end of your comfort zone.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil1} alt="" />
                              <h6>William Wong</h6>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>

                  <div className="section_simile_box">
                      <img src={foto2} alt="" />
                      <h1>Sunny Side Up</h1>
                      <p>No place is ever as bad as they tell you it’s going to be.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil2} alt="" />
                              <h6>Mat Vogels</h6>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>

                  <div className="section_simile_box">
                      <img src={foto3} alt="" />
                      <h1>Water Falls</h1>
                      <p>We travel not to escape life, but for life not to escape us.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil1} alt="" />
                              <h6>Mat Vogels</h6>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>

                  <div className="section_simile_box">
                      <img src={foto4} alt="" />
                      <h1>Through the Mist</h1>
                      <p>Travel makes you see what a tiny place you occupy in the world.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil1} alt="" />
                              <h6>William Wong</h6>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>

                  <div className="section_simile_box">
                      <img src={foto5} alt="" />
                      <h1>Awaken Early</h1>
                      <p>Not all those who wander are lost.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil2} alt="" />
                              <h6>Mat Vogels</h6>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>

                  <div className="section_simile_box">
                      <img src={foto6} alt="" />
                      <h1>Try it Always</h1>
                      <p>The world is a book, and those who do not travel read only one page.</p>
                      <hr />
                      <div className="simile">
                          <div className="smil_photos">
                              <img src={smil2} alt="" />
                              <h5>Mat Vogels</h5>
                          </div>
                          <div className="smil_title">
                              <p>9/25/2015</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Most