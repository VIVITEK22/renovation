jQuery(function($) {
  $(".header__burger").on('click', function() {
    $(".header__nav").addClass("header__nav--active")
  });

  $(".header__close").on('click', function() {
    $(".header__nav").removeClass("header__nav--active")
  });
});