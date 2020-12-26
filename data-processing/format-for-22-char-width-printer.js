var belegString = `
a
multiline
string`

function chunkSubstr(str, size) {
  let chunks = [];
  while (str.length > 0 ){

    var splitArray = str.split("\n");
    if(splitArray[0].length>22){
      var next22Chars = str.substr(0,22);
      chunks.push(next22Chars);
      str = str.substr(22)
    }
    else{
      chunks.push(splitArray[0]);
      str = str.substr(splitArray[0].length+1);
    }
  }
  var chunksJoined = chunks.join("\n");
  return chunksJoined;
}


function getOutput(){
  console.log(chunkSubstr(belegString, 22));
}

getOutput();
