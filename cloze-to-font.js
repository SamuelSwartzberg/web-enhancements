var stringWithClozes=window.prompt("Enter your string with clozes");
var currentClozeRemovedString = stringWithClozes;
var finalStringArray = [];
var clozeMatchReg = /\{\{c\d::(.*?)\}\}/;
var OPENER = "<font>";
var CLOSER ="</font>";
var replacerRegex = OPENER + "$1" + CLOSER;

function cleanseStringOfClozes(cleansableString) {
  return cleansableString.replace(/\{\{c\d::(.*?)\}\}/g, "$1");
}

while (currentClozeRemovedString.match(clozeMatchReg)){
  var currentFinalString = currentClozeRemovedString.replace(clozeMatchReg, replacerRegex);
  currentFinalString = cleanseStringOfClozes(currentFinalString);
  finalStringArray.push(currentFinalString);
  currentClozeRemovedString = currentClozeRemovedString.replace(clozeMatchReg, "$1");
}

console.log(finalStringArray.join("\n"));
