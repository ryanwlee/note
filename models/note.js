const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* create task Schema & model */
const NoteSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"]
  },
  content: {
    type: String,
    required: false
  }
});

const Note = mongoose.model("note", NoteSchema);

module.exports = Note;
