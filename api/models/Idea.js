const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: Array,
    require: true,
  },
  tempTeam: {
    type: Array,
  },
  founder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
},

});

module.exports = mongoose.model("Post", PostSchema);
