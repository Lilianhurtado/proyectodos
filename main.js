
// Menu Icon Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');
  
  menuIcon.addEventListener('click', function() {
      menuIcon.classList.toggle('move');
      navbar.classList.toggle('active');
  });

  // Close navbar when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          menuIcon.classList.remove('move');
          navbar.classList.remove('active');
      });
  });

  // Initialize Swipers
  // Category Swiper
  const categorySwiper = new Swiper('.categorySwiper', {
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          280: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          510: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          750: {
              slidesPerView: 3,
              spaceBetween: 15,
          },
          900: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
      },
  });

  // Selling Swiper
  const sellingSwiper = new Swiper('.selling-slider', {
      autoplay: {
          delay: 4500,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          280: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          510: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          750: {
              slidesPerView: 3,
              spaceBetween: 15,
          },
          920: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
      },
  });
});