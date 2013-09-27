/*!
 * melvin.io v1.6.0
 * Copyright © 2013 Melvin Chien <hello@melvin.io> (http://melvin.io/)
 * Licensed under the MIT license
 */

(function() {
  var delayedFadeIn;

  delayedFadeIn = function() {
    return $("#js-navbar").fadeIn("2000");
  };

  $(document).ready(function() {
    var timeoutID;
    $(this).foundation();
    timeoutID = window.setTimeout(delayedFadeIn, "1500");
    $("#js-navbar a").address(function() {
      return $(this).attr("href").replace(/^#/, "");
    });
    return $.address.change(function(event) {
      var container;
      container = $("#js-container");
      if (event.value === "/") {
        $("html, body").animate({
          scrollTop: 0
        }, 500, function() {
          container.fadeOut("500");
          return container.html("");
        });
      } else {
        container.fadeOut("500", function() {
          return container.load(event.value + ".html");
        });
      }
      return container.fadeIn("500");
    });
  });

  $(window).resize(function() {
    $(".hexagon").css("margin-top", $(window).height() / 2 - 175 / 2 - 45);
    return $(".hexagon").css("margin-bottom", $(window).height() / 2 - 175 / 2 - 45);
  });

  /*
    width = $(window).width() * 0.3
    $("#js-hexagon").height width
    $("#js-hexagon").width width
    $('a[href^="#"]').click (e) ->
      e.preventDefault()
      id = $(this).attr("href")
      posTop = $(id).position().top;
      posTop -= 50 if $(".hidden-phone").is(":visible")
      $("html, body").animate
        scrollTop: posTop,
        1000
    $('a[href^="http"]').attr "target", "_blank"
    $('a[class="tooltip-hover"]').tooltip()
    $("img.lazy").show().lazyload effect: "fadeIn"
    $('a[href$=".gif"],a[href$=".jpg"],a[href$=".png"]').fancybox
      padding: 10
      margin: 50
      loopo: false
      helpers:
        title:
          type: "over"
        overlay:
          showEarly: false
          css:
            background: "rgba(25, 25, 25, 0.80)"
    $(".fanxybox-media").fancybox
      padding: 10
      margin: 50
      loop: false
      helpers:
        media: {}
        title:
          type: "float"
        overlay:
          showEarly: false
          css:
            background: "rgba(25, 25, 25, 0.80)"
  */


}).call(this);
