const swiper_vertical = new Swiper(".swiper_vertical", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper_horizontail = new Swiper(".swiper_horizontail", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true, // If we need pagination
  pagination: {
    el: ".swiper-h-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper_horizontail-button-next",
    prevEl: ".swiper_horizontail-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-h-scrollbar",
  },
});
