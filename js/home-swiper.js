const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
/*
const teamSwiper = new Swiper('.sl-team-wr', {
  pagination: {
    el: '.t-swiper-pagination'
  },
  slidesPerView: 4
})*/