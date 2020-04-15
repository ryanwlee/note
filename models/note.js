const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* create task Schema & model */
const NoteSchema = new Schema({
  content: {
    type: String,
    required: [true, "content is required"],
  },
});

const Note = mongoose.model("note", NoteSchema);

module.exports = Note;
