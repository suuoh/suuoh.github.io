/*!
 * melvin.io v1.7.1
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
      var container, content, divider, footer, href, i, len, title, url, word;
      container = $("#js-container");
      content = $("#js-content");
      footer = $("#js-footer");
      divider = $("#js-hexagon");
      title = "melvin";
      href = e.value;
      href = href.replace(/^\//, "");
      href = href.replace(/\/$/, "");
      url = href.split("/");
      for (i = 0, len = url.length; i < len; i++) {
        word = url[i];
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
          title = word + " · " + title;
        }
      }
      $.address.title(title);
      if (href === "") {
        footer.fadeOut("500");
        content.fadeOut("500", function() {
          return container.hide();
        });
        return container.removeClass("active");
      } else {
        container.show();
        href = href.replace("/", "-");
        footer.fadeOut("250");
        return content.fadeOut("250", function() {
          return content.load("/" + href + ".html", function(response, status, xhr) {
            if (status === "error") {
              return window.location.replace("/" + href);
            } else {
              footer.fadeIn("500");
              content.fadeIn("2000");
              return container.addClass("active");
            }
          });
        });
      }
    });
  });

}).call(this);
