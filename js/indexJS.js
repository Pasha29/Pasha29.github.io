if($("body").width() <= 380){
  positionTextfooter(0);
}
else{
  positionTextfooter(20);
}

function positionLogo(){
  var heightBody = $('body').height();
  var logoHeight = $('.logo').height();
  console.log(heightBody + "/" + logoHeight);
  $('.logo').css({"position": "absolute", "top": ((heightBody / 2) - (logoHeight / 2) - 20)+"px"});
}

positionLogo();

function positionTextfooter(size){
  var wd = $(".footer").width();
  var wdp = $(".textFooter").width();
  wd = wd / 2 - (wdp / 2) - size;
  $('.textFooter').css({"position": "absolute", "left": wd+"px"});

  window.addEventListener('resize', function(event){
    var wd = $(".footer").width();
    var wdp = $(".textFooter").width();
    wd = wd / 2 - (wdp / 2);
    $('.textFooter').css({"position": "absolute", "left": wd+"px"});
  });
}
