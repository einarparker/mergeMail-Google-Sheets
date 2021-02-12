function onOpen() {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createMenu("Bulk emails");
  menu.addItem("Send Emails from List", "sendEmail");
  menu.addItem("Send Data as Table(not working yet)", "sendEmailTable");
  menu.addToUi();
}
