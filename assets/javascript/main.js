function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html('');

  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);

}

$( document ).ready(function(){
  var speed = 100;
  typeEffect($(".loader"), speed);
});

window.onload=function() {
  setTimeout(function() {
    $(".loader-wrapper").addClass('hide').ready(function() {
      $(".main-wrapper").fadeIn(250);
    })
  }, 2850)
};

$( document ).ready(function() {
  $( ".hamburger-menu-x" ).hide();
  $( ".navbar").hide();
  $( ".hamburger-menu").click(function() {
    $(" .navbar").toggle( "slow", function() {
      $( ".hamburger-menu").hide();
      $( ".hamburger-menu-x").show();
    });
  });

$( ".hamburger-menu-x" ).click(function() {
  $( ".navbar" ).toggle( "slow", function() {
    $( ".hamburger-menu-x").hide();
    $( ".hamburger-menu").show();
  });
});
});
