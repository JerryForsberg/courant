const router = require("express").Router();
const multer = require('multer');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');




const mongoURI = "mongodb+srv://thecourantgroup:storydata1@cluster0.oaeup.mongodb.net/uploads?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI);
// || "mongodb://localhost/courant"

let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  // || "mongodb://localhost/courant"
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });

  }
});
const upload = multer({ storage });

// @route GET /
// @desc Loads form
router.get('/', (req, res) => {
  // console.log("redirected")
  // gfs.files.find().toArray((err, files) => {
  //   // Check if files
  //   console.log(files)
  //   if (!files || files.length === 0) {
  //     res.render('index', { files: false });
  //   } else {
  //     files.map(file => {
  //       if (
  //         file.contentType === 'image/jpeg' ||
  //         file.contentType === 'image/png'
  //       ) {
  //         file.isImage = true;
  //       } else {
  //         file.isImage = false;
  //       }
  //     });
  //     //   res.render('index', { files: files });
  //   }
  // });
});

// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });


  // var filename = req.body.imageUpload;
  //  upload.single(imageUpload);
  console.log("File uploaded 1");
  console.log(req.body.file);
  console.log(req.body);

  // gfs.files.find().toArray((err, files) => {
  //   console.log("looking for files")
  //   console.log(files)
  //   if (!files || files.length === 0) {

  //   } else {
  //     files.map(file => {
  //       if (
  //         file.contentType === 'image/jpeg' ||
  //         file.contentType === 'image/png'
  //       ) {
  //         file.isImage = true;
  //       } else {
  //         file.isImage = false;
  //       }
  //     });
  //   res.render('index', { files: files });
  // }
  // });

});

// @route GET /files
// @desc  Display all files in JSON
router.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

// @route GET /files/:filename
// @desc  Display single file object
router.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // File exists
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc Display Image
router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    res.redirect('/');
  });
});

module.exports = router;