let jsonArray=JSON.parse(read("location.json"));

  function jsonElementToGpxString(element) {
    if (element.accuracy>50) return "";
    let returnstring ="";
    if (element.activity){
      element.activity.forEach((item, i) => {
        returnstring += formatTrackpoint(element.latitudeE7, element.longitudeE7, element.altitude, item.timestampMs );
      });
    }
    returnstring += formatTrackpoint(element.latitudeE7, element.longitudeE7, element.altitude, element.timestampMs );
    return returnstring;
  }
  function formatTrackpoint(latitudeE7,longitudeE7,altitude, msstring){
    let elementDate = new Date(parseInt(msstring));
    let isoString = elementDate.toISOString();
    return `<trkpt lat="${latitudeE7/(10**7)}" lon="${longitudeE7/(10**7)}"><ele>${altitude|| -1}</ele><time>${isoString}</time></trkpt>\n`
  }
  let gpxstring="";
  for (let element of jsonArray) {
    gpxstring+=jsonElementToGpxString(element);
  }
  console.log(gpxstring);
  