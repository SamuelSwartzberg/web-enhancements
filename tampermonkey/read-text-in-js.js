// ==UserScript==
// @name         Read text in js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let time1;
    document.addEventListener('keyup', (e) => {

        if (e.code === "Digit2"){
            console.log(e);
            if(time1!==0 && time1+300 >= Date.now()){
                time1=0;
                let selection = window.getSelection();
                Array.from(selection.extentNode.children).forEach(item=>{
                  if (item.nodeName==="RUBY"){
                      Array.from(item.children).forEach(child=>child.outerHTML="");
                  }
                })
                let relevantText = selection.extentNode.innerHTML.split("<br>")[0].replace(/<[^>]*>?/gm, '');
                var msg = new SpeechSynthesisUtterance();
                msg.text = relevantText;
                msg.lang="ja";
                window.speechSynthesis.speak(msg);

            } else{
                time1=Date.now();
            }

        }
});
})();