let disqusJson = [];
let cleanedArray =[];

for (let contribution of disqusJson) {
  console.log("hello");
  console.log(contribution.author);
  cleanedArray.push({
    platform: contribution.forum,
    medium: "disqus",
    date: contribution.createdAt,
    author: contribution.author.name,
    content: contribution.raw_message,
    score: contribution.points,
    parent: contribution.parent,
    thread: contribution.thread
  })
}

console.log(JSON.stringify(cleanedArray));
