// $(".card-body").hide();
//
// $(".card").on({
//  "mouseover" : function() {
//    $(".card-body").slideDown("slow");
// }
// });
//
// $(".card").on({
// "mouseover" : function() {
//   // $(".infoCard").slideUp("slow");
//   $(".card-body").slideUp("slow");
//   // $("infoCard").hide();
// }
// });
function a1(){
    if($("body").width() <= 499){
      window.location = "turnDevice.html";
    }
    else if($("body").width() >= 500){
      window.location = "content.html";
    }
}


$(".card-img-top").click(function(){
  window.location = "contentInfo.html";
});
