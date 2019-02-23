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

$(".cover-container").hide();

  $(".cover-container").fadeIn(2000, function(){
    $(".cover-container").show();
});


$(".card-img-top").click(function(){
  window.location = "contentInfo.html";
});


function turnDevice(){
    if($("body").width() <= 499){
      $(".cover-container").hide();
      window.location = "turnDevice.html";
    }
    else if($("body").width() >= 500){
      $(".cover-container").show();
    }
}
