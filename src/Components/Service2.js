import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import BlogSlider from './BlogSlider'
import { Helmet } from 'react-helmet-async';

function Service2() {
  return (
    <div>
    <Helmet>
      <title>Social Media Marketing Agency | SMM Company</title>
      <meta name="title" content="Social Media Marketing Agency | SMM Company"/>
      <meta name="description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta name="keywords" content="SMM Agency, Social Media Marketing Agency, Social Media Marketing Company"/>
      <meta property="og:title" content="Social Media Marketing Agency | SMM Company"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/SMM"/>
      <meta property="og:description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Social Media Marketing Agency | SMM Company"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
      <meta name="robots" content="index, follow" />

    </Helmet>
      <Layout/>
      <section className="carrier_cont container section-padding pt-0">
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

        <div className="row hero-2 px-5 align-items-center">
          <div className="mt-5 col-lg-6 col-md-6 col-sm-12 divs">
            <img src="assets/images/10.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-2-cont divs">
            <div className="div-1">
              <p className="orange-text">
              Social Media Marketing Services to Boost Your Online Presence
              </p>

              <h3 className="rect-title text-dark fw-bold">Social Media Marketing</h3>
            </div>
            <div className="div-2 mt-5">
              <p className="page-2-desc">
              At Codezion, we help businesses enhance their digital presence with our comprehensive social media marketing services. We combine strategy, creativity, and data-driven solutions to deliver impactful results across leading social platforms. Whether you're looking to increase brand awareness, drive traffic, or engage your audience, our expert team will craft tailored social media campaigns that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pccAdd section-padding">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="main__title text-dark">
              Trusted Social Media Marketing to Elevate Your Business
              </h1>
              <p className="main__desc">
              Our social media services cover a wide range of platforms, including Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest. We specialize in designing customized strategies to meet your business goals, whether it's growing your audience, improving engagement, or maximizing conversions. With Codezion, you get full-service social media solutions that help you stay ahead of the competition.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-mar">
              <img src="assets/images/11.png" alt="" className="rounded-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="campain container-fluid section-padding p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Strategy Development
                </h3>
                <p className="service__desc">
                  Defining the goals, target audience, and approach for a social media marketing campaign.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/8.png" className="box-icon" alt=""/> Content Creation and Management
                </h3>
                <p className="service__desc">
                  Developing and scheduling engaging, relevant content to be posted on social media channels.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Analytics and Optimization
                </h3>
                <p className="service__desc">
                  Measuring the success of a social media marketing campaign and making data-driven adjustments to improve performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services services-second container-fluid section-padding">
        <div className="container main__service px-5">
          <h5 className="text-center orange-text">Our Services</h5>
          <h1 className="text-center title__workflow mb-5">
            What Our Social Media
            <span className="text-dark fw-700"> Marketing Services Include</span>
          </h1>

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/16.png" className="box-icon" alt=""/> Facebook Marketing Services                    </h3>
                    <p className="service__desc">
                    Maximize your brand's reach with our expert Facebook marketing services. We create targeted ad campaigns designed to engage your audience, boost brand visibility, and drive conversions. From strategy development to ad optimization, we help you connect with the right customers and achieve measurable results. Unlock Facebook’s potential to grow your business with Codezion!
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/17.png" className="box-icon" alt=""/> Instagram Marketing Services
                    </h3>
                    <p className="service__desc">
                    Elevate your brand with our tailored Instagram marketing services. We create visually engaging content and strategic ad campaigns to grow your audience, boost engagement, and drive conversions. From posts to stories, we help you connect with your target audience and build lasting brand loyalty. Let Codezion take your Instagram presence to the next level!
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/18.png" className="box-icon" alt=""/> Twitter Marketing Services
                    </h3>
                    <p className="service__desc">
                    Enhance your brand’s visibility with our specialized Twitter marketing services. At Codezion, we craft engaging tweets, leverage trending hashtags, and run targeted ad campaigns to increase your followers and drive engagement. Whether it's building real-time conversations or boosting brand awareness, our strategies help you connect with your audience and grow your business on Twitter. Boost your online presence with Codezion's expert Twitter marketing today!
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/19.png" className="box-icon" alt=""/> LinkedIn Marketing Services
                    </h3>
                    <p className="service__desc">
                    Strengthen your professional network with Codezion’s LinkedIn marketing services. We create targeted B2B campaigns, optimize your company profile, and share industry-relevant content to connect you with key decision-makers. Whether you're looking to generate leads or build brand authority, our LinkedIn strategies help you grow your business and reach the right audience. Elevate your LinkedIn presence with Codezion today!
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/20.png" className="box-icon" alt=""/> YouTube marketing services
                    </h3>
                    <p className="service__desc">
                    Grow your brand with Codezion’s YouTube marketing services. We create engaging video content, optimize your channel for search, and run targeted ad campaigns to reach a wider audience. From boosting views and subscribers to increasing engagement, our strategies help you maximize YouTube’s potential for business growth. Elevate your video marketing with Codezion and drive impactful results today!
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/21.png" className="box-icon" alt=""/> Twitter Marketing Services
                    </h3>
                    <p className="service__desc">
                      Twitter is one of the best platforms to find potential customers and grow business. No matter what type of business you run, we help you boost your business through our best-in-class Twitter marketing services.
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

      <section className="comtainer-fluid ppc-marketing section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ppc-image">
              <img src="assets/images/12.png" alt="" />
            </div>
            <div className="col-lg-6 ppc-clg">

              <h3>
              Why Choose
                <span className="text-dark fw-bold"> Social Media Marketing<br /> for Your Business?</span>
              </h3>

              <p className="text-gray">
              Social media is a powerful tool for connecting with customers, building brand loyalty, and driving business growth. With over 4.2 billion social media users worldwide, it's essential to leverage these platforms to stay competitive. At Codezion, we develop tailored strategies based on your business needs and industry trends to ensure you're reaching the right audience.
              </p>

              <div className="ppc-content-box">
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (4).png" alt="" />

                  <div className="text-box">
                    <h3 className="text-dark fw-bold">Key Benefits:</h3>
                    <h4 className="text-dark fw-bold">Global Reach:</h4>
                    <p className="text-gray">
                      Engage with a vast audience across multiple platforms.
                    </p>
                  </div>
                </div>
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (5).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">Real-Time Interaction:</h4>
                    <p className="text-gray">
                    Communicate directly with your audience, fostering trust and loyalty.
                    </p>
                  </div>
                </div>
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (6).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">Cost-Effective Marketing: </h4>
                    <p className="text-gray">
                    Run targeted campaigns that maximize ROI and deliver measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comtainer-fluid drive-mode section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/13.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Social media Marketing</h5>

              <h3 className="h1-gray">
                Contact Us To Share <br />Your
                <span className="text-dark fw-bold"> Social Media Marketing Requirements</span>
              </h3>

              <p className="text-gray fw-light">
                We target different channels to target multiple platforms to match
                the diversified needs of our clients.
              </p>
              <a class="btn-thm-main learn-more" href="/contact">Contact Now<i class="far fa-angle-double-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pricing-section container-fluid section-padding">
        <div className="container">
          <h4 className="orange-text text-center mb-3">Services Plan</h4>
          <h1 className="h1-gray text-center mb-5">
            Explore Social Media
            <span className="text-dark fw-bold">Advertising Service Plans</span>
          </h1>
          <button className="btn-thm-main abs-btn">
            Elevate your social media advertising with <br />
            plans designed to fit your needs.
          </button>
          <div className="row justify-content-center">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="card" style={{width: '18rem' }}>
                <div className="card-body border-bottom">
                  <h5 className="card-title fw-bold">Lite Plan</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Standard
                    consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> 20% of ad
                    spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Up to 2
                    networks included
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card" style={{width: '18rem' }}>
                <div className="card-body border-bottom">
                  <h5 className="card-title fw-bold">Buisiness Plan</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Standard
                    consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> 20% of ad
                    spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Up to 2
                    networks included
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section> */}

      <section className="container-fluid  section-padding pt-5">
        <div className="container">
          <h1 className="h1-gray text-center">
            Our <span className="text-dark fw-bold">Blogs</span>
          </h1>
          <p className="text-center blog-para">
            Our workflow is simple and well-defined. We as an online advertising
            agency follow multiple steps to create <br /> and deliver the best solutions
            based on the needs of clients. Our steps include
          </p>
          <BlogSlider/>
        </div>
      </section>
      <section className="comtainer-fluid detailed-reporting section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/image 7.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Social Media Marketing</h5>

              <h3 className="h1-gray">
              Detailed Reporting for 
                <span className="text-dark fw-bold"> Data-Driven Success</span>
              </h3>

              <p className="text-gray fw-light">
              At Codezion, we provide comprehensive reports, offering insights into your campaign’s performance. We track essential metrics like engagement, impressions, conversions, and more, so you can see the tangible results of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="comtainer-fluid ppc-marketing section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ppc-image">
              <img src="assets/images/12.png" alt="" />
            </div>
            <div className="col-lg-6 ppc-clg">
              <h5 className="orange-text mb-4">FAQs</h5>

              <h3 className="h1-gray">
                Know about
                <span className="text-dark fw-bold"> The basics Of Digital Marketing.</span>
              </h3>

              <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <i className="fa fa-dot-circle"></i> What is social media marketing?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Social media marketing involves using platforms like Facebook, Instagram, Twitter, LinkedIn, and YouTube to promote your business. It includes creating content, engaging with your audience, and running targeted ad campaigns to increase brand visibility, drive traffic, and boost conversions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <i className="fa fa-dot-circle"></i>Why is social media marketing important for my business?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Social media marketing helps businesses connect directly with their audience, build brand awareness, and drive customer engagement. It offers cost-effective ways to reach a global audience, generate leads, and increase sales through targeted campaigns and real-time interactions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <i className="fa fa-dot-circle"></i>  What’s the difference between organic and paid social media marketing?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse border-0" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Organic social media marketing involves building a following and engaging with users without spending on ads, relying on content quality and audience interaction. Paid social media marketing uses advertising to target specific demographics and achieve quicker, measurable results. A combination of both yields the best results.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <i className="fa fa-dot-circle"></i> What kind of content works best for social media marketing?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Engaging, visual content like images, videos, and infographics typically perform best. Interactive elements such as polls, quizzes, and user-generated content also drive engagement. We create customized content tailored to resonate with your audience and platform.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <i className="fa fa-dot-circle"></i> Which social media platforms are best for my business?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    The best platforms depend on your business goals and target audience. Facebook and Instagram are great for B2C engagement, LinkedIn is ideal for B2B marketing, Twitter helps with real-time communication, while YouTube and Pinterest work well for visual storytelling. We tailor strategies based on your specific needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Service2