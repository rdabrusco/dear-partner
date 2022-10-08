const Idea = require("../models/Idea");
const dbConnect = require('../config/db.js')


const db = dbConnect()

module.exports = {
  
  getIdea: async (req, res) => {
    try {
      console.log('working?')
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
      console.log(req.body)
      // const db = dbConnect()
      const doc = await db.collection('ideas').add({
        title: req.body.title,
        idea: req.body.idea,
        teamMembers:  [req.body.founder],
        tempTeam: [],
        ownerEquity: Number(req.body.ownerEquity),
        remainingEquity: 100 - Number(req.body.ownerEquity)
      })
      console.log(doc)

      // await Idea.create({
      //   idea: 'Blah',
      //   teamMembers: ["Its me"],
      //   founder: "Its me",
      // });
      console.log("Idea has been added!");
      // res.redirect(`/idea/${response._id}`);
    } catch (err) {
      console.log(err);
    }
  },
  addTeamMember: async (req, res) => {
    try{
      const doc = await db.collection('ideas').doc(req.params.tid).get()
      let team = doc.data()
      console.log(team)

      console.log(req.body.teamMember)

      team.teamMembers.push(req.body.teamMember)
      console.log(team.teamMembers.length-1)
      await db.collection('ideas').doc(req.params.tid).update({teamMembers: team.teamMembers,  remainingEquity: 40})
      console.log(team)
    }catch(err){
      console.log(err)
    }
  },
  addTempTeamMember: async (req, res) => {
    try{
      const doc = await db.collection('ideas').doc(req.params.tid).get()
      let team = doc.data()
      console.log(team.tempTeam, req.params.uid)

      team.tempTeam.push(req.body.teamMember)
      await db.collection('ideas').doc(req.params.tid).update({tempTeam: team.tempTeam})
      res.send(team)
    }catch(err){
      console.log(err)
    }
  },
  updateEquity: async (req, res) => {
    try {
      console.log('is running?')
      const doc = await db.collection('ideas').doc(req.params.tid).get()
      let idea = doc.data()
      idea.remainingEquity = 100 - Number(idea.ownerEquity) / idea.teamMembers.length - 1

    }catch (err) {
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
