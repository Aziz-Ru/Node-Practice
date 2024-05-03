const e = require("express");
const path = require("path");
const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;

const uploadsFolder = "./files/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsFolder);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname.replace(fileExt, "").toLowerCase().split("").join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 102400,
  },
  fileFilter: (req, file, callback) => {
    if (file.fieldname == "aziz") {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Only .jpg,.png or .jpeg format allowed"));
      }
    } else {
      if (file.mimetype == "application/pdf") {
        callback(null, true);
      } else {
        callback(new Error("Only pdf file allowed"));
      }
    }
  },
});
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) res.send("FIle Upload Error");
    else res.send(err.message);
  } else {
    next();
  }
});

// app.set("view engine", "ejs");

app.get("/", (rew, res) => {
  //   res.render("pages/res.js");
  res.send("hola");
});
// single file upload
app.post("/", upload.single("aziz"), (req, res) => {
  console.log("FILE UPLOAD");
  res.send("File Uploaded Successfully");
});
// app.post("/", upload.array("aziz",3), (req, res) => {
//   console.log("FILE UPLOAD");
//   res.send("File Uploaded Successfully");
// });

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
