
$(function () {  
  const el = document.querySelector('.counter')
  new Waypoint({
    element: el,
    handler: function () {
      counterUp(el)
      this.destroy()
    },
    offset: 'bottom-in-view',
  })



  $('.btn__menu').on('click', function () {
    $(this).toggleClass('btn__active')
    // $('.header__top').toggleClass('active')
    $('.menu').toggleClass('active')
    // $('.header-social__links').toggleClass('active')
  })


  $('.baner__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
  });

});