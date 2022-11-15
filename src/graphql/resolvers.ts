const Restaurant = require('../models/Restaurant');
const { AllowedCategoryNames } = require('./typeDefs');
module.exports = {

    AllowedCategoryNames: {
        THAI : "Thai restaurant",
        ITALIAN : "Italian restaurant",
        RESTAURANT : "Restaurant",
        CHINESE : "Chinese restaurant",
        SPANISH : "Spanish restaurant",
        HAMBURGER : "Hamburger restaurant",
        GREEK : "Greek restaurant",
        BRITISH : "British restaurant",
        VEGAN : "Vegan restaurant",
        BUFFET : "Buffet restaurant",
        KOREAN : "Korean restaurant",
        BREAKFAST : "Breakfast restaurant",
        PUB : "Pub",
        MODERNEUROPEAN : "Modern European restaurant",
        BRAZILLIAN : "Brazilian restaurant",
        BARANDGRILL : "Bar & grill",
        AMERICAN : "American restaurant",
        JAPANESE : "Japanese restaurant",
        TEPPANYAKI : "Teppanyaki restaurant",
        PANASIAN : "Pan - Asian restaurant",
        AUTHENTICJAPANESE : "Authentic Japanese restaurant",
        FASTFOOD : "Fast food restaurant",
        FINEDINING : "Fine dining restaurant",
        MIDDLEEASTERN : "Middle Eastern restaurant",
        ETHIOPIAN : "Ethiopian restaurant",
        PIZZA : "Pizza restaurant",
        FAMILY : "Family restaurant",
        MEDITERRANEAN : "Mediterranean restaurant",
        TAPAS : "Tapas restaurant",
        ARMENIAN : "Armenian restaurant",
        DINER : "Diner",
        STEAK : "Steak house",
        INDIAN : "Indian restaurant",
        BARBECUE : "Barbecue restaurant",
        MODERNBRITISH : "Modern British restaurant",
        BURRITO : "Burrito restaurant",
        LEBANESE : "Lebanese restaurant",
        ASIAN : "Asian restaurant",
        TURKISH : "Turkish restaurant",
        MODERNINDIAN : "Modern Indian restaurant",
        ARGENTINIAN : "Argentinian restaurant",
        BRASSERIE : "Brasserie",
        BAR : "Bar",
        SICHUAN : "Sichuan restaurant",
        DELIVERYCHINESE : "Delivery Chinese restaurant"
    },

    Query: {
        async getRestaurantByID(_, { ID } ) {
            return await Restaurant.findById(ID);
        },

        async getRestaurants(_, { amount } ) {
            return await Restaurant.find().limit(amount);
        },

        async getRestaurantsByCategory(_, { categoryName: AllowedCategoryNames, amount } ) {
            return await Restaurant.find({ categoryName: AllowedCategoryNames }).limit(amount);
        }
    }
}

