import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
const Restaurant = require("./models/restaurant_schema");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/restaurantSchema");
const mongoose = require("mongoose");

const restaurants = Restaurant.find();
console.log(restaurants);

mongoose.connect(
  "mongodb+srv://ncg3o:northcoders123@nc-find-and-dine.4nmddap.mongodb.net/fnd?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
