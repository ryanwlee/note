const notes = [];

const resolvers = {
  Query: {
    notes: () => notes
  }
};

export default resolvers;
