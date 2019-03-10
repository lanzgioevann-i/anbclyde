function navToggle() {
    if ($('#navbar').hasClass('show')) {
        $('#nav-hamburger').removeClass('fa-times');
        $('#nav-hamburger').addClass('fa-bars');
    }
    else {
        $('#nav-hamburger').removeClass('fa-bars');
        $('#nav-hamburger').addClass('fa-times');
    }
}

var w = window.innerWidth;
    var h = window.innerHeight;
    var o = 'landscape';
    var i = 1;

    if(w >= h){
        o = 'landscape'
    }
    else{
        o = 'portrait'
    }
    
    $('body').css('background', 'url(img/cover/' + o + '/1.jpg) center center no-repeat');
    $('body').css('-webkit-background-size', 'cover');
    $('body').css('-moz-background-size', 'cover');
    $('body').css('-o-background-size', 'cover');
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(iOS) $('body').css('background-attachment', 'fixed');
	