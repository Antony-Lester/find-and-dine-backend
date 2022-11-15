import * as dotenv from "dotenv";
const { ApolloServer } = require('apollo-server');
const mongoose = require("mongoose");
const MONGODB =   "mongodb+srv://ncg3o:northcoders123@nc-find-and-dine.4nmddap.mongodb.net/find-and-dine?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT;

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MongoDB Connection Successful");
    return server.listen({port: `${port}`});
  })
  .then((res) => {
    console.log(`Server running at${res.url}`);
  })

mongoose.connection.once("open", () => {
  console.log("connected to database");
});
