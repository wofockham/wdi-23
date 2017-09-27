$(document).ready(function () {
  $('#add-color').on('click', function () {
    var color = $('#color').val();
    var $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation
  $('.palette').on('click', '.swatch', function () {
    $('.swatch.active').removeClass('active');
    $(this).addClass('active');
  });

  // Event delegation
  $('.canvas').on('mouseover', '.pixel', function (e) {
    if (e.shiftKey === true) { return; } // You can customise this.
    var color = $('.swatch.active').css('background-color');
    $(this).css('background-color', color);
  });

});
