//Extracts all poems on a https://www.poetryfoundation.org/poems/browse page
//spits them out one by one in the console
//clears console before new output
//Vunerable to site changes on their part

//Inject JQuery:

javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();console.log('jQuery injected')};document.head.appendChild(e);})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')

//Actual code
setTimeout(function () {
  var links = jQuery(".c-feature h2 a");
  onGetSucess = function(data){
    //assemble poem
    var poemFinal = "";
    var poemQueriable = jQuery(jQuery(data).find("article .c-feature")[0]);
    var title = poemQueriable.find("div h1").text();

    poemFinal = poemFinal + title.trim() + "\n\n";
    var author = poemQueriable.find("div span a").text();
    poemFinal = poemFinal + "By: " +author.trim() + "\n\n";
    var poemTextQueriable = jQuery(poemQueriable.find("div .o-poem div"));
    var poemBody = "";
    for (var line in poemTextQueriable) {
      line = poemTextQueriable[line];
      if (line.className == "") {
            poemBody = poemBody + line.innerText.trim() + "\n";
      }
    }
    if(title == "\n\n"||author=="By: \n\n"||!poemBody){
      return;
    }
    poemFinal += poemBody;
    console.log(poemFinal);
  }
  for (var link in links) {
    link = links[link];
    if(link.href){
      console.clear();
      jQuery.get(link.href,onGetSucess);
    }
  }
}, 1000);
