import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WindowScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Run this effect when the route (pathname) changes

  return null;
};

export default WindowScroll;
