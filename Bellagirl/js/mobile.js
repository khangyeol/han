$(document).ready(function(){


    //자동 슬라이드
  
     //자동 슬라이드_모바일
     let count = 0

      setInterval(function(){
          count++
          if(count>2){count=0}
          $(".main_train_1").css("transform",`translateX(${-33.333*count}%)`)
      },2000)

})
