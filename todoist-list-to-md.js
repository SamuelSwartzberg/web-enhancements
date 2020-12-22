let elements = $0.childNodes;
let finalString = '';
elements.forEach((item) => {
  let optionallinkstring = '';
  if (item.querySelector('a') && item.querySelector('a').href) optionallinkstring = '(' + item.querySelector('a').href + ')';
  finalString += '  '.repeat(item.dataset.itemIndent - 1) + '* ' + item.textContent + optionallinkstring + '\n';
});
console.log(finalString);
