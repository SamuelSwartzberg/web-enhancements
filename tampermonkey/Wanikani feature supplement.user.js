// ==UserScript==
// @name         Wanikani feature supplement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.wanikani.com/vocabulary/*
// @grant        none
// @run-at       document-idle

// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let word = document.querySelector(".vocabulary-icon").textContent.trim();
    document.querySelector(".individual-item h1").innerHTML+=`<a href='https://jisho.org/search/${word}' target='_blank'>Jisho</a>`;
})();