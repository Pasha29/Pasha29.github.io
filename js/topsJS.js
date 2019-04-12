$(document).ready(function() {
    $.ajax({
        url: "http://35.157.157.111:8080/api/tops"
        // url: "https://api.jikan.moe/v3/anime/1"
    }).done(function(data) {
      $(function() {
        $.each(data, function(i, item) {
            var $tr = $('<tr>').append(
              $('<td>').text(i + 1),
              $('<td>').text(item.contentName),
              $('<td>').text(item.areaName),
              $('<td>').text(item.rights),
              $('<td>').text(item.isExclusive ? "Exclusive" : "Non Exclusive"),
              $('<td>').text(item.period),
              $('<td>').text(item.fullName)
            ).appendTo('#sales_table');
        });
      });
      });
    // $(".dropdown-toggle").dropdown();
  });
