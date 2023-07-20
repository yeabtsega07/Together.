const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
//   console.log(newPost);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE POST
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  console.log("trying to delete");

  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unexpected error occurred during post deletion" });
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json("Unexpected error occurred while fetching post data");
  }
};


// GET POST
const getPost = async (req, res) => {
  console.log("trying tp get a single post");
  console.log(req.params.id);
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL POSTS
const getAllPosts = async (req, res) => {
  console.log("trying to get all posts");
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: { $in: [catName] },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
  // console.log(res);
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
};
