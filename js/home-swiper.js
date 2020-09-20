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

if(window.innerWidth < 1200) { 
  const teamSwiper = new Swiper('.sl-team-wr', {
    slideClass: 'team-item',
    pagination: {
      el: '.t-swiper-pagination'
    },
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 15
      }
    }
  })
}