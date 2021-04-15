const multer = require('multer');

const ErrorApp = require('../../errors/error-app');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.env.PWD}/avatars`);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(' ', '_')}`;

    req.body.avatar = `avatars/${fileName}`;

    if (
      file.mimetype === 'image/png'
      || file.mimetype === 'image/jpg'
      || file.mimetype === 'image/jpeg'
    ) {
      cb(null, fileName);
    } else {
      cb(new ErrorApp('Not suitable format', 400));
    }
  },
});

module.exports = multer({ storage, limits: { fileSize: 10 * 1024 * 1024, files: 1 } });
