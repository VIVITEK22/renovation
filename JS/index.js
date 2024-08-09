const swiper = new Swiper(".slider__swiper", {
  slidesPerView: 1,
  pagination: {
    el: '.slider__pagination',
  },
  autoplay: {
    delay: 3000,
  },
});

const swiper_two = new Swiper(".works__image-wrapper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".works__image-prev",
    nextEl: ".works__image-next"
  }
});

jQuery(function($){
  $("#tel").mask("+7 (999) 999-99-99");

  $(".question__item").on('click', function() {
    $(".question__item-slide").slideUp();
    if ($(this).hasClass("question__item--active")) {
      $(".question__item-slide", this).slideUp();
      $(this).removeClass("question__item--active");
    }
    else {
      $(".question__item").removeClass("question__item--active");
      $(".question__item-slide", this).slideDown();
      $(this).addClass("question__item--active");
    }
  });
});