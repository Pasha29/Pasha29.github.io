//открытие блоков


////////////////////////////////

/*

<td>
  <div class="card">
      <img src="http://www.mkmediagroup.tv/wp-content/uploads/2017/07/Whos_there-upd-1-uai-516x344.jpg"
       class="card-img-top"> <!-- onmouseover="openBlock(this);"-->
      <div class="card-body">
        <p class="card-text">
        <h6><u>Name of content</u></h6><span class="content_name"></span>
        <h6><u>Count and duration of content</u></h6><span class="episode_count_duration"></span>
        <h6><u>Year</u></h6> <span class="episode_year"></span>
        <h6><u>Genre</u></h6>	<span class="episode_genre"></span>
        <h6><u>Audience</u></h6> <span class="episode_audience"></span>
        <h6><u>Language</u></h6> <span class="episode_language"></span>
        <h6><u>Format</u></h6> <span class="episode_format"></span>
        </p>
      </div>
  </div>
</td>

*/

//
$(document).ready(function() {
  $.ajax({
      url: "http://35.157.157.111:8080/api/content"
  }).done(function(data) {
    // console.log(data);
    $(function() {
      $.each(data, function(i, item) {
        if(item.pictureLink == null){
          return;
        }
          var $contentCards = $('<tr>').append(
          '<td><div class="card"><img class="card-img-top" src="'
           + item.pictureLink +
           '"><div class="card-body"><p class="card-text"><h6><u>Name of content</u></h6><span>'
           + item.contentName +
           '</span><h6><u>Count and duration of content</u></h6><span>'
           + item.episodesCount + ' / ' + item.episodesDuration + ' min' +
           '</span><h6><u>Year</u></h6> <span></span>'
           + item.year +
           '</span><h6><u>Genre</u></h6><span>'
           + item.genreName +
           '</span><h6><u>Audience</u></h6> <span class="episode_audience">'
           + item.audienceAge + '+' +
           '</span><h6><u>Language</u></h6> <span class="episode_language"></span>'
           + item.episodesLanguage +
           '<h6><u>Format</u></h6> <span class="episode_format"></span>'
           + item.format + '</p></div></div></td>')
          .appendTo('#contentTable');


          var $genresName = $('.blockWithchkBox').append(
          '<div class="form-check"><input class="form-check-input" type="checkbox" id="'
           + item.genreName +
           '"><label class="form-check-label" for="'
           + item.genreName +
           '">'+ item.genreName +'</label></div>')
          .appendTo('.blockGenres');



        });

//   for (var i = 0; i < $('.form-check-label').length; i++) {
//         var a = $('.form-check-label').eq(i).text();
//           if (a[i] == $('.form-check-label').eq(i).text()) {
//             console.log("!");
//           }
// }
        // $('.card').on("mouseover", function(){
        //   console.log(event.target.className);
        // });

        $(".card-img-top").click(function(){
          // window.location.replace("http://35.157.157.111:8080/api/content/1");
          window.location = "contentInfo.html";
        });

                $('.card').on("mouseover",function() {
                 $('.card-body', this).stop().slideDown(2000, 'linear');
                });

                $('.card').on("mouseout",function() {
                 $('.card-body', this).stop().slideUp(2000, 'linear');
                });



          });
     });
});




// <h6><u>Count and duration of content</u></h6><span>' + + '</span>
// <h6><u>Year</u></h6> <span>' + + '</span>
// <h6><u>Genre</u></h6>	<span>' + + '</span>
// <h6><u>Audience</u></h6> <span>' + + '</span>
// <h6><u>Language</u></h6> <span>' + + '</span>
// <h6><u>Format</u></h6> <span>' + + '</span>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// /*var a = $('.card').length;
// console.log(a);
// var i;
// for (i = 0; i < a; i++) {
//   // setTimeout(function(){
//     console.log(i);
//     $('.card').eq(i).addClass("animated wow bounceInRight");
//   // }, 1000);
// }

// $('.card').eq(i).addClass('animated wow bounceInRight');


//страница дополнительной информации о контенте
