const multer = require("multer");
const path = require("path");
const uuidv4 = require("uuid/v4");

module.exports = {
	storage: new multer.diskStorage({
		destination: path.resolve(__dirname, "..", "..", "uploads"),
		filename: function(req, file, cb) {
			cb(null, uuidv4() + file.originalname);
		}
	})
};
