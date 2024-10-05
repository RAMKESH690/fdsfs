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
            <div className="col-lg-5">
              <div className="gallery-images">
                <img src="assets/images/gallery/1.png" alt="" />
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="gallery-images">
                    <img src="assets/images/gallery/2.png" alt=""/>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="gallery-images">
                    <img src="assets/images/gallery/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
              <div className="col-lg-6">
                <div className="gallery-images">
                    <img src="assets/images/gallery/4.png" alt="" />
                  </div>
                  <div className="gallery-images">
                    <img src="assets/images/gallery/5.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                    <div className="gallery-images">
                      <img src="assets/images/gallery/6.png" alt="" />
                    </div>
              </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <div className="career-title">
                <h6>OUR CULTURE</h6>
                <h4>United by a shared passion for <br /> technology and a drive to <br /> make an impact</h4>
                <Link to="/contact" className='btn thm-btn text-white rounded-2 px-3 mt-3'>GET IN TOUCH <i className='fa fa-arrow-right'></i></Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="culture border-left">
                <p>At Codezion Softwares Pvt. Ltd., our culture is the heart of everything we do. It’s the force that brings us together, fueling every project and conversation. We believe that collaboration, innovation, and empowerment are the keys to driving success and making a real impact.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i class="fa fa-handshake"></i>
                <h5>Collaboration</h5>
                <p>We bring together diverse talents to create a powerful blend of creativity and teamwork, leading to breakthrough solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i class="fa fa-lightbulb"></i>
                <h5>Innovation</h5>
                <p>We are always pushing the boundaries, thinking outside the box, and developing new ideas to stay ahead in the tech world.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i class="fa fa-hand-holding-heart"></i>
                <h5>Empowerment</h5>
                <p>We equip our team with the tools and freedom to make decisions, empowering them to take ownership and shape the future with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding p-0'>
        <div className="row">
          <div className="col-lg-3 col-md-6 p-0 d-flex align-items-center ">
              <div className="p-5 recruitment-box">
                <div>
                <h3>Recruitment Process</h3>
                <p>We do the hiring process very smoothly. which is completely dependent on the caliber of the condidtae.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/cv.png" alt="" />
              <div className="recuir-title">
                <h2>01</h2>
                <h6>CV Screening</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/interview.png" alt="" />
              <div className="recuir-title">
                <h2>02</h2>
                <h6>Technical Interview</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/hr.png" alt="" />
              <div className="recuir-title">
                <h2>03</h2>
                <h6>HR Round</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding pb-0'>
        <div className="container">
        <div className="join-title text-center">
            <h3 className='py-4'>Why Join Codezion?</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join1.png" alt="" />
                <div className="howkacode-text">
                  <h5>Innovative Projects & Cutting-Edge Technology</h5>
                  <p>Work on exciting projects that push the boundaries of technology. At Codezion, you’ll get hands-on experience with the latest tools and platforms, contributing to dynamic solutions in software development, digital marketing, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join2.png" alt="" />
                <div className="howkacode-text">
                  <h5>Career Growth 
                  </h5>
                  <p>We believe in continuous learning and development. Whether you’re just starting your career or looking to advance your skills, Codezion provides opportunities for growth through mentorship, workshops, certifications, and exposure to new technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join3.png" alt="" />
                <div className="howkacode-text">
                  <h5>Supportive Environment
                  </h5>
                  <p>Codezion fosters a culture of collaboration where your ideas matter. Work alongside talented professionals in a supportive, open-minded atmosphere where everyone is encouraged to share their knowledge and work together towards success.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join4.png" alt="" />
                <div className="howkacode-text">
                  <h5>Global Impact </h5>
                  <p>Join a team that works with clients across the globe, from startups to large enterprises. Our reach spans over 30+ countries, giving you the opportunity to make a real difference in various industries, including e-commerce, IT, and digital marketing.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join5.png" alt="" />
                <div className="howkacode-text">
                  <h5>Flexible Work Culture </h5>
                  <p>We understand the importance of work-life balance. With flexible working hours, remote options, and a results-driven mindset, Codezion ensures you have the freedom to work in a way that suits your lifestyle while maintaining productivity.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join6.png" alt="" />
                <div className="howkacode-text">
                  <h5>Employee Well-being </h5>
                  <p>We care about our team’s well-being. Codezion provides a supportive work environment with wellness programs, team-building activities, and opportunities to relax and recharge.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join7.png" alt="" />
                <div className="howkacode-text">
                  <h5>Recognition & Rewards</h5>
                  <p>Your hard work doesn’t go unnoticed at Codezion. We celebrate achievements and offer performance-based rewards, recognizing our employees’ contributions to the company’s success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-padding'>
        <div className="container">
        <div className="section-headding text-center mb-5">
          <h2>What's your Forte?</h2>
        </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box">
              <img src="assets/images/icons/briefcase.png" alt="" />
                <h6>Business Analyst</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              <img src="assets/images/icons/digital-marketing.png" alt="" />
                <h6>Digital Marketing</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              <img src="assets/images/icons/python.png" alt="" />
                <h6>Python Developer</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              {/* <i className="fab fa-laravel"></i> */}
              <img src="assets/images/icons/web-development.png" alt="" />
                <h6>Larawel Developer</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
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