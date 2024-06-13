$(document).ready(function(){


    //자동 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>3){count=0}
        $(".main_train").css("transform",`translateX(${-25*count}%)`)
    },3500)



    $(function(){

        //메인페이지 슬라이드 효과
        let count = 0
        $(".btn_next").click(function(event){
            event.preventDefault()
            count++
            if(count>2){count=2}
            $(".bag_train").css("transform",`translateX(${-25*count}%)`)
            $(".bag_train>li").removeClass("on")
            $(".bag_train>li").eq(count).addClass("on")
        })
    
        $(".btn_prev").click(function(event){
            event.preventDefault()
            count--
            if(count<0){count=0}
            $(".bag_train").css("transform",`translateX(${-25*count}%)`)
            $(".bag_train>li").removeClass("on")
            $(".bag_train>li").eq(count).addClass("on")
        })
    })


        //오른쪽에서 날아오는 효과
        let scrTop = 0
        let devHwight = $(window).height() //화면높이
        let coords = $(".a").offset()
        console.log(coords)
    
        $(window).scroll(function(){
            // scrTop = $(window).scrollTop()
            // if(scrTop> $(".a").offset().top - devHwight*0.5){
            //     $(".a").addClass("on")
            // }else{
            //     $(".a").removeClass("on")
            // }
            scrTop = $(window).scrollTop()
            $(".rightToleft").each(function(){
                if(scrTop > $(this).offset().top - devHwight*0.6){
                    //스크롤바가 화면높이의 위에서 60%지점라인을 넘어섰을 때 실행되는 소스코드
                    $(this).addClass("on")
                }else{
                    $(this).removeClass("on")
                }
            })
        })

        //fixed menu 사라졌다가 나타나게 하기
        window.addEventListener('scroll', function() {
            var box = document.querySelector('.fixed_menu');
            var scrollPosition = window.scrollY;
        
            if (scrollPosition > 2000) {
              box.style.top = '200px'; // 원하는 위치로 조정
            } else {
              box.style.top = '-2000px'; // 다시 숨김
            }
        });

        //서브페이지 이미지 슬라이드
        var swiper = new Swiper(".sub_s4_slide", {
            scrollbar: {
              el: ".swiper-scrollbar",
              hide: true,
            },
          });

})