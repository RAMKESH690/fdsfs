import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function BlogSlider() {
    var settings = {
       dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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
    <div className='pt-5 blogs-section'>
        <Slider {...settings} className=" blog-slider">
            <div className='blog-card'>
              <img src="assets/images/x1.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">Top 5 Digital Marketing Trends You Can’t Ignore in 2024</p>
                <p className="mt-4">
                Stay ahead in the ever-evolving world of digital marketing by exploring the top trends of 2024. From AI-driven content to enhanced personalization, these insights will help you craft strategies that resonate with your target audience.
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="blog-card">
              <img src="assets/images/x2.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">How to Boost Your SEO Strategy with AI Tools</p>
                <p className="mt-4">
                Discover how AI-powered tools are revolutionizing SEO strategies. Learn how to use AI for keyword research, content optimization, and performance analysis to improve your website’s ranking and drive more organic traffic.
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x3.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">Mastering Social Media Advertising: A Beginner’s Guide</p>
                <p className="mt-4">
                Unlock the potential of social media advertising with this beginner-friendly guide. From setting budgets to targeting the right audience, explore tips for maximizing your ROI on platforms like Facebook, Instagram, and TikTok.
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x4.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">The Importance of Personalization in Email Marketing</p>
                <p className="mt-4">
                Personalization is key to successful email marketing campaigns. Learn why personalized content boosts engagement and discover actionable tips for segmenting your audience and creating tailored emails that convert subscribers into customers.
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x1.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">Why Content Marketing is Still King in 2024</p>
                <p className="mt-4">
                Content marketing continues to dominate the digital landscape. In this blog, we delve into why quality content remains essential for driving traffic, building brand authority, and increasing customer loyalty in 2024 and beyond.
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
        </Slider>
    </div>
  )
}

export default BlogSlider