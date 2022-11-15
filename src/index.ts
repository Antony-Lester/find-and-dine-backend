import * as dotenv from "dotenv";
const { ApolloServer } = require('apollo-server');
const mongoose = require("mongoose");
dotenv.config({ path: __dirname + "/.env" });
const MONGODB = process.env.MONGODB;   

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const port = process.env.PORT || 3000;

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MongoDB Connection Successful");
    return server.listen({port: `${port}`});
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })

mongoose.connection.once("open", () => {
  console.log("connected to database");
});
