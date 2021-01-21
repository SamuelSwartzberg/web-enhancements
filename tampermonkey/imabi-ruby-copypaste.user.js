// ==UserScript==
// @name         Allow copypasting of ruby in example sentences on IMABI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.imabi.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Some other site

function trimTags(htmlString){
    console.log(htmlString.innerHTML);
    var tempString = htmlString.innerHTML.replace(new RegExp("</?[abcdefghijklmopqstuvwxyz].*?>", "gim"), "");
    tempString = tempString.replace(new RegExp("/n", "gim"), "");
    return tempString;
}
prompt("copy", trimTags(window.getSelection().baseNode.closest("tr")));

// IMABI

var copyinterval = window.setInterval(()=>{
  document.querySelectorAll('.highlighter--highlighted').forEach((item, i) => {
    item.onclick = e => {
      let textItem = e.target.closest("font");
      let lineArr = textItem.innerHTML.split("<br>");
      let cleanedFirstLine = lineArr[0].trim().replace(/((<span class="highlighter--highlighted highlighter--hovered" style="background-color: cyan;" data-highlight-id="\d*">)|(<\/span>))/g,"");
      let jaExampleSentence = cleanedFirstLine.match(/^\d+\.\s(.*)$/)[1];
      prompt("copy", jaExampleSentence);
    }

  });
}, 100)

})();