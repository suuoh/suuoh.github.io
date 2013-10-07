/*!
 * melvin.io v1.7.0
 * Copyright © 2013 Melvin Chien <hello@melvin.io> (http://melvin.io/)
 * Licensed under the MIT license
 */

(function() {
  $(document).ready(function() {
    $(this).foundation();
    $("#js-navbar .name a, #js-navbar .top-bar-section a").click(function() {
      var topbar;
      topbar = $(".topbar, [data-topbar]");
      topbar.removeClass("fixed");
      topbar.parent().addClass("fixed");
      $("body").addClass("f-topbar-fixed");
      topbar.css("height", "");
      topbar.removeClass("expanded");
      return topbar.find("li").removeClass("hover");
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 45) {
        return $(".top-bar").removeClass("top-bar-clear");
      } else {
        return $(".top-bar").addClass("top-bar-clear");
      }
    });
    $("#js-navbar, #js-container").on("click", ".deep-link", function(e) {
      var href;
      e.preventDefault();
      href = $(this).attr("href");
      href = href.replace(/^#/, "");
      href = href.replace("-", "/");
      return $.address.value(href);
    });
    return $.address.change(function(e) {
      var container, content, divider, footer, href, title, url, word, _i, _len;
      container = $("#js-container");
      content = $("#js-content");
      footer = $("#js-footer");
      divider = $("#js-hexagon");
      title = "melvin";
      href = e.value;
      href = href.replace(/^\//, "");
      href = href.replace(/\/$/, "");
      url = href.split("/");
      for (_i = 0, _len = url.length; _i < _len; _i++) {
        word = url[_i];
        if (word !== "") {
          switch (word) {
            case "anteaternetwork":
              word = "Anteater Network";
              break;
            case "jmmp":
              word = "JMMP";
              break;
            case "alienescape":
              word = "Alien Escape";
              break;
            default:
              word = word.charAt(0).toUpperCase() + word.slice(1);
          }
          title = word + " . " + title;
        }
      }
      $.address.title(title);
      if (href === "") {
        content.fadeOut("500", function() {
          return container.hide();
        });
        return container.removeClass("active");
      } else {
        container.show();
        href = href.replace("/", "-");
        return content.fadeOut("250", function() {
          return content.load("/" + href + ".html", function(response, status, xhr) {
            if (status === "error") {
              return window.location.replace("/" + href);
            } else {
              content.fadeIn("2000");
              return container.addClass("active");
            }
          });
        });
      }
    });
  });

}).call(this);
