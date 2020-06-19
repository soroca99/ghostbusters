$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass('no-scroll');
  });
  var mySwiper = new Swiper('.swiper-container', {
    loop: true
  })
});