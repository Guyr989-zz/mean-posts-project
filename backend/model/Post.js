const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
PostSchema.plugin(normalize);
module.exports = mongoose.model("Post", PostSchema);
