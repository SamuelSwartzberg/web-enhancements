var cardString = localStorage.getItem("cardStr");
console.log(cardString);
function cleanString(str) {
    return str.replace(/<.*?>/gi,'').replace(/\n/gi,'').trim();
}
document.querySelectorAll("h3, p > .highlighter--highlighted").forEach((item, i) => {
    if(item.nodeName == "SPAN"){item = item.parentNode};
    if((item.textContent.includes("Example") && item.nextElementSibling)||item.nodeName==="P"){
        var exampleList = item.nextElementSibling;
        exampleList.querySelectorAll("li").forEach((listItem, i) => {
            var listItemJaEn = listItem.innerHTML.split("<br>");
            for (var i = 0; i < listItemJaEn.length; i++) {
                listItemJaEn[i]=cleanString(listItemJaEn[i]);
            }
            console.log("count");
            cardString = cardString + listItemJaEn[0] + ";;;;;;What does this gloss as?;;;;" + listItemJaEn[1] + "\n";
        });
        try {
            if (exampleList.nodeName="P") {
                var para1 = exampleList;
                var para2 = para1.nextElementSibling;
                para1 = para1.innerHTML.split("<br>"); para2 = para2.innerHTML.split("<br>");
                para1[0] = cleanString(para1[0]); para1[1] = cleanString(para1[1]); para2[0] = cleanString(para2[0]); para2[1] = cleanString(para2[1]);
                var question = "<div>" + para1[0] + "</div><div>" + para2[0] + "</div>";
                var answer = "<div>" + para1[1] + "</div><div>" + para2[1] + "</div>";
                cardString = cardString + question + ";;;;;;What does this gloss as?;;;;" + answer+ "\n";
            }
        } catch (e) {
            console.log("no paras");
            console.log(e);
        }

    }
});
console.log(cardString);
localStorage.setItem("cardStr", cardString);
