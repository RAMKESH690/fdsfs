import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async';

function Careers() {
  return (
    <div>
    <Helmet>
      <title>Careers | Join Codezion Softwares</title>
      <meta name="title" content="Careers | Join Codezion Softwares"/>
      <meta name="description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="keywords" content="career, career option in it, it jobs, jobs in it company"/>
      <meta property="og:title" content="Careers | Join Codezion Softwares"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/careers"/>
      <meta property="og:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Careers | Join Codezion Softwares"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
      <meta name="robots" content="index, follow" />

    </Helmet>
    {/* ---meta tag end--------- */}
    <Layout/>
      <section className="section-padding subheader-section">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="subheader">
                  <h1>Careers</h1>
                  <span><Link to="/">Home <i className="fa fa-chevron-right"></i></Link> Careers</span>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='section-padding'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="career-deatils">
                <div className='text-center mb-5'>
                <h2 className='fw-600'>Current Openings</h2>
                <p>Feel fulfilled. Have fun. Help us to shape the future.</p>
                </div>
                <div className="career-table table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Minimum Experience</th>
                        <th>Type</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>HR Generalist</th>
                        <td>Jaipur, India.</td>
                        <td>1 years minimum excluding the training period.</td>
                        <td>Full Time</td>
                        <td><button className='btn btn-apply'>Apply Now</button></td>
                     </tr>
                     <tr>
                        <th>PHP Developer</th>
                        <td>Jaipur, India.</td>
                        <td>1 years minimum excluding the training period.</td>
                        <td>Full Time</td>
                        <td><button className='btn btn-apply'>Apply Now</button></td>
                     </tr>
                     <tr>
                        <th>React Native Developer</th>
                        <td>Jaipur, India.</td>
                        <td>1.5 years minimum excluding the training period.</td>
                        <td>Full Time</td>
                        <td><button className='btn btn-apply'>Apply Now</button></td>
                     </tr>
                     <tr>
                        <th>Laravel Developer</th>
                        <td>Jaipur, India.</td>
                        <td>2 years minimum excluding the training period.</td>
                        <td>Full Time</td>
                        <td><button className='btn btn-apply'>Apply Now</button></td>
                     </tr>
                     <tr>
                        <th>International Marketing Executive</th>
                        <td>Jaipur, India.</td>
                        <td>1 years minimum excluding the training period.</td>
                        <td>Full Time</td>
                        <td><button className='btn btn-apply'>Apply Now</button></td>
                     </tr>
                    </tbody>
                  </table>
                    <p className='text-center'>We are always on the lookout for talented folk to join our team. Follow us on <Link to="#">LinkedIn</Link>!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6">
              <div className="career-image">
                <img src="assets/images/career-bg.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-form">
                <form className="row g-3">
                  <div className="col-md-6">
                  <label htmlFor="">Your Name *</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Email address *</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name" />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Your Name *</label>
                    <input type="email" className="form-control" id="inputPassword4" placeholder="Email" />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Phone number</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Mobile No." />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Post *</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Position" />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Resume *</label>
                    <input type="file" className="form-control" id="inputEmail4" placeholder="No File chosen" />
                  </div>
                  <div className="col-12">
                  <label htmlFor="">Message</label>
                    <textarea name="" id="" rows="5" className="outline-0 border-light-subtle rounded-3" placeholder='Your Message'></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn thm-btn text-white rounded-5 btn-lg w-100 px-5">
                      Submit Your Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Careers