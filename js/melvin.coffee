$(document).ready ->
  # Initialize Foundation
  $(this).foundation()

  # Fixes for Foundation's mobile navbar
  $("#js-navbar .name a, #js-navbar .top-bar-section a").click ->
    topbar = $(".topbar, [data-topbar]")

    # Make mobile navbar stay fixed to top of window
    # Code from foundation.topbar.js:60
    topbar.removeClass "fixed"
    topbar.parent().addClass "fixed"
    $("body").addClass "f-topbar-fixed"

    # Close expanded navbar after an item is clicked
    # Code from foundation.topbar.js:215
    topbar.css "height", ""
    topbar.removeClass "expanded"
    topbar.find("li").removeClass "hover"

  # Add background to navbar if page is scrolled down
  $(window).scroll ->
      if $(this).scrollTop() > 45
        $(".top-bar").removeClass "top-bar-clear"
      else
        $(".top-bar").addClass "top-bar-clear"

  # Bind jQuery Address deep link click event handler
  $("#js-navbar, #js-container").on "click", ".deep-link", (e) ->
    e.preventDefault()
    href = $(this).attr "href"
    # Remove hashes
    href = href.replace /^#/, ""
    # Replace hyphens with forward slash
    href = href.replace "-", "/"
    # Set new address
    $.address.value href

  # Bind jQuery Address address change event handler
  $.address.change (e) ->
    container = $("#js-container")
    content = $("#js-content")
    footer = $("#js-footer")
    divider = $("#js-hexagon")
    title = "melvin"
    href = e.value
    # Remove leading forward slash
    href = href.replace /^\//, ""
    # Remove trailing forward slash
    href = href.replace /\/$/, ""
    url = href.split "/"

    # Set new page title
    for word in url
      if word isnt ""
        switch word
          when "anteaternetwork"
            word = "Anteater Network"
          when "jmmp"
            word = "JMMP"
          when "alienescape"
            word = "Alien Escape"
          else
            word = word.charAt(0).toUpperCase() + word.slice 1
        title = word + " . " + title
    $.address.title title

    # Load appropriate content
    if href is ""
      content.fadeOut "500", ->
        container.hide()
      container.removeClass "active"
    else
      container.show()
      href = href.replace "/", "-"
      content.fadeOut "250", ->
        content.load "/" + href + ".html", (response, status, xhr) ->
          if status is "error"
            # Redirect to page without hashtag (which then redirects to 404)
            window.location.replace "/" + href
          else
            content.fadeIn "2000"
            container.addClass "active"

