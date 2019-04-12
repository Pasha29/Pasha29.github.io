$('.btn').on('click', function(){

// var x = $('.btn').name();
var a = $('.btn');
for (var i = 0; i < $('.btn').length; i++) {

var q = "item" + "." + a[i].getAttribute("name");
  // console.log(q);
  // if(a[i].getAttribute("name") == "Content"){
    $(document).ready(function() {
        $.ajax({
            url: "http://35.157.157.111:8080/api/tops"
        }).done(function(data) {
          $(function() {
            $.each(data, function(i, item) {
              var $tr = $('<tr>').append(
                  $('<td>').text(q)
                ).appendTo('#sales_table');
            });
          });
          });
        // $(".dropdown-toggle").dropdown();
    });
// }

  }
});
  // console.log(.getAttribute("name"));




// $(document).ready(function() {
//     $.ajax({
//         url: "http://35.157.157.111:8080/api/tops"
//         // url: "https://api.jikan.moe/v3/anime/1"
//     }).done(function(data) {
//       $(function() {
//         $.each(data, function(i, item) {
//             var $tr = $('<tr>').append(
//               $('<td>').text(i + 1),
//               $('<td>').text(item.contentName),
//               $('<td>').text(item.areaName),
//               $('<td>').text(item.rights),
//               $('<td>').text(item.isExclusive ? "Exclusive" : "Non Exclusive"),
//               $('<td>').text(item.period),
//               $('<td>').text(item.fullName)
//             ).appendTo('#sales_table');
//         });
//       });
//       });
//     // $(".dropdown-toggle").dropdown();
//   });
//
//
// });

//
// $(document).ready(function() {
//
// });
