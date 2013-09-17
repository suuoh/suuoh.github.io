$(document).ready ->
  $(@).foundation()
###
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
###