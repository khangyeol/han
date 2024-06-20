$(document).ready(function(){
  $(".left1>li").click(function(){
    $(".left1>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index()
    console.log(sideListCar[idx].carList)
    let result = ""
    for(let i=0 ; i<sideListCar[idx].carList.length ; i++){
      result+=`<li>
        <img src="./img/${sideListCar[idx].carList[i].imgSrc}" alt="${sideListCar[idx].carList[i].carName}">
        <p>${sideListCar[idx].carList[i].carName}</p>
      </li>`
    }
    console.log(result)
    $(".right1").html(result)

  })


  $(".header_open").click(function(){
    $(".sideGnb").addClass("on")
  })
  $(".top_close_btn").click(function(){
    $(".sideGnb").removeClass("on")
  })
})