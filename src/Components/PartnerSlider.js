import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


function PartnerSlider() {
    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              arrows: false,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
    <div className="container">
      <div className="clientel mt-0">
        <Slider {...settings} className="center partner-slider">
          <div className="partner-image">
            <img src="assets/images/product/partner1.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner2.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner3.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner4.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner5.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner2.png" alt="" />
          </div>
          <div className="partner-image">
             <img src="assets/images/product/partner3.png" alt="" />
          </div>
        </Slider>
      </div>
      </div>
    </div>
  )
}

export default PartnerSlider