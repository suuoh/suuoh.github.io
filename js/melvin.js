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
      topbar = $(".top-bar, [data-topbar]");
      topbar.removeClass("fixed");
      topbar.parent().addClass("fixed");
      $("body").addClass("f-topbar-fixed");
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
      href = event.value.trim();
      href = href.replace(/^\//, "");
      href = href.replace(/\/$/, "");
      url = href.split("/");
      container = $("#js-container");
      footer = $("#js-footer");
      divider = $("#js-divider");
      for (i in url) {
        word = url[i];
        if (word !== "") {
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
          return container.load("/" + href + ".html", function(response, status, xhr) {
            var _this = this;
            if (status === "error") {
              return window.location.replace("/" + href);
            } else {
              divider.fadeIn("500");
              container.fadeIn("500", function() {
                return $("html, body").animate({
                  scrollTop: $(_this).position().top + 330 - 45
                }, 500);
              });
              return footer.fadeIn("500");
            }
          });
        });
      }
    });
  });

  /*
  $(window).resize ->
    # Hexagon height is 175px, Navbar height is 45px
    $(".hexagon").css "margin-top", $(window).height() / 3 - 175 / 2 - 45
    $(".hexagon").css "margin-bottom", $(window).height() / 2 - 175 / 2 - 45
  
    width = $(window).width() * 0.3
    $("#js-hexagon").height width
    $("#js-hexagon").width width
  */


}).call(this);
