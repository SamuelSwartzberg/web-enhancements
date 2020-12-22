// ==UserScript==
// @name         Wikt feature supplement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://en.wiktionary.org/wiki/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll(".Jpan.headword").forEach( item => {
        let rubytext = "";
        for (let node of item.childNodes){
            if (node.nodeName.includes("#text")) rubytext+=node.textContent;
            if (node.nodeName.includes("RUBY")){
                let rtchild = node.querySelector("rt");
                rtchild.innerHTML = rtchild.textContent;
                rubytext +=node.innerHTML;
            }
        }
        item.onclick = e => {
            window.prompt("Copy ruby text", item.innerHTML);
        }
    });
})();