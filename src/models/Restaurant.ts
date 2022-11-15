const { model, Schema } = require('mongoose');

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

module.exports = model("Restaurant", restaurantSchema);
