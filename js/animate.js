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
        

        console.log(initNum, targetNum)
        if (initNum > targetNum) {
            target.innerHTML = targetNum
          clearInterval(counterData)
        }
    }
    counterData = setInterval(countUp, speed)
}

$(function(){
    numberCounter("#price-number", true)
    numberCounter("#yield-number", false)
    numberCounter("#house-count-number", true)
});





// const shuffleNumberCounter = (target) => {
//     var targetNum = Number(target.getAttribute('date-id'))
    
//     console.log(targetNum,"aaaaaaaaaaaaaaaaaaa")
//     if (!targetNum) {
//       return
//     }
  
//     let counterData = null
//     const speed = 1000 / targetNum
//     let initNum = 0
  
//     const countUp = () => {
//       if (Number.isInteger(targetNum)) {
//         target.innerHTML = initNum
//       } else {
//         target.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`
//       }
  
//       initNum++
  
//       if (initNum > targetNum) {
//         target.innerHTML = targetNum
//         clearInterval(counterData)
//       }
//     }
    
//     counterData = setInterval(countUp, speed)
//   }
  


//   $(function(){
//     var target = document.querySelector('#price-number');
//     console.log(target)
//     shuffleNumberCounter(target)
// });