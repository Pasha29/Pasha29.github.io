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
          ).appendTo('.founder');
          }

          if (item.hierarchy == 2) {
            $('<div class="card border-dark animated wow zoomIn"><img class="card-img-top" src="'
               + item.pictureLink +
               '"><div class="infoCard"><h6 class="card-title">'
              + item.firstName + " " + item.lastName +
              '</h6><p class="card-text"><small class="text-muted">'
               + item.position +
                '</small></p><p class="card-text"></p><p class="card-text">' + "Your manager in:"
                + item.areas +
                '</p><p class="card-text"><small class="text-muted">'
                + item.phoneNumber +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.email +
                '</small></p></div></div>'
          ).appendTo('.sales');
          }

          if (item.hierarchy == 3) {
            $('<div class="card border-dark animated wow zoomIn"><img class="card-img-top" src="'
               + item.pictureLink +
               '"><div class="infoCard"><h6 class="card-title">'
              + item.firstName + " " + item.lastName +
              '</h6><p class="card-text"><small class="text-muted">'
               + item.position +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.phoneNumber +
                '</small></p><p class="card-text"><small class="text-muted">'
                + item.email +
                '</small></p></div></div>'
          ).appendTo('.other');
          }

        });
      });
      });
  });
