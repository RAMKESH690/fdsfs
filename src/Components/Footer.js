import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    const currentYear = new Date().getFullYear();

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > 300); // Show button after scrolling down 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
       <section className='section-padding follow-sec py-5'>
        <div className="container">
          <div className="follow-box">
            <h2>Follow Us</h2>
            <ul className='social-item p-0'>
              <li><Link to=""><i className="fab fa-linkedin"></i> linkedin</Link></li>
              <li><Link to="https://x.com/codezion_soft"><i className="fab fa-twitter"></i> Twitter</Link></li>
              <li><Link to="https://www.facebook.com/codezionthemes/"><i className="fab fa-facebook"></i> Facebook</Link></li>
              <li><Link to="https://www.instagram.com/codezionsoftware/"><i className="fab fa-instagram"></i>Instagram</Link></li>
              <li><Link to="https://in.pinterest.com/codezion0699/"><i className="fab fa-pinterest"></i> Pinterest</Link></li>
            </ul>
            <h4>SERVING IN 30+ COUNTRIES FOR SOFTWARE DEVELOPMENT</h4>
            <p>United States (USA), United Kingdom (UK), Singapore, Germany, Australia , Netherlands, United Arab Emirates (UAE) , Saudi Arabia , Qatar, Switzerland, Spain etc.</p>
          </div>
        </div>
      </section>
        {/* -------footer--------- */}
        <footer >
            <div className="container">
            <div className="row ft-bgsec">
            <div className="ft-card">
                <div className="footer-logo footer-sec">
                <Link to="/"><img src="assets/images/Frame 22.png" alt="" /></Link>
               
                </div>
            </div>
            <div className="ft-card">
                <div className="footer-sec-1 footer-sec">
                <ul className="footer-list">
                    <li>
                    <h3 className="sec-2-heading">Our Services</h3>
                    </li>
                    <li className="footer-items">
                    <Link to="/digital-marketing-services" className="footer-link"> Digital Marketing Services</Link>
                    </li>
                   
                    <li className="footer-items">
                    <Link to="/social-media-marketing" className="footer-link"> Social Media Marketing</Link>
                    </li>
                    
                    <li className="footer-items">
                    <Link to="/ppc" className="footer-link"> PPC</Link>
                    </li>
                    <li className="footer-items">
                    <Link to="/website-template" className="footer-link"> Website Template</Link>
                    </li>
                    {/* <li className="footer-items">
                    <Link to="" className="footer-link"> Multimedia and production</Link>
                    </li> */}
                </ul>
                </div>
            </div>
            <div className="ft-card">
                <div className="footer-sec-2 footer-sec">
                <ul className="footer-list">
                    <li>
                    <h3 className="sec-2-heading">Information</h3>
                    </li>
                    <li className="footer-items">
                    <Link to="/" className="footer-link"> Home</Link>
                    </li>
                    <li className="footer-items">
                    <Link to="/about" className="footer-link"> About Us</Link>
                    </li>

                    <li className="footer-items">
                    <Link to="/careers" className="footer-link"> Career</Link>
                    </li>
                  
                    <li className="footer-items">
                    <Link to="/contact" className="footer-link">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="ft-card">
                <div className="footer-sec-3 footer-sec">
                <ul className="footer-list">
                    <li>
                        <h3 className="sec-3-heading">Address</h3>
                    </li>
                    <p>C-188, B-2, Ground Floor, Ayesha Majestic Near LBS College Sunder Marg Tilak Nagar, Raja Park, Jaipur, Rajasthan 302004</p>
                    <div className="address-item">
                        <div className="address-icon">
                            <Link to="mailto:info@codezion.com"><i className="fa fa-envelope"></i> info@codezion.com</Link>
                        </div>
                        <div className="address-icon">
                           <Link to="tel:8386893777"> <i className="fa fa-phone"></i> 8386893777, 9772564292</Link>
                        </div>
                    </div>
                </ul>
                </div>
            </div>
            <div className="ft-card">
                <div className="footer-sec-3 footer-sec">
                <ul className="footer-list">
                    <li>
                    <h3 className="sec-3-heading">Newsletter</h3>
                    </li>
                    <p>Register now to get latest updates on promotions & coupons.</p>
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email Address" />
                    </div>
                    <button type="submit" className="btn thm-btn text-white rounded-2 px-3">
                    Subscribe  <i className="far fa-angle-double-right"></i>
                    </button>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </footer>
        <section className="ft-bottom py-4">
            <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <ul className="ft-list mb-0">
                        <li><Link to="/privacypolicy" className="">Privacy Policy</Link></li>
                        <li><span className="dot"></span></li>
                        <li><Link to="/termsconditions" className="">Terms of use</Link></li>
                        <li><span className="dot"></span></li>
                        <li><Link to="/" className="">Sitemap</Link></li>
                        {/* <li><span className="dot"></span></li> */}
                        {/* <li><Link to="/careers" className="">Career</Link></li> */}
                    </ul>
                </div>
                <div className="col-md-6 ">
                    <div className="social__icons">
                        <Link to="https://www.instagram.com/codezionsoftware/"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://www.facebook.com/codezionthemes/"> <i className="fab fa-facebook"></i></Link>
                        <Link to="https://x.com/codezion_soft"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.youtube.com/@codezionthemes"><i className="fab fa-youtube"></i></Link>
                        <Link to=""><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <div className="copy-text">
            <p className="copyright-text">
            © {currentYear} Copyright <Link to="/" className='px-2'> Codezion </Link> All Rights Reserved.
            </p>
        </div>

        {isVisible && (
        <button onClick={scrollToTop} className='scrollToTop'>
            <i className="fa fa-chevron-up"></i>
        </button>
      )}
    </div>
  )
}

export default Footer