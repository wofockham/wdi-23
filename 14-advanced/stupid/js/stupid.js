$(document).ready(function () {
  const $body = $('body');
  const $bill = $('.bill');

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 3);
    $bill.css('background-position-y', -scrollTop * 0.75);
  });
});
