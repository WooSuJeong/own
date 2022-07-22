// mainpage mainbanner
var swiper = new Swiper(".mBanner", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

// sub1page guide
var swiper = new Swiper(".gSwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});