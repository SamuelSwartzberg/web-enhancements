// ==UserScript==
// @name         Resize Khanacademy Video Player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.khanacademy.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     window.setInterval(function(){var selectorForModal = document.querySelectorAll("div>div>div>div>div>div>div>div>span>div>div>div>div>div");selectorForModal[selectorForModal.length-1].setAttribute('style', 'max-height:3000px !important');}, 500);
})();