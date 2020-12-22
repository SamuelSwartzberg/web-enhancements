function gmailAutoDelete() {
  var maxDeleteDelay = 30;
  for (var i = 0; i <= maxDeleteDelay; i++) {
    var delayDays = i; 
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-delayDays); // what was the date at that time?
    // Get all the threads labelled 'd+1'
    var label = GmailApp.getUserLabelByName("d/"+i);
    if(label){
      var threads = label.getThreads(0, 50);
      // we delete all the threads if they're older than the limit we set in delayDays
      for (var j = 0; j < threads.length; j++) {
        if (threads[j].getLastMessageDate()<maxDate)
        {
          threads[j].moveToTrash();
        }
      }
    }
  }
}