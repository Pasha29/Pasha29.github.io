$(document).ready(function () {
  // Get income param id from page link.
  const param = window.location.search.substring(1);
  const myRe = /\d+/g;
  const currentId = myRe.exec(param)[0];
  $.ajax({
    url: "http://35.157.157.111:8080/api/content/" + currentId
  }).done(function (data) {
    $(function () {
      $('<h2 class="headerText animated wow zoomIn"><u>' + data.contentName + '</u></h2>'
        + '<button type="button" class="close">&larr;</button>').appendTo('.head');

      const vlCode = myRe.exec(data.videoLink)[0];

      $('<iframe class="video" src="https://player.vimeo.com/video/' + vlCode +
        '?title=0&byline=0&portrait=0" frameborder="0"></iframe>').appendTo('.parentVideo');

      $('<span>' + data.contentDescription + '</span>').appendTo('.description');

      $(".close").click(function () {
        window.location = "content.html";
      });

    });
  });
});