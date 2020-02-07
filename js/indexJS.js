// function btnClick(button){
// 	// button.style.background = "red";

// }


// function btnClick(button){
// 	// button.setAttribute("style", "background:red");
// 	button.style.background = "red";
// }

	//$(".btnContacts").hide();

// $('.col-sm-4').fadeOut(0).fadeIn(1000);

//
// function fadeElements(){
// 	for(var i = 0; i < $('.btn').length + 1; i++){
// 		 $(".ray" + i).hide();
// 		 $('.ray' + i).fadeIn(i*500);
//
//
//
// 		 $('.btn' + i).hide();
// 		 $('.btn' + i).fadeIn(i*1200);
// 	}
//
// }
//
// fadeElements();
//
// $('.btn1').click(function(){
// 	window.location = "content.html";
// });
//
// $('.btn2').click(function(){
// 	window.location = "production.html";
// });
//
// $('.btn3').click(function(){
// 	window.location = "ourTeam.html";
// });
//
// $('.btn4').click(function(){
// 	window.location = "contacts.html";
// });

// function loadNewWindow(){
//   var pages = document.getElementsByTagName("a");
//   var atr = pages.getAttribute("href");
//   if(atr == "content.html"){
//      window.location = "content.html";
//   }
//   else{
//     alert("1");
//   }
//   // window.location = "content.html";
// }

//для открывания разных страниц, при нажатии на разные стрелки

// $(".arrow").click(function(){
//   var pages = document.getElementsByClassName("arrow");
//   for (var i = 0; i < pages.length; i++) {
//       if(pages[i].getAttribute("name") == "content"){
//         window.location = "content.html";
//       }
//       else {
//         if(pages[i].getAttribute("name") == "production"){
//           window.location = "production.html";
//         }
//         else {
//           if(pages[i].getAttribute("name") == "contacts"){
//             window.location = "contacts.html";
//           }
//           else {
//             if(pages[i].getAttribute("name") == "outTeam"){
//               window.location = "outTeam.html";
//             }
//           }
//         }
//       }
//     }
// });
  // $(document.body).css("background-color", "white").fadeOut(2000);
  // setTimeout(loadNewWindow, 2000);

// setTimeout(clickTOP, 5000);

// $('.logo').hide();


// $(".cover-container").hide();

//   $(".cover-container").fadeIn(2000, function(){
//     $(".cover-container").show();
// });



if($("body").width() <= 380){
  positionTextfooter(0);
}
else{
  positionTextfooter(20);
}

//
// $(".imageArrow").on({
//  "mouseover" : function() {
//     this.src = 'materials/imageforpageshover.png';
//    },
//    "mouseout" : function() {
//      this.src='materials/imageforpages.png';
//    }
// });
//
// $(".imageArrow").on({
//  "click" : function() {
//     this.src = 'materials/imageforpageshover.png';
//    }
// });

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
