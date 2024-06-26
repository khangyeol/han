$(document).ready(function(){
    //s2슬라이드 넘어가는 소스코드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
    //s4슬라이드 넘어가는 소스코드
    var swiper = new Swiper(".s4_swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    //옆에서 날아오는 기능
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
        $(".rightToleft,.leftToRight").each(function(){
            if(scrTop > $(this).offset().top - devHwight*0.6){
                //스크롤바가 화면높이의 위에서 60%지점라인을 넘어섰을 때 실행되는 소스코드
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })

    // 메인페이지 마지막섹션 탭메뉴 
    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })
    
    //자동 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".sub_train").css("transform",`translateX(${-33.333*count}%)`)
    },3500)


    // 로그인탭메뉴
    $(".login_box>dt").click(function(){
        $(".login_box>dt").removeClass("on")
        $(this).addClass("on")
    })

})
