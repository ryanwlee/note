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
    }
  },
  Mutation: {
    addNote: async (_, args) => {
      try {
        console.log("starting addNote mutation");
        const note = await Note.create({
          title: args.title,
          content: args.content
        });
        const { _id, title, content } = note;
        return {
          _id,
          title,
          content
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
            _id: args._id
          },
          {
            title: args.title,
            content: args.content
          }
        );
        const note = await Note.findOne({ _id: args._id });
        return { _id: note._id, title: note.title, content: note.content };
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export default resolvers;
