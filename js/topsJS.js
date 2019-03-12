// $(document).ready(function() {
//   $.ajax({
//       url: "https://api.jikan.moe/v3/anime/1"
//   }).then(function(data) {
//      $('.id').append(data.id);
//      $('.content_name').append(data.contentName);
//      $('.episoses_count').append(data.episosesCount);
//   });
// });

// $(".cover-container").hide();

//   $(".cover-container").fadeIn(2000, function(){
//     $(".cover-container").show();
// });

/////////////////////////////////////////////////////////////////////////////////

// var a = JSON.stringify(
//   [
//     {
//       "name": "Pizza",
//       "price": "10",
//       "quantity": "7"
//     },
//     {
//       "name": "Cerveja",
//       "price": "12",
//       "quantity": "5"
//     },
//     {
//       "name": "Hamburguer",
//       "price": "10",
//       "quantity": "2"
//     },
//     {
//       "name": "Fraldas",
//       "price": "6",
//       "quantity": "2"
//     }
//   ]
// );
// var jsonData = JSON.parse(a);
//
// for (var i = 0; i < Object.keys(a.name).length; i++) {
//     var counter = jsonData.name[i];
//     console.log(counter.name);
// }
/////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  $.ajax({
      url: "http://35.157.157.111:8080/api/content/1"
      // url: "https://api.jikan.moe/v3/anime/1"
  }).done(function(data){
      // $('.id').append(data[key].status);
      // $('.content_name').append(data[key].source);
      // $('.episoses_count').append(data[key].type);
      // $('.exclusivity').append(data[key].aired.prop.from.year);
      // $('.range').append(data[key].score);
      // $('.sale').append(data[key].premiered);

      $('.id').append(data.id);
      $('.content_name').append(data.contentName);
      $('.episoses_count').append(data.episosesCount + " " + data.episodesDuration);
      $('.exclusivity').append(data.year);
      $('.range').append(data.year.audienceAge);
      $('.sale').append(data.genre.genreName);
    }
);
});


/*<th scope="row" class="id"></th>
<td class="content_name"></td>
<td class="episoses_count"></td>
<td class="exclusivity"></td>
<td class="range"></td>
<td class="sale"></td>*/


    //var str = '';
    //$('.id').append(data.mal_id);
    //$('.content_name').append(data.title_english);
    //$('.episoses_count').append(data.episodes);
    //$('.exclusivity').append(data.status);
    //$('.sale').append(data['prop'][0]['month']);
    //data['from'].month
    //data.prop.from.month
    //data['prop']['from'].month

    // $('.table2').append(str);
