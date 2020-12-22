let allchats = Array.from(document.querySelectorAll("._3soxC._2aY82 ._3Pwfx")).values();
let allchatsstring = "";
let allchatscount = 0;
handleOnePage(allchats.next().value);

function handleOnePage(chatele){
  console.log(chatele);
  var evt = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    });

  var canceled = !chatele.dispatchEvent(evt);

  console.log("Switch to new chat was not unsucessful " + canceled);

  window.setTimeout(function () {
    let chatContainer = document.querySelector("._26MUt");
    let wholeconvo = "";
    let failures = 0;

    function scrollToTop() {
      window.setTimeout(()=>{
        if (chatContainer.scrollTop > 0){
          chatContainer.scrollBy(0, -35000);
          failures = 0;
          scrollToTop();
        } else if (failures > 20){
          console.log("should now be at top");
          mainFunc();
        } else{
          failures++;
          scrollToTop();
        }
      },500)
    }

    scrollToTop();

    function mainFunc() {
      console.log("mainfunc was called");

      let name = document.querySelector("#main ._1hI5g._1XH7x._1VzZY").textContent;
      let isFirstdate = true;
      let date;
      wholeconvo += name;
      document.querySelectorAll(".tSmQ1 ._2XJpe._7M8i6").forEach(element => {
        let messageline = "";
        let label = element.querySelector(".copyable-text");
        if (!label) return;
        if (isFirstdate){
          date = label.dataset.prePlainText.split(" ")[2].trim().slice(0,-1);
          wholeconvo = wholeconvo + " " + date + "\n\n";
          isFirstdate=false;
        }
        messageline += label.dataset.prePlainText;
        let actualMessage = element.querySelector("._1wlJG");
        if (!actualMessage) return;
        messageline += actualMessage.textContent;
        wholeconvo = wholeconvo + messageline + "\n";

      })
      allchatsstring = allchatsstring + wholeconvo + "\n\n";
      let allchatslength = (allchatsstring.match(/\n/g) || '').length + 1;
      let wholeconvolength = (wholeconvo.match(/\n/g) || '').length + 1;
      allchatscount++;
      console.log("Finished the chat with " + name + ",  " + wholeconvolength + " lines");
      console.log("Allchats is now " + allchatslength + " lines long and contains " + allchatscount + " chats.");
      chatele.classList.add("done");
      document.querySelector("#hard_expire_time").innerHTML = allchatsstring;
      let next = allchats.next();
      if (!next.done) handleOnePage(next.value);
      else return;
    }
  }, 3000);
}

console.log(allchatsstring);
