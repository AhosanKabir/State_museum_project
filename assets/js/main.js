(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel for hero
  $(".hero_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 800,
    items: 1,
    navText: [
      '<i><img src="assets/img/arrow.svg" alt=""></i>',
      '<i><img src="assets/img/arrow.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
  });

  // owlCarousel for permanent section 
  $(".permanent_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 800,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
  });

   // owlCarousel for events
   $(".event_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 800,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
  });

  // owlCarousel for testimonial
  $(".testimonial_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 800,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }

  });


 
})(jQuery);
