//Clears formatting of selected cells, assign cmd alt shift 1

/** @OnlyCurrentDoc */

function Clearformatting() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().clearFormat();
};

//Inserts a new row below, assign cmd alt shift 2

/** @OnlyCurrentDoc */

function Insertrowbelow() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().insertRowsAfter(spreadsheet.getActiveRange().getLastRow(), 1);
  spreadsheet.getActiveRange().offset(spreadsheet.getActiveRange().getNumRows(), 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
};