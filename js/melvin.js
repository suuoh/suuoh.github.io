/*!
 * melvin.io v1.6.0
 * Copyright © 2013 Melvin Chien <hello@melvin.io> (http://melvin.io/)
 * Licensed under the MIT license
 */

(function() {
  $(document).ready(function() {
    var timeoutID;
    $(this).foundation();
    timeoutID = window.setTimeout(function() {
      return $("#js-navbar").fadeIn("2000");
    }, "1500");
    $(window).scroll(function() {
      if ($(this).scrollTop() > 550) {
        return $(".top-bar").removeClass("top-bar-clear");
      } else {
        return $(".top-bar").addClass("top-bar-clear");
      }
    });
    $("#js-navbar .name a, #js-navbar .top-bar-section a").click(function() {
      var topbar;
      topbar.removeClass("fixed");
      topbar.parent().addClass("fixed");
      $("body").addClass("f-topbar-fixed");
      topbar = $(".top-bar, [data-topbar]");
      topbar.css("height", "");
      topbar.removeClass("expanded");
      return topbar.find("li").removeClass("hover");
    });
    $("#js-navbar, #js-container").on("click", ".deep-link", function(event) {
      var href;
      href = $(this).attr("href");
      href = href.replace(/^#/, "");
      href = href.replace("-", "/");
      $.address.value(href);
      return event.preventDefault();
    });
    return $.address.change(function(event) {
      var container, divider, footer, href, i, title, url, word;
      title = "melvin";
      href = event.value.replace(/^\//, "");
      url = href.split("/");
      container = $("#js-container");
      footer = $("#js-footer");
      divider = $("#js-divider");
      for (i in url) {
        word = url[i];
        if (word === "anteaternetwork") {
          word = "Anteater Network";
        } else if (word === "jmmp") {
          word = "JMMP";
        } else if (word === "alienescape") {
          word = "Alien Escape";
        } else {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        title = word + " · " + title;
      }
      $.address.title(title);
      if (href === "") {
        return $("html, body").animate({
          scrollTop: 0
        }, 500, function() {
          footer.fadeOut("500");
          divider.fadeOut("500");
          return container.fadeOut("500", function() {
            return container.html("");
          });
        });
      } else {
        href = href.replace("/", "-");
        return container.fadeOut("500", function() {
          return container.load("/" + href + ".html", function() {
            var _this = this;
            divider.fadeIn("500");
            container.fadeIn("500", function() {
              return $("html, body").animate({
                scrollTop: $(_this).position().top - 45
              }, 500);
            });
            return footer.fadeIn("500");
          });
        });
      }
    });
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
