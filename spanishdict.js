let pronouns = document.querySelectorAll("table")[1].querySelectorAll("td:nth-child(1)");
let forms = document.querySelectorAll("table")[1].querySelectorAll("td:nth-child(3)");
let outstring = "";
for (var i = 1; i < pronouns.length; i++) {
  outstring += `${pronouns[i].textContent} <span class="cloze">${forms[i].textContent}</span>;;;;;;${document.querySelector("h1").textContent} preterite
`;
}
console.log(outstring);
