$(function () {
  $(".year_header:not(.down)").nextAll().hide();
  $(".year_header").click(function () {
    const title = $(this);
    if (title.nextAll().is(":hidden") && !title.hasClass("down")) {
      title.nextAll().slideDown();
      title.toggleClass("down");
    } else if (!title.nextAll().is(":hidden") && title.hasClass("down")) {
      title.nextAll().slideUp();
      title.toggleClass("down");
    }
  });
});

const scrollSpeed = 500;

$(document).ready(function () {
  new Swiper(".slider", {
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 1000,
    direction: "horizontal",
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#profile_button").click(function () {
    const target = "#profile_wrapper";
    scrollTo(target);
    return false;
  });

  $("#archive_button").click(function () {
    const target = "#archive_wrapper";
    scrollTo(target);
    return false;
  });
});
function scrollTo(targetSelector) {
  const target = $(targetSelector);
  const scrollTop = target.offset().top - 70;
  $("html, body").animate({ scrollTop }, scrollSpeed, "swing");
}
