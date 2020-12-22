// Some other site

function getParentUntil(node, searchNode) {
    var parent = node.parentNode;
    if (parent.tagName ==="TR") {
        return parent;
    } else {
        return getParentUntilTr(parent);
    }
}
function trimTags(htmlString){
    console.log(htmlString.innerHTML);
    var tempString = htmlString.innerHTML.replace(new RegExp("</?[abcdefghijklmopqstuvwxyz].*?>", "gim"), "");
    tempString = tempString.replace(new RegExp("/n", "gim"), "");
    return tempString;
}
prompt("copy", trimTags(getParentUntilTr(window.getSelection().baseNode)));

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
