// ==UserScript==
// @name         Google Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keyup', (e) => {
        console.log(e);
        if(!document.activeElement.matches("[title='Search']")){
            if (e.key === "i"){
            document.querySelector("[href*='tbm=isch']").click();
            }
        }
        });
})();