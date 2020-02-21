const { zip } = require("zip-a-folder");
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

class ZipAFolder {
  static async main() {
    await zip(
      __dirname + "/" + newBackupDir,
      __dirname + "/" + newBackupDir + ".zip"
    );
  }
}

module.exports = ZipAFolder;
