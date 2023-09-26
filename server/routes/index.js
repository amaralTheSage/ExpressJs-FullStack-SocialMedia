const express = require("express");
const router = express.Router();
const { Post } = require("../models/index");

router.get("/", async (req, res) => {
  // GET request

  const listOfPosts = await Post.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  // POST request

  const post = req.body;

  await Post.create(post);

  res.json({
    message: 'Post created!',
    post
  });
});

module.exports = router;
