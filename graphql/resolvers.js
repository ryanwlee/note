import Note from "../models/note";

const resolvers = {
  Query: {
    notes: async () => {
      try {
        console.log("starting notes query");
        const notes = await Note.find({});
        return notes;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addNote: async (_, args) => {
      try {
        console.log("starting addNote mutation");
        const note = await Note.create({
          content: args.content,
        });
        const { _id, content } = note;
        return {
          _id,
          content,
        };
      } catch (err) {
        console.log(err);
      }
    },
    updateNote: async (_, args) => {
      try {
        console.log("starting updateNote mutation");
        await Note.findByIdAndUpdate(
          {
            _id: args._id,
          },
          {
            content: args.content,
          }
        );
        const note = await Note.findOne({ _id: args._id });
        return { _id: note._id, content: note.content };
      } catch (err) {
        console.log(err);
      }
    },
    deleteNote: async (_, args) => {
      try {
        console.log("starting deleteNote mutation");
        const note = await Note.findByIdAndRemove({ _id: args._id });
        return note;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default resolvers;
