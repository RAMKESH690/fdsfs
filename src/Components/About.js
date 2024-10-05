import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
// import PartnerSlider from './PartnerSlider'
import Counter from './Counter'
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us | Best  Coutom Website Development Company</title>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="About Us | Best  Coutom Website Development Company"/>
        <meta name="twitter:site" content="@codezion"/>
        <meta name="twitter:description" content="Discover Codezion Softwares – your trusted partner for custom website development and mobile app solutions. We create tailored, innovative, and user-centric digital experiences to help businesses thrive in the modern world."/>
        <meta name="twitter:image" content="https://www.codezion.com/"/>
        <meta name="twitter:image:alt" content="codezionsoftware"/>

        <meta property="og:title" content="About Us |Best  Coutom Website Development Company" />
        <meta property="og:site_name" content="codezion"/>
        <meta property="og:url" content="https://www.codezion.com/aboutus"/>
        <meta property="og:description" content="Discover Codezion Softwares – your trusted partner for custom website development and mobile app solutions. We create tailored, innovative, and user-centric digital experiences to help businesses thrive in the modern world."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png" />
        <meta name="title" content="About Us | Best  Coutom Website Development Company"/>
        <meta name="description" content="Discover Codezion Softwares – your trusted partner for custom website development and mobile app solutions. We create tailored, innovative, and user-centric digital experiences to help businesses thrive in the modern world."/>
        <meta name="keywords" content="About Us, coustom web development, digital marketing services, mobile app development, web design services"/>

        <link rel="canonical" href="https://www.codezion.com/about"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
    <Layout/>
      {/* ---------------- */}
      <section className='section-padding about-bg-section'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="assets/images/about1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>We Are Codezion </h2>
                <p>Our team of expert developers, designers, and marketers work collaboratively to ensure that your vision is transformed into a seamless, functional, and engaging product. Whether you're looking to develop a cutting-edge mobile application, optimize your website's performance, or implement targeted marketing campaigns, Codezion Softwares has the expertise and creativity to make it happen.</p>              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* ----------- */}
      <section className='section-padding'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="mission-left">
                <h5>Our Mission</h5>
                <p>At Codezion Softwares, our mission is to empower businesses through innovative and customized digital solutions that drive sustainable growth. We are committed to delivering exceptional technology services that help our clients thrive in a competitive digital landscape. By combining cutting-edge technology with a customer-centric approach, we strive to create impactful mobile applications, websites, and marketing strategies that elevate brands and enhance user experiences.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mission-image">
                <img src="assets/images/mission.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mission-right">
                <h5>Our Vision</h5>
                <p>Our vision at Codezion Softwares is to be a global leader in digital innovation, transforming businesses through technology and creativity. We aspire to continuously push the boundaries of what’s possible in mobile app development, web solutions, and digital marketing, creating cutting-edge products and services that enhance business growth and user engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding about-conterback' style={{ backgroundImage: 'url(assets/images/image6d.png)' }}>
        <div className="container">
          <Counter/>
        </div>
      </section>
      {/* ----------- */}
      <section className='section-padding hero__container product-section mt-5'>
        <div className="container  ">
          <div className='row justify-content-center'>
            <div className="col-lg-10">
            <h1 className="text-center title__milestone">Our
            <span className="text-dark fw-bold"> Product</span></h1>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-3 col-sm-6">
              <div className="product-box">
                <div className="product-image">
                  <img src="assets/images/product/1.png" alt="" />
                </div>
                <div className="product-text">
                  <Link to='#'>Godaharidev Jewells</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-box">
                <div className="product-image">
                  <img src="assets/images/product/2.png" alt="" />
                </div>
                <div className="product-text">
                  <Link to=''>Tyresolio</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-box">
                <div className="product-image">
                  <img src="assets/images/product/3.png" alt="" />
                </div>
                <div className="product-text">
                  <Link to='#'>Jewllio</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-box">
                <div className="product-image">
                  <img src="assets/images/product/4.png" alt="" />
                </div>
                <div className="product-text">
                  <Link to='#'>Radhika Garments</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---talk us--- */}
      <section className='section-padding talk-sec'>
        <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="talk-box text-center">
                  <p>At Codezion Softwares we help business build an Intelligently designed digital future. Tell us about your idea, and we'll offer the most fitting  technological solution.</p>
                  <Link to="/contact" className='btn thm-btn rounded-2 px-3 color-white'>TALK TO US</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="assets/images/mission1.png" alt="" />
              </div>
            </div>
        </div>
      </section>
      {/* talk us end */}
      {/* <section className="trusted--sectiona section-padding p-0">    
        <PartnerSlider/>
      </section> */}
      {/* ----- */}
      
      <Footer/>
    </div>
  )
}

export default About