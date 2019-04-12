$(".cover-container").hide();

  $(".cover-container").fadeIn(2000, function(){
    $(".cover-container").show();
});

var logo = $(".logo").width();
var widthBody = $(window).width();

var horizontalCenterLogo = (widthBody / 2) - (logo / 2);
