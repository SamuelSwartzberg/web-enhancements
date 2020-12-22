// ==UserScript==
// @name          Google clickbait highlighting
// @description   include jQuery and make sure window.$ is the content page's jQuery version, and this.$ is our jQuery version.
// @version       0.0.1
// @author        Sam
// @match         *://*.google.de/*
// @require       https://code.jquery.com/jquery-3.3.1.min.js
// @grant         none
// ==/UserScript==

(function ($, undefined) {
  $(function () {
      $(".r").each(
          function(indexJQ, elementJQ){
              var elementJQized = $(elementJQ);
              if(elementJQized && elementJQized[0] && elementJQized[0].innerText && hasNumber(elementJQized[0].innerText) ){
                  elementJQized.addClass("highlight-sam-grey");
              }
          }
      );

      function hasNumber(myString) {
          return /\d/.test(myString);
      }
  });
})(window.jQuery.noConflict(true));
