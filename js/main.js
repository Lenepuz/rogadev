jQuery(document).ready(function($) {
  "use strict";
  $(".hero").ripples({
    dropRadius: 13,
    perturbance: 0.01
  });

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 50) {
      $("nav").addClass("secondary");
    } else if ($("nav").hasClass("secondary")) {
      $("nav").removeClass("secondary");
    }
  });

  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - -2
      },
      1250,
      "easeInOutExpo"
    );
  });
  new WOW().init();
});
