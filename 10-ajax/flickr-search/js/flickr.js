const searchFlickr = function (q) {
  console.log('Searching Flickr for', q);

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json'
  }).done(function (results) {
    console.log( results );
  })
}

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault();

    const query = $('#query').val();

    searchFlickr( query );
  })
});
