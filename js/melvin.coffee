$(document).ready ->
  # Initialize Foundation
  $(this).foundation()

  # Fade in navbar
  timeoutID = window.setTimeout(->
    $("#js-navbar").fadeIn "2000"
  , "1500")

  # Add background to navbar if page is scrolled down
  $(window).scroll ->
    if $(this).scrollTop() > 120
      $(".top-bar").removeClass "top-bar-clear"
    else
      $(".top-bar").addClass "top-bar-clear"

  $("#js-navbar .name a, #js-navbar .top-bar-section a").click ->
    topbar = $(".top-bar, [data-topbar]")

    # Fix for collapsed navbar staying fixed to the top of the window
    # Snippet taken from foundation.topbar.js:60
    topbar.removeClass "fixed"
    topbar.parent().addClass "fixed"
    $("body").addClass "f-topbar-fixed"

    # Close expanded navbar when an item is clicked
    # Snippet taken from foundation.topbar.js:215
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
    href = event.value.trim()
    href = href.replace /^\//, ""
    href = href.replace /\/$/, ""
    url = href.split "/"
    container = $("#js-container")
    footer = $("#js-footer")
    divider = $("#js-divider")
    hexagon = $("#js-hexagon")
    # arrow = $("#js-scroll-arrow")

    # Set page title
    for i of url
      word = url[i]
      if word isnt ""
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
      hexagon.show()
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
        container.load "/" + href + ".html", (response, status, xhr) ->
          if status is "error"
            window.location.replace "/" + href
          else
            divider.fadeIn "500"
            container.fadeIn "500", =>
              if hexagon.is(":visible")
                $("html, body").animate
                  scrollTop: $(this).position().top + 600 - 45,
                  500, ->
                    hexagon.hide()
            footer.fadeIn "500"

###
$(window).resize ->
  # Hexagon height is 175px, Navbar height is 45px
  $(".hexagon").css "margin-top", $(window).height() / 3 - 175 / 2 - 45
  $(".hexagon").css "margin-bottom", $(window).height() / 2 - 175 / 2 - 45

  width = $(window).width() * 0.3
  $("#js-hexagon").height width
  $("#js-hexagon").width width
###