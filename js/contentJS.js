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

////////////////////////////////////////////////////////////////////////////////

//стрелки

// $('.arrow').css('opacity', '0');
//
//   setInterval(function(){
//     if()
//   $('.logo').css('opacity', '0');
//   $('.arrow').css('opacity', '1');
// }, 10000);
//
// setInterval(function(){
// $('.logo').css('opacity', '1');
// $('.arrow').css('opacity', '0');
// }, 7000);

/* flipInY
flipOutY */
  ///////////////////////////////////////////////////////////////////

  //попытки

  // var kids = document.querySelectorAll('.card-body');
  // console.log(kids);

// $('.card-body').hide();

// $('.card').on("mouseover", function(e){
//   var a = e.target;
//     openInfo(a);
//  });
//
//
//  $('.card').on("mouseout", function(e){
//    var a = e.target;
//     closeInfo(a);
//   });
//
//
//     function openInfo(a){
//       console.log(a.childNodes);
//       for(var i = 0; i < a.childNodes.length; i++){
//         console.log(a[0].childNodes);
//       // if(a.childNodes.className == 'card-body'){
//         // $(a.childNodes).show();
//         // console.log("1");
//       }
//     }
//     function closeInfo(a){
//       if(a.className == 'card-body'){
//         // $(a).hide();
//       }
//     }


        // $(kids[0]).on("mouseover", function(){
           // for(var i = 0; i < kids.length; i++){
             // if(kids[0].className == 'card'){
             // console.log(this + "навёл на карточку");
          //   for(var i = 0; i < kids.length; i++){
          //   $(kids[i].parentNode.childNodes).slideUp("slow");
            // }
          // }
        // });
  // .parentNode.childNodes;

/////////////////////////////////////////////////////////////////////

//рабочее с интернета

// function openBlock(el) {
//   var kids = el.parentNode.childNodes;
// 	for (var i = 0; i < kids.length; i++) {
// 		var child = kids[i];
// 		if (child && child.className == "card-body") {
// 			if (child.style.display != 'block') {
// 				child.style.display = 'block';
// 			} else {
// 				child.style.display = 'none';
// 			}
// 		}
// 	}
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//для данных

// $(document).ready(function() {
//   $.ajax({
//       url: "http://35.157.157.111:8080/api/content/1"
//   }).done(function(data){
//     $('.content_name').append(data.contentName);
//     $('.episode_count_duration').append(data.episosesCount + " " + data.episodesDuration);
//     $('.episode_year').append(data.year);
//     $('.episode_audience').append(data.audience.audienceAge);
//     // $('.content_name').append(data.language);
//     $('.content_name').append(data.format);
//   });
// });


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var a = $('.card').length;
console.log(a);
var i;
for (i = 0; i < a; i++) {
  // setTimeout(function(){
    console.log(i);
    $('.card').eq(i).addClass("animated wow bounceInRight");
  // }, 1000);
}


        // $('.card').eq(i).addClass('animated wow bounceInRight');


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
