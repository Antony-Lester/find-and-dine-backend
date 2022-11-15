const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    title: String,
    categoryName: String,
    address: String,
    city: String,
    postalCode: String,
    website: String,
    location: Object,
    categories: Array,
    url: String,
    placeId: String,
    reviewsCount: Number,
    reviewsDistribution: Object,
    imageUrls: Array,
  },
  { _id: false }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
