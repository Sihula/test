$(function () {
  $(".your-pc__slider").slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:
            '<button class="prev-arrow" ><img src="images/arrow_prev.svg" alt="arrow-prev"></button>',
          nextArrow:
            '<button class="next-arrow"><img src="images/arrow_next.svg" alt="arrow-next"></button>',
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger__menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
