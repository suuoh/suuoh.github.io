delayedFadeIn = ->
  $("#js-navbar").fadeIn "2000"

$(document).ready ->
  # Initialize Foundation
  $(this).foundation()

  # Fade in navbar
  timeoutID = window.setTimeout delayedFadeIn, "1500"

  # Close expanded navbar when an item is clicked
  $("#js-navbar .name a, #js-navbar .top-bar-section a").click ->
    # Snippet taken from foundation.topbar.js:215
    topbar = $(".top-bar, [data-topbar]")
    topbar.css "height", ""
    topbar.removeClass "expanded"
    topbar.find("li").removeClass "hover"

  # Add jQuery Address handler for navbar links
  $("#js-navbar a").address ->
    $(this).attr("href").replace /^#/, ""

  # Load appropriate data
  $.address.change (event) ->
    container = $("#js-container")
    footer = $("#js-footer")
    if event.value is "/"
      $("html, body").animate
        scrollTop: 0,
        300, ->
          footer.fadeOut "500"
          container.fadeOut "500", ->
            container.html ""
    else
      container.fadeOut "500", ->
        container.load event.value + ".html"
        container.fadeIn "500"
        footer.fadeIn "500"

$(window).resize ->
  # Hexagon height is 175px, Navbar height is 45px
  $(".hexagon").css "margin-top", $(window).height() / 2 - 175 / 2 - 45
  $(".hexagon").css "margin-bottom", $(window).height() / 2 - 175 / 2 - 45
###
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
###