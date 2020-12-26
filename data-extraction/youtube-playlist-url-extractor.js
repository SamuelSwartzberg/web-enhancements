let assemblyString = "";
$0.querySelectorAll("a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer").forEach(
  item =>{
    let url = item.href.split("&")[0];
    assemblyString += `"${url}" `;
  })
console.log(assemblyString);
