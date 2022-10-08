const Idea = require("../models/Idea");
const dbConnect = require('../config/db.js')

module.exports = {
  getIdea: async (req, res) => {
    try {
      const db = dbConnect()
      const doc = await db.collection('ideas').doc(req.params.id).get()
      let idea = doc.data()
      console.log(idea)
     
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  createIdea: async (req, res) => {
    try {

      // Upload image to cloudinary


      await Idea.create({
        idea: 'Blah',
        teamMembers: ["Its me"],
        founder: "Its me",
      });
      console.log("Idea has been added!");
      // res.redirect(`/idea/${response._id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteIdea: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
