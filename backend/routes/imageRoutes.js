const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

router.route("/upload/:userId").put(imageUpload.single("image"), upload);

module.exports = router;
