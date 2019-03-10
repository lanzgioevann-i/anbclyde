var currentid = "";
function loadwork(id){
    
    if(currentid != id){
        currentid = id;
        
        ChangeWorkBackground(id);
    }
    
}

function ChangeWorkBackground(id){
    var src = $("#" + id).find($("img")).attr("src");
    $(".works-container").css("background-image", "url(" + src + ")")
}

var isMobile = false;
$(document).ready(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
     $(".works-container").css("background-image", "url()");
     $(".work").css('opacity', '1');
    }

    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$(window).scroll(function(){
    if(isMobile){
        $(".work").css('opacity', '1');
    }
})