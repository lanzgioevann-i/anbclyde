/* LOAD */
$(window).load(function() {
	$(window).scrollTop($(window).scrollTop() + 1);
	$(window).scrollTop($(window).scrollTop() - 1);
});

function navstick(){
	//nav show
	var window_top = $(window).scrollTop();
	var div_top = $('#navbar-main').offset().top;
	var photog_top = $('#ss-main').offset().top;
	
	
	if(window_top > div_top){
		$('#navbar-main').addClass('stick');
		$('#ddSmallDevice').addClass('ddBackground');
	}
	else if(window_top <= (photog_top - 100)){
		$('#navbar-main').removeClass('stick');
		$('#ddSmallDevice').removeClass('ddBackground');
	}
	
	/*
	if(window_top > 300){
		$('#navbar-main').addClass('stick');
		$('#navbar-main').removeClass('z-depth-0');
		
		$('#ddSmallDevice').addClass('ddBackground');
		
		//links
		//$('#navbar-main-logo').addClass('showlogo');
		//$('.navbar-main-links').addClass('grey-text');
		//$('.navbar-main-links').removeClass('white-text');
		
	}
	else{
		$('#navbar-main').removeClass('stick');
		$('#navbar-main').addClass('z-depth-0');
		
		$('#ddSmallDevice').removeClass('ddBackground');
		
		//links
		//$('#navbar-main-logo').removeClass('showlogo');
		//$('.navbar-main-links').addClass('white-text');
		//$('.navbar-main-links').removeClass('grey-text');
		
	}
	*/
}

$(function() { 
  $(window).scroll(navstick);
});

	

$(document).ready(function(){
	$('.scrollspy').scrollSpy( {
	  throttle : 0,
	  scrollOffset: 55
	} );

	$('.materialboxed').materialbox();
	$('.dropdown-button').dropdown({
	  inDuration: 150,
	  outDuration: 150,
	  constrainWidth: false, // Does not change width of dropdown to that of the activator
	  hover: false, // Activate on hover
	  gutter: 0, // Spacing from edge
	  belowOrigin: false, // Displays dropdown below the button
	  alignment: 'left', // Displays dropdown with edge aligned to the left of button
	  stopPropagation: true // Stops event propagation
	}
	);
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


