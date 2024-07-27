const sharp = require('sharp');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const multer  = require('multer')

const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
  };

const upload = multer({ 
    storage: storage,
    fileFilter: multerFilter,
});

// 
exports.uploadBlogImage = upload.single('image');

exports.resizeBlogImage = catchAsync(async (req, res, next) => {
    if(req.file.image) return next();

    filename  = `blog${req.params.id}-${Date.now()}-image.webp`;
    await sharp(req.file.image.buffer)
      .resize(1000, 500)
      .toFormat('webp')
      .webp({quality: 90})
      .toFile(`public/images/${filename }`);
    req,body.image = filename;
    next();
});

