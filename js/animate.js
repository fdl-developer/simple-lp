function scrollAnimate(className){
    var scroll;
    scroll = $(window).scrollTop();
    var winH = $(window).height();
    var objH = $(className).outerHeight();
    var objTop = $(className).offset().top;
    if(scroll >= objTop - (winH - objH)){
        $(className).addClass("animate__swing");
    }
    if(scroll >= objTop + objH || scroll <= objTop - winH){
        $(className).removeClass("animate__swing")
    }
}

$(window).on('scroll', function(){
    scrollAnimate(".invite-button")
    scrollAnimate('.mail-button')
});
