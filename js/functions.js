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
	else if(window_top <= (photog_top - 75)){
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

function introshow(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-description').offset().top;
	
	if(window_top > (div_top - 200)){
		$('#stack-intro').addClass('active');
	}
	else{
		$('#stack-intro').removeClass('active');
	}
}

function photoshow(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-photography').offset().top;
	
	if(window_top > (div_top - 400)){
		
		setTimeout(function() {
			$('.port-img-1').addClass('port-img-show');
			setTimeout(function() {
				$('.port-img-2').addClass('port-img-show');
				setTimeout(function() {
					$('.port-img-3').addClass('port-img-show');
					setTimeout(function() {
						$('.port-img-4').addClass('port-img-show');
						setTimeout(function() {
							$('.port-img-5').addClass('port-img-show');
							setTimeout(function() {
								$('.port-img-6').addClass('port-img-show');
								setTimeout(function() {
									$('.port-img-7').addClass('port-img-show');
									setTimeout(function() {
										$('.port-img-8').addClass('port-img-show');
										setTimeout(function() {
											$('.port-img-9').addClass('port-img-show');
										}, 200);
									}, 200);
								}, 200);
							}, 200);
						}, 200);
					}, 200);
				}, 200);
			}, 200);
		}, 0);
	}
	else{
		
	}
}

var x = 0;
function pricingshow(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-pricing').offset().top;
	
	if(window_top > div_top){
		if(x == 0){
			$("#price-photography").addClass("active");
			$("#price-cinematography").addClass("active");
			$("#price-option").addClass("active");
			
			$('.collapsible').collapsible('open', 0);
			x++;
		}
	}
	if(window_top > (div_top + 500)){
		if(x == 1){
			$("#price-photography2").addClass("active");
			$("#price-cinematography2").addClass("active");
			$("#price-option2").addClass("active");
			
			$('.collapsible').collapsible('open', 0);
			x++;
		}
	}
	else{
		//$("#price-photography").removeClass("active");
		//$(".collapsible").collapsible({accordion: true});
		//$(".collapsible").collapsible({accordion: false});
	}
	
}

$(function() { 
  //$(window).scroll(pricingshow);
  $(window).scroll(navstick);
  $(window).scroll(introshow);
  $(window).scroll(photoshow);
});

	

$(document).ready(function(){
	$('.parallax').parallax();
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
    $('.collapsible').collapsible();
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


