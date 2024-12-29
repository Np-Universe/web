const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: "./public/images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('img');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

app.use(express.static('./public'));

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ message: err });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: 'No file selected!' });
            } else {
                res.json({
                    message: 'File uploaded!',
                    file: `images/${req.file.filename}`
                });
            }
        }
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
