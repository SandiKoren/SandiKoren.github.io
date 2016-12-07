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
/* RETURN TO TOP */
/*------------------------------------------------------------------*/
// ===== Scroll to Top ==== 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){
 
  // hide our element on page load

 
  $('.mypict').waypoint(function() {
      $('.mypict').addClass('mypicture');
  }, { offset: '40%' });
 
});