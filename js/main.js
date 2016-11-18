// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
  offset: {
    top: 100
  }
})



/*------------------------------------------------------------------*/
/* NAVBAR COLLAPSE FIX*/
/*------------------------------------------------------------------*/
$(document).on('click',function(){
$('.collapse').collapse('hide');
});


/*------------------------------------------------------------------*/
/* SKILLBAR */
/*------------------------------------------------------------------*/



var waypoint = new Waypoint({
  element: document.getElementById('third-section'),
  handler: function() {
    jQuery("document").ready(function(){
     jQuery('.skillbar').each(function(){
       jQuery(this).find('.skillbar-bar-child').animate({
         width:jQuery(this).attr('data-percent')
       },8000);
     });
    });
  }, offset: 100
})

/*------------------------------------------------------------------*/
/* COUNTER */
/*------------------------------------------------------------------*/


/*------------------------------------------------------------------*/
/* PRELOADER */
/*------------------------------------------------------------------*/
$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})
/*------------------------------------------------------------------*/
/* WOW JS PLUGIN */
/*------------------------------------------------------------------*/
new WOW().init();
/*------------------------------------------------------------------*/
/* BUTTON BLOOB */
/*------------------------------------------------------------------*/

$(document).ready(function() {
  $('.bttn-blob').click(function() {
    $(this).toggleClass('blob');
  });
});


$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.bttn-blob').toggleClass("blob");
  }
});

/*------------------------------------------------------------------*/
/* TYPING ABOUT */
/*------------------------------------------------------------------*/

$('.about-text').typeIt({
     speed: 30,
     autoStart: false,
     cursor:false,
     lifeLike:false
});
