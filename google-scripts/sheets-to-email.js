var log = "";
function myFunction() {
  timeFiles = DriveApp.getFilesByName("time.xlsx");
   while (timeFiles.hasNext()) {
   var file = timeFiles.next();
   log += file.getName();
 }
  MailApp.sendEmail("vahitime@gmail.com",timeFiles.hasNext(),log);
}
