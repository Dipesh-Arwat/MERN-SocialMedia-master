import multer from "multer";
import path from "path";

// Define storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname) // Append a timestamp to ensure unique filenames
    );
  },
});

const upload = multer({ storage });

export default upload;
