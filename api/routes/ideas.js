const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const ideasController = require("../controllers/ideas");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getIdea);

router.post("/createIdea", ideasController.createIdea);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
