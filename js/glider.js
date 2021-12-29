window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    arrows: {
      prev: ".glider-controls__prev",
      next: ".glider-controls__next",
    },
    draggable: false,
    dots: ".glider__dots",
  });
});
