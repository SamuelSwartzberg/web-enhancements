//Bookmarklet: Change the video speed.

javascript: var v = document.querySelector("video"); var t = prompt("Set the playback rate"); v.playbackRate = parseFloat(t)

//Open all links underneath an element with an ID of open
$("#open a").each(
  function (i,e){
    console.log(e.href);
    window.open(e.href)
  }
)

// click the next button on reddit

javascript:(function()%7Bdocument.querySelector(".next-button").children%5B0%5D.click()%7D)()

// hide furigana

javascript:(function()%7Bdocument.querySelectorAll("rt, .furigana, .rt").forEach(element%3D>element.style%3D"display%3Anone%3B")%7D)()

// permascroll a certain amount

javascript:(function()%7Bvar%20time%20%3D%20Number(prompt(%22Time%20(ms)%3F%22%2C%2030000))%3Bvar%20factor%20%3D%20Number(prompt(%22Speed%20factor%20(default%201x%20%3D%202500px%2Fs)%22%2C%201))%3Bvar%20count%20%3D%200%3Bvar%20interval%20%3D%20window.setInterval(function()%7Bif%20(count%3E%3Dtime*2.5*factor)%7BclearInterval(interval)%3B%7Dwindow.scroll(0%2Ccount)%3Bcount%20%3D%20count%20%2B%201000*2.5*factor%3Bconsole.log(count)%3B%7D%2C1000)%7D)()
