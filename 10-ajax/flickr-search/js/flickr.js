const showImages = function (results) {
  const generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change the q for different sizes
    ].join('');
  };

  // console.log( results );

  _(results.photos.photo).each(function (p) {
    const imageURL = generateURL(p);
    const $img = $('<img>', {src: imageURL}); // Equivalent .attr('src', imageURL);
    $img.appendTo('#images');
  });
};

const searchFlickr = function (q) {
  console.log('Searching Flickr for', q);

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json'
  }).done(showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault();

    const query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', function () {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    const scrollBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollBottom < 500) {
      const query = $('#query').val();
      searchFlickr( query );
    }

  });
});
