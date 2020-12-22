// ==UserScript==
// @name         Hide tasks before they are doable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://calendar.google.com/calendar/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const HOURS_IN_MILLIS = 60 * 60 * 1000;
    const DAYS_IN_MILLIS = 24 * HOURS_IN_MILLIS;
    const WEEKS_IN_MILLIS = 7 * DAYS_IN_MILLIS;
    window.deferDebugger ={};
    window.setInterval(hideDeferred, 350);
    function hideDeferred() {
        let hideableArray = Array.from(document.querySelectorAll('.ynRLnc')).filter(el => {
            if (el && el.childNodes && el.childNodes[0] && el.childNodes[0].nodeName === "#text" && el.childNodes[0].textContent){
                return el.childNodes[0].textContent.includes('hbf');
            } else return false;
        })

        for (let spanElement of hideableArray) {
            let textArray = spanElement.textContent.split("hbf"); //We don't care about anything before hbf, that's only the task name
            if(!textArray || textArray.length === 0 || textArray.length===1) continue;
            let taskName = textArray[0];
            if (!window.deferDebugger[taskName]) window.deferDebugger[taskName] = {};
            let commaValueArray = textArray[1].split(","); //The first element will contain our hbf, the last two our date values
            if (!commaValueArray[1]) continue; // There are no commas to split, we're in the wrong span
            let durationString = commaValueArray[0].match(/^\d+\w?/g); // duration comes directly after hbf
            console.log(taskName + ":" + durationString);
            window.deferDebugger[taskName].durationString=durationString;
            if (Array.isArray(durationString)) durationString = durationString[0];
            window.deferDebugger[taskName].durationString=durationString;
            let durationType = "days";
            if (durationString[durationString.length-1]==="h"){
                durationType = "hours";
                durationString = durationString.slice(0, -1);
            };
            let duration = Number(durationString);
            window.deferDebugger[taskName].duration=duration;
            let dateString = commaValueArray[commaValueArray.length-2].trimLeft() + commaValueArray[commaValueArray.length-1]; //last two values are date values because (Month Date, Year) was split on the comma
            let dueDate = new Date(dateString);
            let hourSpecifier = spanElement.parentNode.querySelector(".A6wOnd");
            if (hourSpecifier){
                dueDate.setHours(hourSpecifier.textContent.split(":")[0]);
                dueDate.setMinutes(hourSpecifier.textContent.split(":")[1]);
            }
            window.deferDebugger[taskName].dueDate=dueDate;
            let currentDate = new Date();
            window.deferDebugger[taskName].currentDate=currentDate;
            let showAfter = new Date(dueDate.getTime());
            window.deferDebugger[taskName].showAfterBeforeMod=showAfter.toUTCString();
            window.deferDebugger[taskName].durationTypeIsHours=durationType === "hours";
            let durationUTCMillis = durationType === "hours" ? duration * HOURS_IN_MILLIS : duration * DAYS_IN_MILLIS;
            window.deferDebugger[taskName].durationUTCMillisInHours=durationUTCMillis/HOURS_IN_MILLIS;
            showAfter.setTime(showAfter.getTime() - durationUTCMillis);
            window.deferDebugger[taskName].showAfter=showAfter;
            window.deferDebugger[taskName].hoursUntilShown=(showAfter.getTime()-currentDate.getTime())/HOURS_IN_MILLIS;
            if(!(currentDate>showAfter)){
                spanElement.closest("[data-opens-details]").style.display="none";
            }
        }}

})();
