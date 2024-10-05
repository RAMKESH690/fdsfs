import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function BannerSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
    <div className='banner-slide'>
        <Slider {...settings} className="responsive banner-slider">
          <div className="g-0">
            <img src="assets/images/banner/1.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">Mobile App Design</h5>
                <p>Multi restaurant mobile app</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-axotil.jpg (1).png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">Web App Design</h5>
                <p>Multi restaurant mobile app</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-setu.jpg.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">UI/UX Design</h5>
                <p>Multi restaurant mobile app</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-axotil.jpg.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">SEO Optimization</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
          <img src="assets/images/banner/2.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">App Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
          <img src="assets/images/banner/3.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">App Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-axotil.jpg.png" alt="" />
            <div className="content-box-2 mt-2 px-4 ">
              <h5 className="slider-title fw-bold">App Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-axotil.jpg (1).png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">App Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-comiida.jpg.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">Web Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
          <div className="g-0">
            <img src="assets/images/slide-setu.jpg.png" alt="" />
            <div className="content-box-2 mt-4 px-4 ">
              <h5 className="slider-title fw-bold">App Design</h5>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
          </div>
        </Slider>
    </div>
  )
}

export default BannerSlider