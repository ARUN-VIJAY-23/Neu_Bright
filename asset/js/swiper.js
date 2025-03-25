const swiperStories = new Swiper(".showcase__card-wrapper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});

const swiperBlogs = new Swiper(".blog__card-wrapper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });
