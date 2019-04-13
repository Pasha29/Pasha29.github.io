$(document).ready(function () {
  $.ajax({
    url: "http://35.157.157.111:8080/api/content"
  }).done(function (data) {
    var genres = [];
    $(function () {
      $.each(data, function (i, item) {
        if (item.pictureLink == null) {
          return;
        }
        
        $('<tr>').append(
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

        if (!genres.includes(item.genreName)) {
          genres.push(item.genreName);
        }

      });

      $.each(genres, function (i, item) {
        $('.blockWithchkBox').append(
          '<div class="form-check"><input class="form-check-input" type="checkbox" id="'
          + item +
          '"><label class="form-check-label" for="'
          + item +
          '">' + item + '</label></div>')
          .appendTo('.blockGenres');
      });

      $(".card-img-top").click(function () {
        window.location = "contentInfo.html";
      });

      $('.card').on("mouseover", function () {
        $('.card-body', this).stop().slideDown(2000, 'linear');
      });

      $('.card').on("mouseout", function () {
        $('.card-body', this).stop().slideUp(2000, 'linear');
      });
    });
  });
});