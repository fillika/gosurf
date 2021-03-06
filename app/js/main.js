$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="img/arrow-right.svg" alt="" />',
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="img/arrow-left.svg" alt="" />',
    asNavFor: ".slider-dotshead"
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".header__slider"
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-map",
    centerMode: true,
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="img/arrow-right.svg" alt="" />',
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="img/arrow-left.svg" alt="" />'
  });

  $(".slider-map").slick({
    arrows: false,
    slidesToShow: 8,
    asNavFor: ".surf-slider",
    focusOnSelect: true
  });
});
