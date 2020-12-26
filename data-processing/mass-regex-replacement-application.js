var replacementArray = [
  "book",
  "display"
];
var arrayResults = [];
var currentInput = "";
var textToSearch =`a
multiline
String`;
var variable = "String";

var gatherInputs = function() {
  // textToSearch = window.prompt("What text for mass replacement?", "Text with VARIABLE and more VARIABLE and heaps of VARIABLE");
  // variable = window.prompt("What variable should be replaced?", "VARIABLE");
  // replacementArray.push(window.prompt("What do you want top replace the variable with?", "Love <3"));
  // while(!!(currentInput = window.prompt("Do you want to replace another value"))){
  //     replacementArray.push(currentInput);
  // }
}

var variableReplacementFunction = function() {
    for (var i = 0; i < replacementArray.length; i++) {
      var textWithVariableReplaced = textToSearch.replace(new RegExp(variable,"gim"),replacementArray[i]);
      arrayResults.push(textWithVariableReplaced);
    }
}
var printResults = function() {
  for (var i = 0; i < arrayResults.length; i++) {
    console.log(arrayResults[i]);
  }
}
gatherInputs();
variableReplacementFunction();
printResults();
