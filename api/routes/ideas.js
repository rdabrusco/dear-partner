const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const ideasController = require("../controllers/ideas");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, ideasController.getIdea);

router.post("/createIdea", ideasController.createIdea);

router.put("/likePost/:id", ideasController.likePost);

router.delete("/deletePost/:id", ideasController.deleteIdea);

module.exports = router;
