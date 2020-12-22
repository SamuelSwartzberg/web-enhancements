let outstring = "";
let name = "Hair Tie";
let skipIndexArray = [2,9,10,11];
let upperlimitInclusive = 7; //set to very high number to include all
let links = new Set();
document.querySelectorAll("[style*=Prusik-Hair-Tie]").forEach((item, i) => {
  i = Math.floor(i/2);
  console.log(i<=upperlimitInclusive)
  if (i<=upperlimitInclusive && !skipIndexArray.includes(i) && item.style.backgroundImage.startsWith("url")){
    let cleansedString = item.style.backgroundImage.trim().replace('url("',"").slice(0,-2);
    links.add(cleansedString);
  }
});
if (links.size === 0) throw new Error("List of urls is empty. Is your query selector correct?");

function getImageUrl(element){

  return element.split("/")[element.split("/").length-1];
}

let linkArray = Array.from(links);
console.log(linkArray);
outstring+= `${name} - what's the first step?;;;;;;;;;;;;;;<img src="${getImageUrl(linkArray[0])}">
`
for (var i = 0; i < linkArray.length-1; i++) {
  outstring += `;;;;<img src="${getImageUrl(linkArray[i])}">;;${name} - what's the next step?;;;;;;;;<img src="${getImageUrl(linkArray[i+1])}">
`
}
outstring+=`What's this knot?;;;;<img src="${getImageUrl(linkArray[linkArray.length-1])}">;;;;;;${name};;;;
`

console.log(outstring);

for (var url of links) {
  window.open(url);
}
