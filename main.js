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
