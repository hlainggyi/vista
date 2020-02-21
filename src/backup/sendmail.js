const nodemailer = require("nodemailer");

// Current date
currentDate = new Date();
let newBackupDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  currentDate.getDate();

// New backup path for current backup process
let newBackupDir = "vista-db-backup-mongodump-" + newBackupDate;

const trans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "v2m.infomail@gmail.com",
    pass: "88Password"
  }
});

let mail_op = {
  from: "v2m.infomail@gmail.com",
  to: "hlaingmyohtun.fb@gmail.com",
  subject: `${newBackupDate} database backup file`,
  html: `<h1>HELLO, VISTA !</h1><p>This is a backup file of ${newBackupDate}.</p>`,
  attachments: [
    {
      //using a local file
      path: __dirname + "/" + newBackupDir + ".zip"
    }
    // {   //using URL as an attachment
    //   filename: 'art_of_believing.pdf',
    //   path: 'https://coursesweb.net/blog/dwl/prayer_the_art_of_believing.pdf'
    // },
  ]
};

trans.sendMail(mail_op, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});

module.exports = mail_op;
