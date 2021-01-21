// ==UserScript==
// @name         Imabi progress
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.imabi.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     let allChapters = document.querySelectorAll(".fw-nav-level-0 > li:nth-child(n+3):nth-child(-n+10) > ul > li");
    for (let i = 0; i < 4; i++){
       allChapters[i].style.backgroundColor = "#080";
    }
})();