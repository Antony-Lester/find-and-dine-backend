const MVRestaurant = require("../models/restaurant_schema");
const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const LocationInfo = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  }),
});

const ReviewsDistributionList = new GraphQLObjectType({
  name: "Reviews",
  fields: () => ({
    oneStar: { type: GraphQLInt },
    twoStar: { type: GraphQLInt },
    threeStar: { type: GraphQLInt },
    fourStar: { type: GraphQLInt },
    fiveStar: { type: GraphQLInt },
  }),
});

const Restaurant = new GraphQLObjectType({
  name: "Restaurant",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    categoryName: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    postalCode: { type: GraphQLString },
    website: { type: GraphQLString },
    location: { type: LocationInfo },
    categories: { type: GraphQLList(GraphQLString) },
    url: { type: GraphQLString },
    placeId: { type: GraphQLString },
    reviewsCount: { type: GraphQLInt },
    reviewsDistribution: { type: ReviewsDistributionList },
    imageUrls: { type: GraphQLList(GraphQLString) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurant: {
      type: Restaurant,
      args: { categoryName: { type: GraphQLString } },
      resolve(parent, args) {
        return MVRestaurant.findById(args.categoryName);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
