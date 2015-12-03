//to browser size on load
$(function() {
  var h = window.innerHeight;
  $(".toWindowSize").css("height", h);
});
    
//to browser size on resize
$(window).resize(function() {
  var h = window.innerHeight;
  $(".toWindowSize").css("height", h);
});

//smooth scroll
$(".scroll").click(function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

//toggle responsive menu
$(function() {
  //hides menu initially
  $('.mobile_links').hide();
  $("#menu").click(function() {
    //show/hide menu on click
    $( ".mobile_links" ).slideToggle( "slow" );
  });
});