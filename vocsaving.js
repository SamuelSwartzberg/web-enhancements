function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var lineArr = [];
document.querySelectorAll(".highlighter--highlighted").forEach(function(item,i){
    var line = item.parentNode.textContent.trim();
    var lineSplit = line.split("【");
    if (lineSplit[1]){
        var lineSplit2 = lineSplit[1].split("–");
    } else {
        var lineSplit2 = ["", lineSplit[0].split("–")[1]];
        lineSplit[0] = lineSplit[0].split("–")[0];
    }
    var finalSplitArr = [lineSplit[0].trim(), lineSplit2[0].trim().replace("】", ""), lineSplit2[1].trim().replace(";", ",")];
    if (!arraysEqual(finalSplitArr, lineArr[lineArr.length-1])){
        lineArr.push(finalSplitArr);

    }
});

var finalString = "";
for (var i = 0; i < lineArr.length; i++) {
    finalString += lineArr[i][0] + ";" + lineArr[i][1] + ";;;;;;;;;" + lineArr[i][2] + ";;;;;;;;;;;;;;;;;;;;;;y;\n";
}
console.log(finalString);
