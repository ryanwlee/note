import Note from "./models/note";

const resolvers = {
  Query: {
    notes: () => {
      Note.find({}).then(function(notes) {
        return notes;
      });
    }
  },
  Mutation: {
    addNote: (_, { title, content }) => {
      console.log(title, content);
      Note.create({ title, content })
        .then(function(note) {
          console.log(note);
          return { title, content };
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};

export default resolvers;
