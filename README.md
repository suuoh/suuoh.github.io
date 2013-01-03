suuoh.com
=========

Resources
---------
[jQuery API](http://api.jquery.com)  
[jQuery UI API](http://api.jqueryui.com/category/all/)  
[Learn jQuery](http://learn.jquery.com)  
[Node.js](http://nodejs.org)  
[Google Chrome Developer Tools](http://developers.google.com/chrome-developer-tools/)  
[Carousel](http://twitter.github.com/bootstrap/examples/carousel.html)  
[Bootstrap](http://twitter.github.com/bootstrap/)  
[Bootswatch](http://bootswatch.com/)  
[BootstrapCDN](http://www.bootstrapcdn.com/)  
[Font Awesome](http://fortawesome.github.com/Font-Awesome/)  
[Improving 404](http://webdesign.tutsplus.com/articles/user-experience-articles/improving-404-page-design/)  
[mojombo.github.com](http://github.com/mojombo/mojombo.github.com)  
[jekyll](http://github.com/mojombo/jekyll)  
[Markdown](http://daringfireball.net/projects/markdown/)  
[GitHub Styleguide](https://github.com/styleguide)

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

````Javascript
if ( Object.prototype.toString.call( myArray ) === "[object Array]" ) {
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}
````
Source: <http://learn.jquery.com/javascript-101/testing-type/>  