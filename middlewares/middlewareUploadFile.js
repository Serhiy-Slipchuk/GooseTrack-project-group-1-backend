const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder;
    if (file.fieldname === "avatarURL") {
      folder = "avatars";
    } else {
      folder = "temp";
    }
    return {
      folder: folder,
      allowed_formats: ["jpg", "png", "webp"],
      public_id: file.originalname,
    };
  },
});

const upload = multer({
  storage: cloudStorage,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
});

const middlewareUploadFile = upload.single("avatarURL");

module.exports = { middlewareUploadFile };
