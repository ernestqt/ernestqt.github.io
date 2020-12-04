/*
Reference: https://bootsnipp.com/snippets/featured/link-to-top-page
*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 50
      && $('#topbar').css('display') == 'none') {
    $('#back-to-top').fadeIn(0);
  } else {
    $('#back-to-top').fadeOut(0);
  }
});

$(function() {
  $('#back-to-top').click(function() {
    $('body,html').animate({scrollTop: 0}, 200);
    return false;
  });
});

//jorge added
$(function() {
  $('#back-to-top-topbar').click(function() {
    $('body,html').animate({scrollTop: 0}, 200);
    return false;
  });
});