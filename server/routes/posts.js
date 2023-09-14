const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  // GET request

  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  // POST request

  const post = req.body;
  //post.title
  //post.text
  //post.username

  await Posts.create(post);
  res.json(post);
});

module.exports = router;
