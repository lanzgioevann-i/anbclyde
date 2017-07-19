/* NAV BAR */
function navstick(){
	//nav show
	var window_top = $(window).scrollTop();
	var div_top = $('#link-line').offset().top;
	/*
	*/
	if(window_top > (div_top)){ 
		$('#navbar-main').addClass('stick');
	}
	else{
		$('#navbar-main').removeClass('stick');
	}
}

function introshow(){
	//skill show
	var window_top = $(window).scrollTop();
	
	var intro_top = $('#link-line').offset().top;
	
	if(window_top > (intro_top + 100)){
		$('#stack-intro').addClass('active');
	}
	else{
		$('#stack-intro').removeClass('active');
	}
	
}

$(function() { 
  $(window).scroll(navstick);
  $(window).scroll(introshow);
});

$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy( {
	  throttle : 0,
	  scrollOffset: 60
  } );
  
  $(".button-collapse").sideNav();
  $('.materialboxed').materialbox();
  $(".dropdown-button").dropdown();
  $('.slider').slider();
});

/* HEADER */
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});


