const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songsController");

router.get("/", songsController.getNotes);
router.get("/:genre", songsController.getSong);

module.exports = router;
