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

  # Bind event handler to selected links for jQuery Address
  $("#js-navbar, #js-container").on "click", ".deep-link", (event) ->
    href = $(this).attr("href")
    href = href.replace /^#/, ""
    href = href.replace "-", "/"
    $.address.value href
    event.preventDefault()

  # Parse link and load selected data with smooth transitions
  $.address.change (event) ->
    title = "melvin"
    href = event.value.replace /^\//, ""
    url = href.split "/"
    container = $("#js-container")
    footer = $("#js-footer")
    divider = $("#js-divider")
    # arrow = $("#js-scroll-arrow")

    # Set page title
    for i of url
      word = url[i]
      if word is "anteaternetwork"
        word = "Anteater Network"
      else if word is "jmmp"
        word = "JMMP"
      else if word is "alienescape"
        word = "Alien Escape"
      else
        word = word.charAt(0).toUpperCase() + word.slice 1
      title = word + " · " + title
    $.address.title title

    # Load data with transitions
    if href is ""
      $("html, body").animate
        scrollTop: 0,
        500, ->
          footer.fadeOut "500"
          # arrow.fadeOut "200"
          divider.fadeOut "500"
          container.fadeOut "500", ->
            container.html ""
    else
      href = href.replace "/", "-"
      # arrow.fadeIn "200"
      container.fadeOut "500", ->
        container.load "/" + href + ".html", ->
          divider.fadeIn "500"
          container.fadeIn "500", =>
            console.log $(this)
            $("html, body").animate
              scrollTop: $(this).position().top - 45,
              500
          footer.fadeIn "500"

delayedFadeIn = ->
  $("#js-navbar").fadeIn "2000"

# $(window).resize ->
  # Hexagon height is 175px, Navbar height is 45px
  # $(".hexagon").css "margin-top", $(window).height() / 3 - 175 / 2 - 45
  # $(".hexagon").css "margin-bottom", $(window).height() / 2 - 175 / 2 - 45
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