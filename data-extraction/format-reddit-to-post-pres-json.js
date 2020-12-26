function postToResponseObject(comment) {
  let tagline = comment.querySelector(".entry > .tagline");
  window.debugger.currentTagline = tagline;
  let score = tagline.querySelector(".score:nth-child(5)") ? parseInt( tagline.querySelector(".score:nth-child(5)").title) : undefined;
  let time = tagline.querySelector("time").dateTime;
  let author = tagline.querySelector(".author") ?  tagline.querySelector(".author").textContent : "[deleted]";
  let content = comment.querySelector(".usertext-body > .md").innerHTML;
  return {
    score: score, time: time, author: author, content: content, responses:[]
  }
}
let postResponseObject = {responses:[]}

function parseCommentTree(comment){
  window.debugger.currentLowerComment = comment;
  let childContainer = comment.querySelector(".sitetable.listing");
    let commentObject = postToResponseObject(comment);
  if (!childContainer) return commentObject;
  let childComments = Array.from(childContainer.children).filter(item=>item.matches(".comment"));
  for (let childComment of childComments) {
    commentObject.responses.push(parseCommentTree(childComment));
  }
  return commentObject;
}

for (let toplevelcomment of document.querySelectorAll(".commentarea > .sitetable.nestedlisting > .comment")) {
  window.debugger.currentTopLevelComment = toplevelcomment;
  postResponseObject.responses.push(parseCommentTree(toplevelcomment));
}

console.log(JSON.stringify(postResponseObject));
