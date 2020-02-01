const fs = require('fs');
const multer = require('multer');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      fs.existsSync('./uploads/'+req.user.company) || fs.mkdirSync('./uploads/'+req.user.company);
      cb(null, './uploads/'+req.user.company)
  },
  filename: (req, file, cb) => {
      cb(null, new Date().toISOString()+ '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);    
    }    
}

// file upload
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


module.exports = upload
