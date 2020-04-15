require("dotenv").config();

const { typeDefs } = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// connect to mongodb
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`,
  function (err) {
    if (err) throw err;
  }
);
mongoose.Promise = global.Promise;

const formatError = (err) => {
  return err;
};
const server = new ApolloServer({
  cors: {
    origin: "*",
  },
  typeDefs,
  resolvers,
  formatError,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(process.env.DB_URL);
  console.log(`🚀  Server ready at ${url}`);
});
