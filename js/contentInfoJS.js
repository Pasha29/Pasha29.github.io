$(".cover-container").hide();

  $(".cover-container").fadeIn(2000, function(){
    $(".cover-container").show();
});


$(".close").click(function(){
  window.location = "content.html";
});
