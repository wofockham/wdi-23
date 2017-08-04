const thumbnailify = function (index, element) {
  const href = $(element).attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $img = $('<img>').attr('src', thumbnailURL);
  $(element).append($img);

  $(element).on('click', function (event) {
    event.preventDefault(); // Disable the link

    const embedURL = youtube.generateEmbedUrl( href );
    const embedHTML = `<iframe width="560" height="315" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;

    $('#player').hide().html( embedHTML ).fadeIn(1800); // Chaining
  });
}

$(document).ready(function () {
  $('a').each( thumbnailify );
  $('h2').funText();
});
