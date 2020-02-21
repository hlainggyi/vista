const dbBackup = require("./dbbackup.js");
var CronJob = require("cron").CronJob;

var job = new CronJob(
  "15 4 * * MON",
  function() {
    dbBackup.dbAutoBackUp();
    console.log("Backup Create");
  },
  null,
  true,
  "Asia/Rangoon"
);

const ZipAFolder = require("./zip");

var job2 = new CronJob(
  "30 4 * * MON",
  function() {
    ZipAFolder.main();
  },
  null,
  true,
  "Asia/Rangoon"
);

// const sendToMail = require("./sendmail");

var job3 = new CronJob(
  "45 4 * * MON",
  function() {
    // sendToMail;
  },
  null,
  true,
  "Asia/Rangoon"
);

job.start();
job2.start();
// job3.start();
