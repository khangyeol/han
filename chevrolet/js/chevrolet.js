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
    // var swiper = new Swiper(".mySwiper", {
    //     effect: "coverflow",
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //     },
    //     pagination: {
    //     el: ".swiper-pagination",
    // },
    // })

    //팝업열기
    $(".btn_open").click(function(){
        $(".sub_popup").addClass("on")
        $(".sub_modal").addClass("on")
    })

    //팝업닫기
    $(".sub2_popup_btn_close").click(function(){
        $(".sub_popup").removeClass("on")
        $(".sub_modal").removeClass("on")
    })


    //sub3 스크롤 할 때 텍스트 크기 커지게 하는 기능
      let lastScrollTop = 0;
        const initialFontSize = 30;

        window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY;
            var textElement = document.getElementById('text');
            var currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);

            if (scrollTop > lastScrollTop) {
                // 스크롤을 아래로 내릴 때
                textElement.style.fontSize = (currentFontSize * 1.02) + 'px';
            } else {
                // 스크롤을 위로 올릴 때
                textElement.style.fontSize = (currentFontSize / 1.2) + 'px';

                // 원래 크기보다 작아지지 않도록 설정
                if (parseFloat(textElement.style.fontSize) < initialFontSize) {
                    textElement.style.fontSize = initialFontSize + 'px';
                }
            }
            lastScrollTop = scrollTop;
        });



    //sub3 그리드 클릭 효과
        $(".gallery>li").click(function(){
            let idx = $(this).index()
            $(".gallery>li").removeClass("on")
            $(".gallery>li").eq(idx).addClass("on")
         })

})