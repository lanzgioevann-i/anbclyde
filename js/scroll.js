$(document).ready(function () {
    $(window).scrollTop($(window).scrollTop() + 1);
    $(window).scrollTop($(window).scrollTop() - 1);
});

$(function () {
    $(window).scroll(stickyNav);
});

function stickyNav() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navline').offset().top;

    if (window_top > (div_top - 400)) {
        $('#mainnav').addClass('shownav');
        $('#mainnav').removeClass('hidenav');
        $('.nav-font-color').addClass('black-text');
        $('.nav-font-color').removeClass('white-text');
    }
    else {
        $('#mainnav').removeClass('shownav');
        $('#mainnav').addClass('hidenav');
        $('.nav-font-color').addClass('white-text');
        $('.nav-font-color').removeClass('black-text');
    }
}
