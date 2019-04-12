
// var a = (document.URL);
//
// var q = a.split("/");
//
// console.log();
//
// for (var i = 0; i < q.length; i++) {
//   if(q[i] == "contentInfo.html"){
//   }
// }

$(document).ready(function() {
  $.ajax({
      url: "http://35.157.157.111:8080/api/content/2"
  }).done(function(data) {
    $(function() {
      $.each(data, function(i, item) {
        console.log(item.id);
        console.log(item.contentName);
        console.log(item.videoLink);
        console.log(item.contentDescription);

          var $nameContent = $('.inner').append(
          '<h2 class="headerText animated wow zoomIn"><u>'+ item.contentName +'</u></h2>'
          + '<button type="button" class="close">&larr;</button>').appendTo('.head');

          var $video = $('.parentVideo').append(
          '<iframe class="video" src="' + item.videoLink +
           '" frameborder="0"></iframe>').appendTo('.mainContainer');

           var $description = $('.description').append(
           '<span>' + item.contentDescription + '</span>').appendTo('.mainContainer');
      });

      $(".close").click(function(){
        window.location = "content.html";
      });

    });
  });
});
//
//          <div class="parentVideo animated wow fadeInLeft">
//
//            <iframe class="video" src="https://player.vimeo.com/video/237046181?title=0&byline=0&portrait=0" frameborder="0"></iframe>
//              <!-- <img class="video" src="http://www.mkmediagroup.tv/wp-content/uploads/2017/03/mn2.jpg" alt=""> -->
//          </div>
//            <div class="description animated wow fadeInRight">
//              <span>
//                Cult Collection
//                 Have you ever thought that a really good car is like a beautiful woman?
//                 For example, a Cabriolet somehow reminds of the majesty and pride of Marlene Dietrich?
//                 And the delicate lines of a Jaguar of the 1961 model, the so-called Jaguar_E,
//                 are in some way similar to the lightness and eccentricity of Audrey Hepburn?
//                 And Demi Moore’s smile is as wise, divinely luring and complex as a Mercedes-Benz GLC itself.
//                 The project “Cult Collections” is a fusion of visual and technical pleasures.
//                 The project will tell about two directions,
//                 the first concerns well-known classic cars, and the second is devoted to military armored vehicles.
//                 We will show the elaborate works, where every detail of a real car is accurately recreated in a minute handmade model.
//                 It is worth emphasizing that each model exists only in a single copy. Due to macro-shooting,
//                 ” Cult Collections” displays to the audience all the secrets and details of the models that have become cultic.
//              </span>
//            </div>
