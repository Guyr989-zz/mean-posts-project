const express = require("express");
const app = express();
const Post = require("./model/Post");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p6pyb.mongodb.net/mean-course?retryWrites=true&w=majority`;

mongoose
  .connect(connectionURL)
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).send({
      message: "Posts fetched",
      posts: documents,
    });
  });
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save();

  res.status(201).json({
    message: "New post created",
    post,
  });
});

app.put("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);

  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
    res.status(200).json({
      message: "post updated!",
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).send({
      message: `Post ${req.params.id} was deleted`,
    });
  });
});

module.exports = app;
