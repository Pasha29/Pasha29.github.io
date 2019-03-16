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


  var kids = document.querySelectorAll('.card-body');
  console.log(kids);
        $(kids[0]).on("mouseover", function(){
           // for(var i = 0; i < kids.length; i++){
             if(kids[0].className == 'card'){
             console.log(this + "навёл на карточку");
          //   for(var i = 0; i < kids.length; i++){
          //   $(kids[i].parentNode.childNodes).slideUp("slow");
            }
          // }
        });
  // .parentNode.childNodes;

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


//////////////////////////////////////////////////////////////////
// $(document).ready(function() {
//   $.ajax({
//       url: "https://api.jikan.moe/v3/anime/1"
//   }).done(function(data){
//     $('.content_name').append(data.status);
//     $('.episode_count_duration').append(data.source + " " + data.type);
//     $('.episode_year').append(data.aired.prop.from.year);
//     $('.episode_audience').append(data.score);
//     // $('.content_name').append(data.language);
//     $('.episode_format').append(data.premiered);
//     // $('.episode_language').append(data.related.Adaptation.type[0]);
//   });
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

/*<div class="card-body">
  <p class="card-text">
  <h6><u>Name of content</u></h6><span class="content_name">Any Day Holiday</span>
  <h6><u>Count and duration of content</u></h6><span class="episode_count_duration"> 13x11 min </span>
  <h6><u>Year</u></h6> <span class="episode_year">	2017 </span>
  <h6><u>Genre</u></h6>	<span class="episode_genre"> Educational, Entertainment, Kids </span>
  <h6><u>Audience</u></h6> <span class="episode_audience">	4-7 years old </span>
  <h6><u>Language</u></h6> <span class="episode_language">	English </span>
  <h6><u>Format</u></h6> <span class="episode_format">	HD </span>
  </p>
</div>*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



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
