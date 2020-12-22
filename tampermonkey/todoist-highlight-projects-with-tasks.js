// ==UserScript==
// @name         Highlight Elements Todoist
// @namespace    nonverb.al
// @version      0.1
// @description  Highlights Elements with tasks
// @author       Samuel Swartzberg
// @match        https://todoist.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
$.noConflict();

    window.onkeyup = function(e) {
        if (e.keyCode = 192){
            var menuItems = jQuery(".menu_clickable");
            for (var i = 0; i < menuItems.length; i++) {
                var taskCountItem = jQuery(menuItems[i]).find(".counter_count")[0];
                if(taskCountItem){
                    var taskCount = taskCountItem.textContent;
                    if (taskCount && taskCount.length > 0) {
                        jQuery(taskCountItem).closest(".menu_clickable").css("background-color", "#ffff84");
                    }
                }
            }
        }
    }
