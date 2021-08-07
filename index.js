$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:'true',
        autoplayTimeout:'3000',
        responsive: {
            0: {
                items:1
            },
            768:{
                items:2
            },
            986:{
                items:3
            },
        },


    });
    wow = new WOW ( 
        { 
        boxClass: 'wow', // default 
        animateClass: 'animated', // default 
        offset: 0, // default 
        mobile: true, // default 
        live: true // default 
      } 
      ) 
      wow.init ( );

});