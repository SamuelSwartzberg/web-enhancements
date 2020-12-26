function parseDate(datestr){
  let dateTimeParts = datestr.split(", ");
  let day = dateTimeParts[1].split(". ")[0];
  let month = monthToNumber(dateTimeParts[1].split(" ")[1]);
  let year = parseInt(dateTimeParts[1].split(" ")[2]);
  let hour = parseInt(dateTimeParts[2].split(":")[0]);
  let minute = parseInt(dateTimeParts[2].split(":")[1]);
  return new Date(year, month-1, day, hour, minute, 0);
}

function monthToNumber(month){
if (month==="Januar") return 01;
if (month==="Februar") return 02;
if (month==="März") return 03;
if (month==="April") return 04;
if (month==="Mai") return 05;
if (month==="Juni") return 06;
if (month==="Juli") return 07;
if (month==="August") return 08;
if (month==="September") return 09;
if (month==="Oktober") return 10;
if (month==="November") return 11;
if (month==="Dezember") return 12;
}

let trips = [];

Array.from($0.children).forEach((item, i) => {
  let datestr = item.querySelector(".order-history__item__departure").textContent;
  let trip = item.querySelector(".order-history__item__stations").textContent;
  let tripParts = trip.split(" → ");
  let start = tripParts[0];
  let end = tripParts[1];
  trips.push(
    {
      time: parseDate(datestr),
      start: start,
      end: end,
      provider: "FlixBus"
    }
  )
});
