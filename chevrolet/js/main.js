$(document).ready(function(){
    //메인페이지 아랫부분 슬라이드 구현
        var swiper = new Swiper(".che", {
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
            el: ".swiper-pagination2",
        },
        })

})
    
