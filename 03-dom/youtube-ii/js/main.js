$('a').each(function (index, element) {
  const href = $(element).attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl( href );
  let $img = $('<img>').attr('src', thumbnailURL);
  $(element).append($img);
});
