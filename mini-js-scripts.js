//Bookmarklet: Scroll up on fb messenger

javascript:(function()%7Bconst%20END_DELAY%3D2%3Bconst%20MSG_AREA%3D%22.uiScrollableArea%5Btabindex%3D%5C%220%5C%22%5D%22%3Bconst%20SCROLL_AREA%3DMSG_AREA%2B%22%20.scrollable%22%3Bconst%20BUSY_ICON%3DMSG_AREA%2B%22%20i%5Baria-busy%3D%5C%22true%5C%22%5D%22%3Bfunction%20showStatusWindow()%7Bconst%20WANT_W%3D300%3Bconst%20WANT_H%3D200%3Bconst%20sizer%3Ddocument.querySelector(%22html%22)%3Bconst%20w%3Dsizer.clientWidth%3Bconst%20h%3Dsizer.clientHeight%3Blet%20x%3D0%3Bif(w%3EWANT_W)%7Bx%3D(w-WANT_W)/2%3B%7Dlet%20y%3D0%3Bif(h%3EWANT_H)%7By%3D(h-WANT_H)/3%3B%7Dlet%20div%3Ddocument.createElement(%22div%22)%3Bdiv.id%3D%22status-window%22%3Bdiv.style.direction%3D%22ltr%22%3Bdiv.style.position%3D%22fixed%22%3Bdiv.style.zIndex%3D%22999999%22%3Bdiv.style.left%3Dx%2B%22px%22%3Bdiv.style.width%3DWANT_W%2B%22px%22%3Bdiv.style.top%3Dy%2B%22px%22%3Bdiv.style.height%3DWANT_H%2B%22px%22%3Bdocument.body.insertAdjacentElement(%22afterbegin%22,div)%3Blet%20edit%3Ddocument.createElement(%22textarea%22)%3Bedit.style.width%3D%22100%25%22%3Bedit.style.height%3D%22100%25%22%3Bedit.style.color%3D%22%23fff%22%3Bedit.style.backgroundColor%3D%22%23425f9c%22%3Bdiv.appendChild(edit)%3Bwindow.g_logger%3Dedit%3B%7Dfunction%20hideStatusWindow()%7Bdocument.querySelectorAll(%22%23status-window%22).forEach(item%3D%3Edocument.body.removeChild(item))%3Bdelete%20window.g_logger%3Bdelete%20window.abortNow%3Bdelete%20window.scrollingNow%3Bif(!!window.navto)%7Bwindow.location.assign(window.navto)%3Bdelete%20window.navto%3B%7D%7Dfunction%20myLog(s)%7Bconsole.log(s)%3Bif(!window.g_logger)%7BshowStatusWindow()%3B%7Dwindow.g_logger.value%3Ds%2B%22%5Cn%22%2Bwindow.g_logger.value%3B%7Dfunction%20endSession()%7Bwindow.setTimeout(hideStatusWindow,END_DELAY*1000)%3B%7Dfunction%20scroll()%7Bif(window.abortNow)%7Breturn%3B%7Ddocument.querySelectorAll(SCROLL_AREA).forEach(item%3D%3Eitem.scrollTop%3D0)%3B%7Dfunction%20isWaiting()%7Breturn!!document.querySelector(BUSY_ICON)%3B%7Dfunction%20wait(reset)%7Bif(isWaiting())%7Bwindow.setTimeout(()%3D%3Ewait(true),100)%3B%7Delse%7Bstart(reset)%3B%7D%7Dfunction%20start(reset)%7Bif(reset)%7Bwindow.x%3D0%3B%7Delse%7B%2B%2Bwindow.x%3B%7Dif(window.x%3E4)%7BendSession()%3Breturn%3B%7Dscroll()%3Bwindow.setTimeout(()%3D%3Ewait(false),100)%3B%7Dfunction%20main()%7Bif(!document.querySelector(SCROLL_AREA))%7BmyLog(%22Attempting%20to%20go%20to%20Facebook%20Messenger.%22)%3Bwindow.navto%3D%22https://www.facebook.com/messages/%22%3BendSession()%3B%7Delse%20if(window.scrollingNow)%7BmyLog(%22Aborting...%22)%3Bwindow.abortNow%3Dtrue%3B%7Delse%7Bwindow.abortNow%3Dfalse%3Bwindow.scrollingNow%3Dtrue%3Bstart(true)%3B%7D%7Dmain()%3B%7D)()%3B

//Bookmarklet: Collaps all todoist

javascript:void(Array.from(document.getElementById("editor").getElementsByClassName("arrow down")).forEach(arrow=>arrow.click()));

//Bookmarklet: Change the video speed.

javascript: var v = document.querySelector("video"); var t = prompt("Set the playback rate"); v.playbackRate = parseFloat(t)

//Bookmarklet: Open iframe video in new window (seems not to work)

javascript: var v = document.querySelector("iframe");window.open(v.src);

//Open all links underneath an element with an ID of open
$("#open a").each(
  function (i,e){
    console.log(e.href);
    window.open(e.href)
  }
)

//Google App Script: reset a checklist
function resetChecklist() {
  SpreadsheetApp.getActiveSheet().getRange('A1:A').setValue('FALSE');
}

//Google App Script: reset a checklist if A1 is checked (A1 is here meant to be a reset toggle)

function resetChecklist() {
  var reset = SpreadsheetApp.getActiveSheet().getRange('A1:A1').getValue();
  Logger.log(reset);
  if (reset){
      SpreadsheetApp.getActiveSheet().getRange('A2:A').setValue('FALSE');
  }
}

//Create list of items with their text and their link, formatted like so: text (link)
//For use on todoist, choose a specific indentation
var s = "";
jQuery(".indent_3,.indent_4").each(
  function(index, element){
    addTextContent(element, true);
  }
);
s;

function addTextContent(element, withLink){
  s += element.textContent;
  link = jQuery(element).find("a")[0];
  if(withLink && !!link){
    s = s + " (" + link.href + ")";
  }
  s += "\n";

}

//Tampermonkey: remind me to backup draw.io
// ==UserScript==
// @name         Drawio Backup Reminder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.draw.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var timer = window.setInterval(function (){
alert("Save & create an XML backup copy.");
    }, 900000)
})();

//Generate a random number as the body of a html document every x ms
Name the PAO Interval until finished! More than 3 misses is again.
<div id="insertPAONumber"><div style="font-size: 70pt !important; color: #582207;"> 47 </div></div>
<div id="insertPreviousPAOMember" style="font-size: 1.5em !important;margin-top: 1 em;">Broly; beating up; Green Hair</div>
<script type="text/javascript">
var paoEnumPersistent = {
"00": "Kirito Kazuto; dual-wielding; Dual Swords",
"10": "Prof X (X=10:); mindreading; a school",
"20": "Ben Kenobi; mourning; a burned corpse",
"30": "Makise Kurisu; tsundereing; a labcoat",
"40": "Death Knight; reanimating; a ghoul",
"50": "Gilgamesh (Evil Knight); portal-summoning; a thousand weapons",
"60": "Rook; leading; A caravan of refugees",
"70": "Genghis Khan; conquering; a horse",
"80": "HK-47:; slaughtering; some meatbags",
"90": "Shinichi Kudo; deducing; a fishing line",
"01": "B Franklin (The first american); discovering; A key and a kite",
"11": "Avatar Aang; airbending; A kitestaff",
"21": "Barry Allen; outrunning; death",
"31": "Mikasa Ackerman; sacrificing; AoT Swords",
"41": "Joan d'arc; inspiring; male armor",
"51": "EA; selling; DLCs",
"61": "Rayquaza; electrocuting; a pokeball",
"71": "Garrus; wisecracking; their commanding officer",
"81": "Haibara, Ai; fleeing; a shadowy organization",
"91": "SI7 Agent; toasting; a playing card",
"02": "King Bradley (Wrath); seething; Philosophers stone",
"12": "Aaron Burr; duelling; A letter",
"22": "Bigby wolf; beating ... to a pulp; a toadman",
"32": "Majin Buu; exploding; sweets",
"42": "Darth Bane; establishing; the rule of two",
"52": "Emperor Bonaparte; invading; Russia",
"62": "Ramsay Bolton; flaying; someone on a St. Andrews Cross",
"72": "Gaius Baltar; lying; a imaginary friend",
"82": "HarBinger; assuming direct control of; a walking insect",
"92": "Símon Bolivar; liberating; South america",
"03": "Kogoro Mouri; sleeping; A bottle of beer",
"13": "Angela Merkel; mollifying; a diamond",
"23": "Batman; threatening; batarangs",
"33": "Madoka Magica; erasing; all witches",
"43": "Darth Maul; hating; a jedi",
"53": "Eminem; rapping; a mixtape",
"63": "Roy Mustang; incinerating; Gloves",
"73": "GM; rolling; 5d20:",
"83": "Her Majesty (Queen Eliz); scowling at; the british isles",
"93": "Sade, Marquis de; consuming; a whip",
"04": "Khal Drogo; riding; A loincloth",
"14": "Artoo D2; beeping; A torch",
"24": "Big Daddy; protecting; Little Sisters",
"34": "Monkey D. Luffy; stretching; Strawhat",
"44": "Didier Drogba; scoring; a hattrick",
"54": "Edda; dating; a philosophy paper",
"64": "Rick Deckard; understanding; a leather jacket",
"74": "God; creating; a man and a woman",
"84": "Hamlet (Denmark); soliloquizing; a skull",
"94": "Satan / The Devil; seducing; a woman",
"05": "Katniss Everdeen; aiming; A bow",
"15": "Albert Einstein; theorizing about; the fundamental forces of the universe",
"25": "Bernie Sanders; preaching; socialism",
"35": "Menethil, Arthas; betraying ; Frostmorne",
"45": "Death eater; sucking; a soul",
"55": "Edward Elric; transmuting; his dead mother",
"65": "Rem; making a last stand with; a huge flail",
"75": "Genji; screaming in; Japanese",
"85": "Helena (Orphan black); mutilating; a cage",
"95": "World Serpend Jörmungandr; devouring; the world",
"06": "Kylo Ren; rampaging; Crossguard lightsaber",
"16": "Android 16:; flirting with; a tiny bald man",
"26": "Broly; beating up; Green Hair",
"36": "Maximilien Robespierre; guillotining; the french king",
"46": "Darth Revan; falling to; the dark side",
"56": "Erasmus; slinging mud at; a bunch of academics",
"66": "Darth vader (Order 66:); choking; an innocent bystander",
"76": "Jefferson; declaring; slaves",
"86": "Harry Potter; hiding under; a staircase",
"96": "Sukeroku; fucking; his best friends crush",
"07": "King George III; loosing; America",
"17": "Android 17:; mocking; Some sick clothes",
"27": "Big Game Hunter; eliminating; a dinosaur",
"37": "Magneto; inciting ; the mutant rebellion",
"47": "Diamond (Gem); caring for; two arms",
"57": "Saphira (EGg and EraGon); being born from; an egg",
"67": "Ragnaros; magmablasting; a firesnake",
"77": "Gogeta (SSJ 4); taunting; a x10:0 Kamehameha",
"87": "Hermione granger; studying with; a time-turner",
"97": "Son Goku; spirit bombing; a angry kid",
"08": "Kikuhiko; regretting; A fan",
"18": "Alexander Hamilton; throwing away ; his shot",
"28": "Bounty Hunter (Cad Bane); hunting; Wide-brim hat",
"38": "Mata Hari; bellydancing; the first world war",
"48": "David Hume; inducing; causality",
"58": "Emperor Hirohito; evading; an atomic bomb",
"68": "Rubeus Hagrid; nurturing; a dragon",
"78": "Griffth; striving; a red pendant",
"88": "Hitler; screaming; poison gas",
"98": "Sherlock holmes; showing off; their sexy mind",
"09": "Kaelthas Sunstrider; conjuring; Al'ar",
"19": "Anakin Skywalker; rebelling against; sand",
"29": "Belatrix LeStrange; splitting; a houseelf",
"39": "Macbeth of Scotland; betraying ; the former king",
"49": "Darth Sidious; electrocuting; a kid",
"59": "Eddard (Ned) Stark; trusting; his severed head",
"69": "Rob Stark; marrying; a groom's suit",
"79": "Guts; confronting; a demon",
"89": "Han Solo; daring; a blaster",
"99": "Severus Snape ; cursing; an old wizard"
}
var NUMBER_GENERATION_SPEED_MS = 7500; //current
var NUMBER_MIN_INCL = 0;
var NUMBER_MAX_INCL = 9;
var OPT_AMOUNT_GENERATIONS = 50; //Set to insanely high number if you want infinite generations
var NUMBER_DIGITS = 2;
var counter=0;
var prevRandInt = 0;
var randInt = 0;
var totalstring = "";

function getRandomIntInclusive(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
clearInterval(interval);
var interval = setInterval(function () {
 prevRandInt = randInt;
 document.getElementById("insertPreviousPAOMember").innerHTML = paoEnumPersistent[prevRandInt];
 randInt = "";
 for (var i = 0; i < NUMBER_DIGITS; i++) {
   randInt += getRandomIntInclusive(NUMBER_MIN_INCL, NUMBER_MAX_INCL);;
 }
 document.getElementById("insertPAONumber").innerHTML = "<div style='font-size: 70pt !important; color: #"+ getRandomIntInclusive(0,999999) +";'> "+randInt+" </div>";
 counter++;
 //End condition
 if (counter>OPT_AMOUNT_GENERATIONS) {
   document.getElementById("insertPAONumber").innerHTML= "<div style='font-size: 70pt !important; color: white;'> "+totalstring+" </div>";
   clearInterval(interval);

 }
 totalstring += randInt;
 console.log("hey");
}, NUMBER_GENERATION_SPEED_MS);
</script>
