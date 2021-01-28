// ==UserScript==
// @name         Globals
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

function getSelectionCoords(win) {
  win = win || window;
  var doc = win.document;
  var sel = doc.selection, range, rects, rect;
  var x = 0, y = 0;
  if (sel) {
    if (sel.type != "Control") {
      range = sel.createRange();
      range.collapse(true);
      x = range.boundingLeft;
      y = range.boundingTop;
    }
  } else if (win.getSelection) {
    sel = win.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0).cloneRange();
      if (range.getClientRects) {
        range.collapse(true);
        rects = range.getClientRects();
        if (rects.length > 0) {
          rect = rects[0];
        }
        x = rect.left;
        y = rect.top;
      }
      // Fall back to inserting a temporary element
      if (x == 0 && y == 0) {
        var span = doc.createElement("span");
        if (span.getClientRects) {
          // Ensure span has dimensions and position by
          // adding a zero-width space character
          span.appendChild(doc.createTextNode("\u200b"));
          range.insertNode(span);
          rect = span.getClientRects()[0];
          x = rect.left;
          y = rect.top;
          var spanParent = span.parentNode;
          spanParent.removeChild(span);

          // Glue any broken text nodes back together
          spanParent.normalize();
        }
      }
    }
  }
  return { x: x, y: y };
}

(function () {
  'use strict';
  if (window.debugger) window.formerDebugger = window.debugger;
  window.debugger = {};
  // integrate wiktionary popup
  document.addEventListener('keyup', (e) => {
    console.log(e);
    if (
      window.getSelection() 
      && window.getSelection().toString()
      && (
        !document.activeElement 
        || !document.activeElement.matches("input, textarea")
      )) {
      
      if (e.key === "w" || e.key === "p") {
        if (!document.querySelector("#iframe-popup")) {
          console.log("creating iframe");
          var wiktIframe = document.createElement("iframe");
          wiktIframe.height = "600"; wiktIframe.width = "400";
          wiktIframe.id = "iframe-popup";
        } else {
          console.log("already exists");
          var wiktIframe = document.querySelector("#iframe-popup");
        }
        wiktIframe.style.top = (getSelectionCoords().y + 22 + window.scrollY) + "px";
        wiktIframe.style.left = getSelectionCoords().x + "px";
        wiktIframe.style.display = "block";
        console.log(window.getSelection().toString());
        wiktIframe.src = `https://en.${e.key==="w"?"wiktionary":"wikipedia"}.org/wiki/` + window.getSelection().toString().toLowerCase() + "?iframe=true";
        document.body.appendChild(wiktIframe);
        console.log(wiktIframe);

      }
    }
  });

  // hiding wikt popup
  document.addEventListener('keyup', (e) => {
    console.log(e);
    let wiktIframe = document.querySelector("#iframe-popup");
    if (wiktIframe) {
      if (e.key === "Escape") {
        wiktIframe.style.display = "none";

      }
    }
  });
  
  document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(item=>item.classList.add("h-n"));

  // method to set modifier keys



  let modifierManager={
    modifiers: ["Alt", "Meta", "Control", "Shift" ],
    modifiersSet: {},
    toggleModifier: function(key){
      if (this.modifiers.includes(key)) this.modifiersSet[key] = true;
    },
    clearModifier: function(key){
      if (this.modifiers.includes(key)) this.modifiersSet[key] = false;
    },
    isModifier: function(key){
      return this.modifiers.includes(key);
    },
    isSet: function(key){
      return this.modifiersSet[key];
    }
  }

  
  

  // textmarker
  let selectionCounter = 0;
  document.addEventListener('keydown', (e) => {
    console.log(modifierManager.modifiersSet);
    if (modifierManager.isModifier(e.key)) modifierManager.toggleModifier(e.key);
    else{
      let selection = document.getSelection();
      if (e.key==="k" && modifierManager.isSet("Meta") &&selection && selection.toString()){
        if (selection.anchorNode===selection.focusNode&&selection.anchorNode.nodeName==="#text" ){
          let selectionStart = selection.anchorOffset<selection.focusOffset?selection.anchorOffset:selection.focusOffset;
          let selectionEnd = selection.anchorOffset>selection.focusOffset?selection.anchorOffset:selection.focusOffset;
          let beforeSelection = selection.baseNode.textContent .slice(0, selectionStart);
          let afterSelection = selection.baseNode.textContent .slice(selectionEnd);
          let replacer = document.createElement("span");
          replacer.innerHTML = `${beforeSelection}<mark class="selection-added selection-added-${selectionCounter}">${selection.toString()}</mark>${afterSelection}`
          selectionCounter++;
          selection.baseNode.replaceWith(replacer);
        }
        console.log(selection.toString());
      }
    }

  });

  document.addEventListener('keyup', (e) => {
    if (modifierManager.isModifier(e.key)) modifierManager.clearModifier(e.key);
  });

})();