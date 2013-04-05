melvin.io
=========

About
-----
Welcome to the GitHub project for my website! I love learning as I go, so this README is where I save cool or interesting resources that I find for future use!

License
-------
All following files, directories, and their contents are Copyright 2013 Melvin Chien with all rights reserved:
* blog/
* images/
* about.html
* portfolio.html

Licenses for all files can be found in the [LICENSES](/LICENSES.md) file.

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
[tha](http://tha.jp/)  
[Why Informatics](http://www.soic.indiana.edu/prospective/_doc/why-info-groth.pdf)  
[Lazy Load](http://www.appelsiini.net/projects/lazyload)  
[10 JavaScript MVC Frameworks](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)  
[Bootstrap Tour](http://sorich87.github.com/bootstrap-tour/)  
[cdnjs](http://cdnjs.com/)  
[CoffeeScript](http://coffeescript.org/)  
[LESS](http://lesscss.org/)  
[Node](http://nodejs.org/)  
[AngularJS](http://angularjs.org/)  


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