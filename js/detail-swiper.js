const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 200px
    200: {
      slidesPerView: 'auto'
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


if (window.innerWidth < 660) {
  const btn = document.querySelector('.seats-buy-btn')
  document.querySelector('.seats-map').classList.add('swiper-wrapper')
  const SeatsSwiper = new Swiper('.seats-map-wr', {
    slidesPerView: 'auto',
    freeMode: true,
  });
}
