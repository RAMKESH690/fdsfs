import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function IndustrySlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 500,
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
    <div>
    <section className="container-fluid indus section-padding">
    <div className="indus-text">
      <h1 className="text-indus">INDUSTRIES</h1>
    </div>
    <Slider {...settings} className="row industry-slider">
      <div className="industry-box">
        <div className="industries-sec">
          <div className="industries-sec-text text-center">
            <h5>Real Estate</h5>
            <div className="content-industry">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minus numquam eos veniam soluta, nobis officia modi qui rerum
                dolore dignissimos ab ducimus debitis quos, quibusdam
                repellendus aut sunt amet tenetur.
                <span className="orange-text d-block mt-3">Read More <i className="fa fa-chevron-right"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-box">
        <div className="industries-sec">
          <div className="industries-sec-text text-center">
            <h5>Education</h5>
            <div className="content-industry">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minus numquam eos veniam soluta, nobis officia modi qui rerum
                dolore dignissimos ab ducimus debitis quos, quibusdam
                repellendus aut sunt amet tenetur.

                <span className="orange-text d-block mt-3">Read More <i className="fa fa-chevron-right"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-box">
        <div className="industries-sec">
          <div className="industries-sec-text text-center">
            <h5>Health Care</h5>
            <div className="content-industry">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minus numquam eos veniam soluta, nobis officia modi qui rerum
                dolore dignissimos ab ducimus debitis quos, quibusdam
                repellendus aut sunt amet tenetur.

                <span className="orange-text d-block mt-3">Read More <i className="fa fa-chevron-right"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-box">
        <div className="industries-sec">
          <div className="industries-sec-text text-center">
            <h5>Travel</h5>
            <div className="content-industry">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minus numquam eos veniam soluta, nobis officia modi qui rerum
                dolore dignissimos ab ducimus debitis quos, quibusdam
                repellendus aut sunt amet tenetur.

                <span className="orange-text d-block mt-3">Read More <i className="fa fa-chevron-right"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-box">
        <div className="industries-sec">
          <div className="industries-sec-text text-center">
            <h5>Food</h5>
            <div className="content-industry">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minus numquam eos veniam soluta, nobis officia modi qui rerum
                dolore dignissimos ab ducimus debitis quos, quibusdam
                repellendus aut sunt amet tenetur.

                <span className="orange-text d-block mt-3">Read More <i className="fa fa-chevron-right"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </section>
    </div>
  )
}

export default IndustrySlider