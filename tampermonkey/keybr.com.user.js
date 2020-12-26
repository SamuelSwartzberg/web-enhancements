// ==UserScript==
// @name         keybr.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.keybr.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.setTimeout(function() {
        document.querySelector("[title='Switch layout']").click();
    document.querySelector("[title='Switch layout']").click();
}, 900);

})();