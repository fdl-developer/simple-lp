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





function numberCounter(numberId, isInteger){
    var target = document.querySelector(numberId);
    var targetNum = Number(target.getAttribute('date-id'))
    if (!targetNum) {
    return
    }
    var counterData = null
    const speed = 300 / targetNum
    var initNum = 0

    const countUp = () => {
        if (isInteger) {
            target.innerHTML = initNum
            initNum=initNum+3
        } else {
            target.innerHTML = Math.floor(initNum * 10) / 10
            initNum=initNum+0.3
        }
        
        if (initNum > targetNum) {
            target.innerHTML = targetNum
          clearInterval(counterData)
        }
    }
    counterData = setInterval(countUp, speed)
}

function goToTop(){
    $(window).scrollTop(0);

}

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
    var headerH = $('#header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH){//headerの高さ以上になったら
        $('#header').addClass('fixed');//fixedというクラス名を付与
      }else{//それ以外は
        $('#header').removeClass('fixed');//fixedというクラス名を除去
      }
  }

//ロード時
$(function(){
    numberCounter("#price-number", true)
    numberCounter("#yield-number", false)
    numberCounter("#house-count-number", true)
    FixedAnime();
    $('#top-a').on('click', function(){
        goToTop()
    });
});

//スクロール時
$(window).on('scroll', function(){
    scrollAnimate(".invite-button")
    scrollAnimate('.mail-button')
    FixedAnime();
});


