$(".cover-container").hide();

  $(".cover-container").fadeIn(2000, function(){
    $(".cover-container").show();
});



var logo = $(".logo").width();
var widthBody = $(window).width();
// var heightBody = $(window).height();

var horizontalCenterLogo = (widthBody / 2) - (logo / 2);
// var verticalCenterLogo = (heightBody / 2) - (logo / 2);

// alert(heightBody);
// $(".logo").css({"position": "absolute", "left": horizontalCenterLogo+"px", "top": verticalCenterLogo+"px"});
// $(".logo").css({"position": "absolute", "left": horizontalCenterLogo+"px"});

//}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// $(".advantages2").css({
//   "position": "absolute",
//    "left": getRandomInt(widthBody / 2)+"px",
//    "right": getRandomInt(widthBody / 2)+"px",
//    "top": getRandomInt(heightBody / 2)+"px",
//    "bottom": getRandomInt(heightBody / 2)+"px",
//  });
