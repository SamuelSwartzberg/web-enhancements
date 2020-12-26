// ==UserScript==
// @name         Globals
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.debugger) window.formerDebugger = window.debugger;
    window.debugger = {};
})();