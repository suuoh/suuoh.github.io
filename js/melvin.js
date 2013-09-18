/*!
 * melvin.io v1.6.0
 * Copyright 2013 Melvin Chien <hello@melvin.io> (http://melvin.io/)
 * Licensed under the MIT license
 */

(function() {
  $(document).ready(function() {
    $(this).foundation();
    $(".hexagon-one, .hexagon-three, .hexagon-five").hover((function() {
      return $(this).css("border-top", "86px solid rgba(266, 140, 0, 1.0)");
    }), function() {
      return $(this).css("border-top", "");
    });
    return $(".hexagon-two, .hexagon-four, .hexagon-six").hover((function() {
      return $(this).css("border-bottom", "86px solid rgba(266, 140, 0, 1.0)");
    }), function() {
      return $(this).css("border-bottom", "");
    });
  });

  $(window).resize(function() {
    var width;
    width = $(window).width() * 0.3;
    $("#js-hexagon").height(width);
    return $("#js-hexagon").width(width);
  });

  /*
    $('a[href^="#"]').click (e) ->
      e.preventDefault()
      id = $(@).attr("href")
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
