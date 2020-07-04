$(function () {
  $(".year_header").nextAll().hide();
  $(".year_header").click(function () {
    const title = $(this);
    if (title.nextAll().is(":hidden")) {
      title.nextAll().slideDown();
      title.nextAll().addClass("slided");
    } else {
      title.nextAll().slideUp();
    }
    title.toggleClass("down");
  });
});
