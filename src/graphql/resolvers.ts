const Restaurant = require('../models/Restaurant');

module.exports = {
    Query: {
        async getRestaurantByID(_, { ID } ) {
            return await Restaurant.findById(ID);
        },

        async getRestaurants(_, { amount } ) {
            return await Restaurant.find().limit(amount);
        },

        async getRestaurantsByCategory(_, { categoryName, amount } ) {
            return await Restaurant.find({ categoryName: categoryName }).limit(amount);
        }
    }
}