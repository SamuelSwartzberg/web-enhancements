//bookmarklet

javascript:(function(){var allItems = [];
jQuery(".Node-content").each(function(index, element) {
    if(element.textContent) {
        allItems.push(element.textContent);
    }
});
for(var i = 0; i < 5; i++) {
    console.log(allItems[Math.floor(Math.random() * allItems.length)]);
}
})();

//code

var allItems = [];
jQuery(".Node-content").each(function(index, element) {
    if (element.textContent) {
        console.log(element.textContent);
        allItems.push(element.textContent);
    }
})
for (var i = 0; i < 5; i++) {
    console.log(allItems[Math.floor(Math.random() * allItems.length)]);
}
