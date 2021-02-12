function sendEmail() {
  const parcel = 0;     //sets variable, first row of the spreadsheet
  const address = 1;    //sets variable, second row of the spreadsheet
  const email = 2;  //sets variable, third row of the spreadsheet
  const first = 3;  //sets variable, fourth row of the spreadsheet
  const last = 4;   //sets variable, fifth row of the spreadsheet
  let emailTemp = HtmlService.createTemplateFromFile("email");              // sets variable, takes in email template
  let ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("dpd");     // sets variable, get active spreadsheet and then sheet where our data is
  let data = ws.getRange("A2:F" + ws.getLastRow()).getValues();           //sets variable, reads the whole range dynamically (+ws.getLastRow), stores the values
  data = data.filter(function (row) {                                   //L10-L12 filters data by checkbox, if not true then sends emails, if box not ticked (FALSE) send emails
    return row[5] !== true;
  });

  data.forEach(function (row) {                             // starts loop, for each row reads from array 
    emailTemp.parcel = row[parcel];                         // assigns data 
    emailTemp.address = row[address];                       // assigns data
    emailTemp.email = row[email];                           // assigns data
    emailTemp.first = row[first];                           // assigns data
    emailTemp.last = row[last];                             // assigns data
    let htmlMessage = emailTemp.evaluate().getContent();    // evaluates and gets content
    GmailApp.sendEmail(                                     // using Gmail sends email
      row[email],                                         // reads email addres from spreadsheet
      "Regarding parcel " + row[parcel],                  // subject line + parcel number included read from spreadsheet
      "Your email app doesn't support HTML.",             // warning when email client doesn't support HTML emails
      { name: "Your Name", htmlBody: htmlMessage }         // adds your name and then includes whole message body    
    );
  });
}
