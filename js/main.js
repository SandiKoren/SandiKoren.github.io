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
jQuery(document).ready(function() {

var offset = 250;

var duration = 300;

jQuery(window).scroll(function() {

if (jQuery(this).scrollTop() > offset) {

jQuery(".back-to-top").fadeIn(duration);

} else {

jQuery(".back-to-top").fadeOut(duration);

}

});



jQuery(".back-to-top").click(function(event) {

event.preventDefault();

jQuery("html, body").animate({scrollTop: 0}, 2000);

return false;

})

});
