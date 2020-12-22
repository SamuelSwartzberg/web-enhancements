/**
 * Backup Sheets, Docs files to a specific folder in google drive
 * v1
 */

function backupSheetsDocs()
{

  var docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
  var sheets = DriveApp.getFilesByType(MimeType.GOOGLE_SHEETS);

  loopThroughFiles(docs, "doc");
  loopThroughFiles(sheets, "sheet");
}

function loopThroughFiles(fileIterator, type){

  var DAY_MILLIS = 86400000;

  while (fileIterator.hasNext()) {

    var file = fileIterator.next();
    var fileName = file.getName();
    var now = new Date();
    var backupDate = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd' 'HH-mm-ss");

    //assign the right vars for the doc type

    if (type === "doc"){
      var exportFormat = "docx";
      var serviceString = "documents";
      var keyOrId = "id";
    } else if (type === "sheet"){
      var exportFormat = "xlsx";
      var serviceString = "spreadsheets";
      var keyOrId = "key";
    } else {
      Logger.log("invalid type");
      return;
    }

    //Skip files that are trashed, haven't been edited in the last 24h

    if (file.isTrashed()) {
      continue; // do not backup trashed files
    } else if (now.getTime()-file.getLastUpdated().getTime() > DAY_MILLIS){
      continue;
    }

    //create the request

    var url = "https://docs.google.com/feeds/download/"+serviceString+"/Export?"+keyOrId+"=" + file.getId() + "&exportFormat="+exportFormat;
    var params = {
      method      : "get",
      headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
      muteHttpExceptions: true
    };

    var blob = UrlFetchApp.fetch(url, params).getBlob();

    blob.setName(backupDate + "-" + fileName + "." + exportFormat);
    Logger.log(blob.getName());
    saveBackupInDrive(blob, fileName);

  }
}
function saveBackupInDrive(blob, fileName){
  var backupParent = DriveApp.getFolderById("1vzBL_P_YRvFKwRhg1n9S6X0-FQhJb2XD");
  while (backupParent.getFoldersByName(fileName).hasNext()){
    var folder = backupParent.getFoldersByName(fileName).next();
    var newFile = folder.createFile(blob);
    Logger.log(newFile.getName());
    return;
  }

  var folder = backupParent.createFolder(fileName);
  var newFile = folder.createFile(blob);
  Logger.log(newFile.getName());

}
