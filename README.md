suuoh.com
=========

About
-----
Welcome to the GitHub project for my website! I love learning as I go, so this README is where I save cool or interesting resources that I find for future use!

License
-------

All files and their content in the following directories are Copyright 2013 Melvin Chien:
* blog/
* images/
* about.html
* portfolio.html

All other files and their content are licensed under the [Creative Commons Attribution-NonCommercial 3.0 license](http://creativecommons.org/licenses/by-nc/3.0/), unless otherwise stated.

Resources
---------
[jQuery API](http://api.jquery.com)  
[jQuery UI API](http://api.jqueryui.com/category/all/)  
[Learn jQuery](http://learn.jquery.com)  
[Node.js](http://nodejs.org)  
[Google Chrome Developer Tools](http://developers.google.com/chrome-developer-tools/)  
[Bootstrap](http://twitter.github.com/bootstrap/)  
[Bootswatch](http://bootswatch.com/)  
[BootstrapCDN](http://www.bootstrapcdn.com/)  
[Font Awesome](http://fortawesome.github.com/Font-Awesome/)  
[Improving 404](http://webdesign.tutsplus.com/articles/user-experience-articles/improving-404-page-design/)  
[mojombo](http://github.com/mojombo/mojombo.github.com)  
[jekyll](http://github.com/mojombo/jekyll)  
[Markdown](http://daringfireball.net/projects/markdown/)  
[GitHub Styleguide](http://github.com/styleguide)  
[fancyBox](http://fancyapps.com/fancybox/)  
[adamralph](http://github.com/adamralph/adamralph.github.com)  
[Mike West's My Jekyll Fork](http://mikewest.org/2009/11/my-jekyll-fork)  

Snippets
--------

````Javascript
// Callback without arguments
$.get( "myhtmlpage.html", myCallBack );

// Callback with arguments
$.get( "myhtmlpage.html", function() {
    myCallBack( param1, param2 );
});
````
Source: <http://learn.jquery.com/about-jquery/how-jquery-works/>  

````Javascript
var stuffToDo = {
    bar: function() {
        alert("the value was bar -- yay!");
    },

    "baz" : function() {
        alert("boo baz :(");
    },

    "default" : function() {
        alert("everything else is just ok");
    }
};

if ( stuffToDo[foo] ) {
    stuffToDo[ foo ]();
} else {
    stuffToDo["default"]();
}
````
Source: <http://learn.jquery.com/javascript-101/conditional-code/>  