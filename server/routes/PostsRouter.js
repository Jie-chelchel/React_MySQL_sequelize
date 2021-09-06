const express = require("express");
const router = express.Router();
//get Posts models here
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const allPosts = await Posts.findAll(); //with sequelize, you don't have to write those function, findAll() is a function sequelize provided
  res.json(allPosts);
});

//sequelize you need to make everything async
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post); //this is a sequelize function, it will insert post to your table
  res.json(post);
});

module.exports = router;
