// ==UserScript==
// @name         Yearly month assignment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://calendar.google.com/calendar/r/yea*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let themedMonthArray = [
  {
    startdate: 20200601,
    length: 2,
    color: '#ddfff7',
    name: 'Job related todos, uni and 🇯🇵 prep in KND'
  }, {
    startdate: 20200801,
    length: 2,
    color: '#ffdddd',
    name: '🇯🇵 courses, tandem, etc. as well as BA Arbeit in MUC'
  }, {
    startdate: 20201001,
    length: 3,
    color: '#ffdddd',
    name: '🇯🇵 courses, tandem, etc. in MUC'
  }, {
    startdate: 20210101,
    length: 6,
    color: '#f7e3f7',
    name: 'TBD, perhaps 🇯🇵'
  }, {
    startdate: 20210701,
    length: 6,
    color: '#d6f7ff',
    name: 'World travel for understanding & living place discovery',
    note: 'After Corona, maybe travel the world (not alone, of course): If I want to decide where to live, I need to know the world, and currently, I just don’t. This would involve intensive documentation in form of diary entries (and maybe more public articles), photos, etc., to make sure I remember and I have resources to judge. But make sure to not travel alone!'
  }
];
window.setInterval(() => {
  for (let themedMonth of themedMonthArray) {
    for (var i = 0; i < themedMonth.length; i++) {
      let month = document.querySelector('[role="main"] [data-month="' + (themedMonth.startdate + (i * 100)) + '"]');
      if (month && month.childNodes[0].tagName !== 'HEADER') {
        let header = document.createElement('header');
        header.style = 'text-align: center; padding: 1em 0 0.5em 0; ';
        let headerText = document.createElement('div');
        headerText.style = 'font-size: 1.2em; font-weight: bold; padding-bottom: 0.5em;';
        headerText.textContent = themedMonth.name;
        header.appendChild(headerText);
        if (themedMonth.note && i === 0) {
          let noteText = document.createElement('div');
          noteText.textContent = themedMonth.note;
          header.appendChild(noteText);
        }
        month.prepend(header);
        month.style = 'background-color: ' + themedMonth.color + '; margin: 0.5rem; border-radius: 0.25rem;';
      }
    }
  }
}, 1000);

})();