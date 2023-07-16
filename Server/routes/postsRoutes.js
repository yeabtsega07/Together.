const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);
router.get("/:id", postsController.getPost);
router.get("/", postsController.getAllPosts);

module.exports = router;
