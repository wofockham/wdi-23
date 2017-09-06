const fetchBook = function () {
  const title = $('#title').val();

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    $('<img>').attr('src', cover).appendTo('main');
  }).done(function (i) {
    console.log(i);
  }).fail(function () {
    alert('There was an error');
  });
};

$(document).ready(function () {
  $('#search').on('click', fetchBook);
});
