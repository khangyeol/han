$(document).ready(function(){
    //
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

        scrTop = $(window).scrollTop()
        $(".sub_s3_text").each(function(){
            if(scrTop > $(this).offset().top - devHwight*0.95){
                //스크롤바가 화면높이의 위에서 60%지점라인을 넘어섰을 때 실행되는 소스코드
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })

    //메인페이지 아랫부분 슬라이드 구현
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        },
        pagination: {
        el: ".swiper-pagination",
    },
    })

    //팝업열기
    $(".btn_open").click(function(){
        $(".sub_popup").addClass("on")
        $(".sub_modal").addClass("on")
    })

    //팝업닫기
    $(".btn_close").click(function(){
        $(".sub_popup").removeClass("on")
        $(".sub_modal").removeClass("on")
    })

})