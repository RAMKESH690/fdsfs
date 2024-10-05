import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Layout from './Layout';
import BannerSlider from './BannerSlider';
import IndustrySlider from './IndustrySlider';
import TestimialSleder from './TestimialSleder';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Digital Marketing Service | App Development Company</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Digital Marketing Service | App Development Company" />
        <meta name="twitter:site" content="@codezion" />
        <meta name="twitter:description" content="Codezion is a leading top mobile app development and digital marketing company in India, that offers custom Android apps and comprehensive digital marketing solutions." />
        <meta name="twitter:image" content="https://www.codezion.com/" />
        <meta name="twitter:image:alt" content="codezionsoftware" />

        <meta property="og:title" content="Digital Marketing Service | App Development Company" />
        <meta property="og:site_name" content="codezion" />
        <meta property="og:url" content="https://www.codezion.com/" />
        <meta property="og:description" content="Codezion is a leading top mobile app development and digital marketing company in India, that offers custom Android apps and comprehensive digital marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png" />

        <meta name="title" content="Digital Marketing Service | App Development Company" />
        <meta name="description" content="Codezion is a leading top mobile app development and digital marketing company in India, that offers custom Android apps and comprehensive digital marketing solutions." />
        <meta name="keywords" content="mobile app developement company, digital marketing company, web development company, website speed optimization" />

        <link rel="canonical" href="https://www.codezion.com/"/>
        <meta name="robots" content="index, follow" />
      </Helmet>

    <Layout/>
  <section className="carrier_cont container-fluid section-padding pt-0">
    <div className="container">
      <div className="row tag_row">
        <div className="col-lg-12 tags_main">
          <span className="tag__name">I'm Looking For : </span>
          <div className="tag-column">
          <span className="tags">Graphic Designer <i className="far fa-angle-double-right"></i></span>
          <span className="tags">Full stack developer <i className="far fa-angle-double-right"></i></span>
          <span className="tags">React Developer <i className="far fa-angle-double-right"></i></span>
          <span className="tags">All <i className="far fa-angle-double-right"></i></span>
          </div>
        </div>
      </div>
    </div>

    <div className="container  hero__container pt-5">
      <div className="row">
        <div className="col-lg-12 col-sm-10 px-5">
          <h5 className="subtitle text-body-tertiary fw-semibold">IT EXPERTS</h5>
          <h1 className="her__title">   
          Transforming <span className="dark_font"> Ideas </span> into
            <span className="dark_font"> Innovative </span> Digital Solutions.
          </h1>

          <Link to="/contact" className="btn btn-lg btn-rounded px-3 y-2 bg-white about-btn fw-bold">
            Contact Us <img src="assets/images/arrow-dark.svg.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
    <div className="row slide-home">
      <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <BannerSlider/>
      </div>
    </div>
  </section>

  <section className="section-padding workflow-cont pt-0">
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-9">
          <div className="workflow-hedding">
            <h1 className="text-center title__workflow">
              Our
              <span className="text-dark fw-700"> Workflow</span>
            </h1>
            <p className="text-center w-75 m-auto mb-5 text-tertiary fw-600">
              Our workflow is simple and well-defined. We as an online
              advertising agency follow multiple steps to create and deliver
              the best solutions based on the needs of clients. Our steps
              include
            </p>
          </div>
        </div>
      </div>
      <div className="row jiop" style={{backgroundColor: '#d6fcff', borderRadius: '10px' }}>
        <div className="col-lg-3 col-md-6 col-sm-6 text-center">
          <div className="work-top-bg-color"></div>
          <div className="workflow-card-detail">
            <div className="workflow-image">
              <img src="assets/images/Frame 16.png" alt=''/>
            </div>
            <h6>Requirement Gathering</h6>
            <p>
              We first gather your digital marketing requirements. Gather
              details about your business, target audience, market, goal, etc.
            </p>
          </div>
          <div className="workflow-number">
            <h2 className="mt-2">01</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 text-center">
          <div className="workflow-number">
            <h2 className="mt-2">02</h2>
          </div>
          <div className="workflow-card-detail bo-redus">
            <p>
              After gathering every necessary detail related to your business
              and requirements, we create a unique digital marketing strategy
              for you.
            </p>
            <h6>Create Strategy</h6>
            <div className="workflow-image">
              <img src="assets/images/Frame 16 (1).png" alt=''/>
            </div>
          </div>
          <div className="work-top-bg-color"></div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 text-center">
          <div className="work-top-bg-color"></div>
          <div className="workflow-card-detail">
            <div className="workflow-image">
              <img src="assets/images/Frame 16 (2).png" alt=''/>
            </div>
            <h6 className="mt-2">Promote</h6>
            <p>
              Once we create the digital marketing strategy for your business,
              we implement it and promote your brand and services on the
              desired platforms.
            </p>
          </div>
          <div className="workflow-number">
            <h2 className="mt-2">03</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 text-center">
          <div className="workflow-number">
            <h2 className="mt-2">04</h2>
          </div>
          <div className="workflow-card-detail bo-redus">
            <div className="workflow-image">
              <img src="assets/images/Frame 16 (3).png" alt=''/>
            </div>
            <h6>Reporting</h6>
            <p>
              We gather the analytic tool to access each important detail
              related to your digital marketing campaign and send a detailed
              report to you.
            </p>
          </div>
          <div className="work-top-bg-color"></div>
        </div>
      </div>
    </div>
  </section>
{/* <!-- ---------- Marketing Services ------------- --> */}
  <section className="container-fluid marketing section-padding">
    <div className="container px-lg-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h3 className="subtitle">Digital Marketing Services</h3>
          <h1 className="main__title">   
            Grow Your <span className="font_dark">Business </span> with the Best
            <span className="font_dark"> Digital Marketing Agency </span>
          </h1>
          <p className="main__desc">
          Boost your brand with Codezion's expert digital marketing services. From SEO to social media, we deliver tailored solutions for maximum online growth!
          </p>

          <Link to="/digital-marketing-services" className="btn-thm-main learn-more">
            Learn More <i className="far fa-angle-double-right"></i>
          </Link>
        </div>
        <div className="col-lg-6 col-sm-12 img-mar">
          <img src="assets/images/image 4.png" alt="" className="rounded-5" />
        </div>
      </div>
    </div>
  </section>

  {/* ---------- */}
  <section className="services container-fluid section-padding">
    <div className="container main__service px-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/1.png" className="box-icon" alt=""/> Digital Marketing
                </h3>
                <p className="service__desc">
                Improve your online presence with our customized digital marketing solutions. From SEO strategies to social media campaigns, we optimize your brand for digital success.
                </p>

                <Link to="/digital-marketing-services" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/2.png" className="box-icon" alt=""/>PHP Development
                </h3>
                <p className="service__desc">
                Empower your web applications with robust PHP development. Our expert team provides scalable, secure, high-performance solutions per your business needs.
                </p>

                <Link to="/social-media-marketing" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/3.png" className="box-icon" alt=""/>Web Development
                </h3>
                <p className="service__desc">
                Create visually attractive and fully functional websites with our web development expertise. We turn ideas into engaging digital experiences for your audience.

                </p>

                <Link to="/digital-marketing-services" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/4.png" className="box-icon" alt=""/> Mobile App Development
                </h3>
                <p className="service__desc">
                Transform your ideas into dynamic mobile applications. Our skilled developers create user-friendly, feature-rich apps for iOS and Android platforms.

                </p>

                <Link to="" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/5.png" className="box-icon" alt=""/> Magento Development
                </h3>
                <p className="service__desc">
                Use the power of e-commerce with Magento development. We build scalable and efficient online stores for your business, from customization to optimization.
                </p>

                <Link to="/online-reputation-management-service" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/6.png" className="box-icon" alt=""/> Shopify Development
                </h3>
                <p className="service__desc">
                Establish your online store with Shopify development. Our expert designers and developers provide visually appealing, user-friendly e-commerce solutions.

                </p>

                <Link to="" className="service__link">
                  Learn more <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <section className="choose__us section-padding pt-0">
    <div className="container__choose__us pl-5 pr-0">
      <div className="row">
        <div className="col-lg-2 lm"></div>

        <div className="col-lg-3 con">
          <h1 className="choose__title">
            Why <span className="text-dark fw-bold">Choose Us</span>
          </h1>
          <p>
            Codezion is a finest platform which is provides the best solution
            to your Information technological issues.
          </p>

          <div className="choose__us__content">
            <div className="para-1">
              <h3>Solid Team Work <i className="fa fa-chevron-right"></i></h3>
              <p>
                Codezion, work with the team member of the well trained
                professionals who are very talented and well Skilled
              </p>
            </div>
            <div className="para-2">
              <h3>Cost Effective <i className="fa fa-chevron-right"></i></h3>
              <p>
                Codezion provides the best result of the work with the very
                affordable and reliable price manner.
              </p>
            </div>
            <div className="para-3">
              <h3>Commitment To Work <i className="fa fa-chevron-right"></i></h3>
              <p>
                Work of Codezion is just an award-wining performance to which
                the Codezion ensure it with the quality work and according to
                the customer’s choice with the desire result.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 slider__choose__us im">
          <div className="container">
            <ChooseusSlider/>
          </div>
        </div>
      </div>
    </div>
  </section> */}

  
  <IndustrySlider/>
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
  {/* ---testimonial--- */}
  <section className='section-padding services  mt-0 testimonial-section p-0'>
    <div className="container">
    <h1 className="text-center title__milestone">Our
    <span className="text-dark fw-bold"> Testimonials</span></h1>
    <TestimialSleder/>
    </div>
  </section>
  {/* testimonial end */}
  {/* <section className="trusted--sectiona section-padding p-0">    
    <PartnerSlider/>
  </section> */}
  {/* <!-- =============== Section Form ===================== --> */}
  {/* footer */}
  <Footer/>
    </div>
  )
}

export default Home