# mergeMail-Google-Sheets

Originaly created for Google Sheets.
It has been created and adjusted to my own needs with help of YT tutorial:
https://www.youtube.com/watch?v=h2z13YE3kJg created by Learn Google Spreadsheets channel.

It's use was for sending email to DPD rep containing customer's correct address
(as DPD APi was screwed and printed incomplete addresses).
Email also contains parcel's tracking number.
Tracking number is included in the subject line as well, on the assumption that is going to
make dpd's representative job easier.

HTML email template takes First and Last name, parcel number and customer address from the spreadsheet.
Email of the recipient is passed in the script line L22 all emails are sent from your Google Sheets account.
Tick boxes have a reverse logic comparing to the tutorial. That means if box is ticked no email will be send.
You can reverse it in line L11.
Your Google account has a daily quota of emails (to avoid spamming) its in this link:
https://developers.google.com/apps-script/guides/services/quotas

Included photo shows how google sheet was formatted. I marked important data that is being used by the script.
It is pretty easy to adopt to your own needs.
Included you will find additional script that creates Menu item so you can run the script without going to
script editor.

I hope the script will help you in some way :)
