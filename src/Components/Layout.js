import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    // about: false,
    services: false,
    // design: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle a specific submenu
  const toggleSubmenu = (submenu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [submenu]: !prevState[submenu],
    }));
  };

  // Handle the sticky header
  const handleScroll = () => {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <Link to="/"><img src="assets/images/logo 1.png" alt="Logo" /></Link>
            </div>
            <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={() => toggleSubmenu('about')}>
                    About Company <i className="fa fa-chevron-down"></i>
                  </Link>
                  <div className={`sub-container ${submenuOpen.about ? 'show' : ''}`}>
                    <div className="sub-menu-child">
                      <ul className="sub-menu-items">
                        <li className="sub-menu-link">
                        <Link to="#" className="nav-link" onClick={() => toggleSubmenu('design')}>
                          Design <i className="fa fa-chevron-down"></i>
                        </Link>
                        <div className={`next-div ${submenuOpen.design ? 'show' : ''}`}>
                            <ul className="next-tags">
                                <li className="tags-link">
                                <Link to="#">Web Dev</Link>
                                </li>
                                <li className="tags-link">
                                <Link to="#">UI/UX Design</Link>
                                </li>
                                <li className="tags-link">
                                <Link to="#">Responsive Web Design</Link>
                                </li>
                            </ul>
                        </div>
                        </li>
                        <li className="sub-menu-link">
                          <Link to="#">Mobile App</Link>
                        </li>
                        <li className="sub-menu-link">
                          <Link to="#">Web App</Link>
                        </li>
                        <li className="sub-menu-link">
                          <Link to="#">Digital Marketing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={() => toggleSubmenu('services')}>
                    Services <i className="fa fa-chevron-down"></i>
                  </Link>
                  <div className={`sub-container ${submenuOpen.services ? 'show' : ''}`}>
                    <div className="sub-menu-child">
                      <ul className="sub-menu-items">
                      <li className="sub-menu-link">
                        <Link to="/digital-marketing-services" className="nav-link" onClick={() => toggleSubmenu('design')}>
                            Degital Marketing <i className="fa fa-chevron-down"></i>
                        </Link>
                        <div className={`next-div ${submenuOpen.design ? 'show' : ''}`}>
                            {/* <div className="sub-menu-child"> */}
                            <ul className="next-tags">
                                <li className="tags-link">
                                  <Link to="/ppc">PPC</Link>
                                </li>
                                <li className="tags-link">
                                  <Link to="/social-media-marketing">Social Media Marketing</Link>
                                </li>
                               
                            </ul>
                            {/* </div> */}
                        </div>
                        </li>
                        
                        <li className="sub-menu-link">
                          <Link to="/website-template">Website Template</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <Link to="#" className="nav-link">Industries</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Internship</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/careers" className="nav-link">Careers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="responese-btn">
              <div className="nav-button">
                <Link to="/careers" className="btn-thm-main">Hire Developer</Link>
              </div>
              <div className={`hamburger ${isOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default Layout;
