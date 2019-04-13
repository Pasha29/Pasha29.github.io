$(document).ready(function() {
    $.ajax({
        url: "http://35.157.157.111:8080/api/persons"
    }).done(function(data) {
      $(function() {
        $.each(data, function(i, item) {
          if (item.hierarchy == 1) {
            $('<div class="card founderCard border-dark animated wow zoomIn"><img class="card-img-top" src="'
               + item.pictureLink +
               '"><div class="infoCard"><h6 class="card-title">'
              + item.firstName + " " + item.lastName +'</h6></div></div>'
          ).appendTo('.mainFounder');
          }

          if (item.hierarchy == 2) {
            $('.sales').append(
              '<div class="card border-dark animated wow zoomIn"><img class="card-img-top" src="'
               + item.pictureLink +
               '"><div class="infoCard"><h6 class="card-title">'
              + item.firstName + " " + item.lastName +
              '</h6></div><p class="card-text"><small class="text-muted">'
               + item.position +
                '</small></p><p class="card-text"></p><p class="card-text">' + "Your manager in:"
                + item.areas +
                '</p><p class="card-text"><small class="text-muted">'
                + item.phoneNumber +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.email +
                '</small></p></div>'
          ).appendTo('.mainSales');
          }

          if (item.hierarchy == 3) {
            $('.other').append(
              '<div class="card border-dark animated wow zoomIn"><img class="card-img-top" src="'
               + item.pictureLink +
               '"><div class="infoCard"><h6 class="card-title">'
              + item.firstName + " " + item.lastName +
              '</h6></div><p class="card-text"><small class="text-muted">'
               + item.position +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.phoneNumber +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.email +
                '</small></p></div>'
          ).appendTo('.mainOther');
          }

        });
      });
      });
  });

  /*<div class="card sales border-dark animated wow bounceInLeft">
      <img  class="card-img-top" src="http://www.mkmediagroup.tv/wp-content/uploads/2017/02/Zapolskij_P-1.jpg">
      <div class="infoCard">
        <h6 class="card-title">ARTEM ZAPOLSKYI</h6>
        <p class="card-text"><small class="text-muted">HEAD OF S&A DEPARTMENT</small></p>
        <p class="card-text">Your manager in: MENA, Asia, Australia and Oceania</p>
        <p class="card-text"><small class="text-muted">+38 (066) 993-87-77</small></p>
        <p class="card-text"><small class="text-muted">artem@mk-distribution.com</small></p>
      </div>
  </div>*/

/*var $genresName = $('.blockWithchkBox').append(
'<div class="form-check"><input class="form-check-input" type="checkbox" id="'
 + item.genreName +
 '"><label class="form-check-label" for="'
 + item.genreName +
 '">'+ item.genreName +'</label></div>')
.appendTo('.blockGenres');*/
