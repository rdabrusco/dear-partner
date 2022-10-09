const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const ideasController = require("../controllers/ideas");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id",  ideasController.getIdea);

router.post("/createIdea", ideasController.createIdea);

router.put("/addTeamMember/:tid&:uid", ideasController.addTeamMember);
router.put("/addTempTeamMember/:tid&:uid", ideasController.addTempTeamMember);


router.delete("/deletePost/:id", ideasController.deleteIdea);

module.exports = router;
