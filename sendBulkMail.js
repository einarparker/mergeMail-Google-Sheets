function sendEmail() {
  const parcel = 0;
  const address = 1;
  const email = 2;
  const first = 3;
  const last = 4;
  let emailTemp = HtmlService.createTemplateFromFile("email");
  let ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("dpd");
  let data = ws.getRange("A2:F" + ws.getLastRow()).getValues();
  data = data.filter(function (row) {
    return row[5] !== true;
  });

  data.forEach(function (row) {
    emailTemp.parcel = row[parcel];
    emailTemp.address = row[address];
    emailTemp.email = row[email];
    emailTemp.first = row[first];
    emailTemp.last = row[last];
    let htmlMessage = emailTemp.evaluate().getContent();
    GmailApp.sendEmail(
      row[email],
      "Regarding parcel " + row[parcel],
      "Your email app doesn't support HTML.",
      { name: "Name", htmlBody: htmlMessage }
    );
  });
}
