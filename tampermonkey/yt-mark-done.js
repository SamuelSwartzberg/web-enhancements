// ==UserScript==
// @name         yt done
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  let donearray = ["v=h2dHqdvXsys","v=OseOb_wBsi4", "v=cG5zKwmXLgo", "QeAKX_0wZWY"];
  if (donearray.some(item => document.URL.includes(item))) document.querySelector("#page-manager").classList.add("learn-done");
})();