const multer = require('multer');
const util = require('util')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + '-' + file.originalname.toString().toLowerCase().replace(/ /g,'-'));  
  },
});

const fileFilter = (req, file, cb) => {
  console.log(req,file)

  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    //reject file
    
    cb(
      {
        message: 'Unsupported file format',
      },
      false
    );
  }
};

const uploadMiddleware = multer({
  storage: storage,
  limits: {
    fileSize: 200000,
  },
  fileFilter: fileFilter,
}).single("image")

// const UploadSingleMiddleware = util.promisify(uploadMiddleware)

module.exports = {
  storage,
  fileFilter,
  uploadMiddleware
};
