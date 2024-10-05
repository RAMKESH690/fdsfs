import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function TestimialSleder() {
    var settings = {
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
        dots: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='row pt-3'>
    <Slider {...settings} className="row testimial-slider">
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Rahul</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            This agency worked closely with our team to deeply understand marketing challenges and opportunities specific to our industry. 
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/1.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Avinash</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            The team's expertise in optimizing our website performance and search visibility through technical SEO allowed us to increase qualified site traffic.
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/2.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Ghanshyam</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            As a B2B startup with a complex data product, their content creators effectively translated our offerings into engaging social media and blog posts focused on targeted buyer education, enhancing our inbound lead gen process.
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/4.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Ritesh</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            After they conducted an insightful website performance audit and revamped our blog strategy, organic traffic has grown by over 15% month to month.
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/3.png" alt="testi" />
          </div>
        </div>
      </div>
    </Slider>
    </div>
  )
}

export default TestimialSleder