
(function ($) {
  'use strict';
// Get elements
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

// Add click event listener to hamburger button
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Add click event listener
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class
  hamburger.classList.toggle('active');
});

// When the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
  // Get the header element
  const header = document.querySelector('.header');
  
  // Get the offset position of the header
  const sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove it when you leave the scroll position.
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  // When the user scrolls the page, execute stickyHeader
  window.onscroll = function() {
    stickyHeader();
  };
});
	
})(jQuery);



const sliderImages = document.querySelectorAll('.img');

const prev = document.querySelector('.prev');

const next = document.querySelector('.next');

const header = document.querySelector('.header');

const maxSlide = sliderImages.length;

const navigation = document.querySelector('.nav__items');

const heroSection = document.querySelector('.tags__role__cont');
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },

      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.active-x').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1266,
      settings: {
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },

      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
  ],
});

$('.active-2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 574,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.industry-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },

      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// ==================== stciky navigation ======================== //

const head = document.querySelector('.header');
const carrierCont = document.querySelector('.slide__abolute__cont');

const stickyNav = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    head.classList.add('sticky');
  } else {
    head.classList.remove('sticky');
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 1,
});

observer.observe(carrierCont);

const submenu = document.querySelector('.sub-menu');

const menuChild = document.querySelectorAll('.menu-item-has-children');

const nav = document.querySelector('.navigation');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open');
});

menuChild.addEventListener('click', function () {
  submenu.classList.toggle('active');
});


// ---------------counter start-------------------
document.addEventListener("DOMContentLoaded", function() {
  function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let step = Math.abs(Math.floor(duration / range));
    let current = start;
    let increment = end > start ? 1 : -1;

    let timer = setInterval(function() {
      current += increment;
      element.innerText = current;

      // Stop the counter when it reaches the end value
      if (current == end) {
        clearInterval(timer);
        element.innerText = end + "+"; // Add "+" at the end only once
      }
    }, step);
  }

  // Start the counters once the page has loaded
  animateCounter("projects", 0, 900, 2000);  // Counter for Completed Projects
  animateCounter("customers", 0, 800, 2000); // Counter for Happy Customers
  animateCounter("experience", 0, 5, 2000);  // Counter for Years of Experience
});




