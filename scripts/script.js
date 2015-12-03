$(function () {
  $('.animate').fadeIn(1000).removeClass('animate');
})

$('a').click(function () {
  event.preventDefault;
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

//to browser size on load
$(function () {
  var h = window.innerHeight;
  $(".toWindowSize").css("height", h);
});

//to browser size on resize
$(window).resize(function () {
  var h = window.innerHeight;
  $(".toWindowSize").css("height", h);
});

//toggle responsive menu
$(function () {
  //hides menu initially
  $('#mobile_links').hide();
  $("#menu").click(function () {
    //show/hide menu on click
    $("#mobile_links").slideToggle("slow");
  });
});