let carex_imgs = [
    "car_out1.png",
    "car_out2.png",
    "car_out3.png",
    "car_out8.png",
    "car_out4.png",
    "car_out5.png",
    "car_out6.png",
    "car_out7.png"
]


$(function(){
    //차량 외부 색상 바꾸는 소스코드
    $(".colorList>li").click(function(e){
        e.preventDefault()
        let idx = $(this).index()
        $(".s5_view3").html(`<a href="#"><img src="./img/${carex_imgs[idx]}" alt="차량외부이미지"></a>`)
        
    })

//차량 내부 생상 팝업열기1
$(".cololr_in1").click(function(){
    $(".s5_popup1").addClass("on")
})

//팝업닫기
$(".s5_popup1_close").click(function(){
    $(".s5_popup1").removeClass("on")
})

//차량 내부 생상 팝업열기2
$(".cololr_in2").click(function(){
    $(".s5_popup2").addClass("on")
})

//팝업닫기
$(".s5_popup2_close").click(function(){
    $(".s5_popup2").removeClass("on")
})

})