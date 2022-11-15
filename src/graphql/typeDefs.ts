const { gql } = require('apollo-server');

module.exports = gql`

    enum AllowedCategoryNames {
        THAI
        ITALIAN
        RESTAURANT
        CHINESE 
        SPANISH 
        HAMBURGER 
        GREEK 
        BRITISH
        VEGAN
        BUFFET
        KOREAN
        BREAKFAST 
        PUB 
        MODERNEUROPEAN 
        BRAZILLIAN 
        BARANDGRILL
        AMERICAN
        JAPANESE 
        TEPPANYAKI 
        PANASIAN 
        AUTHENTICJAPANESE
        FASTFOOD 
        FINEDINING 
        MIDDLEEASTERN 
        ETHIOPIAN 
        PIZZA 
        FAMILY 
        MEDITERRANEAN 
        TAPAS 
        ARMENIAN
        DINER
        STEAK 
        INDIAN 
        BARBECUE 
        MODERNBRITISH 
        BURRITO 
        LEBANESE 
        ASIAN 
        TURKISH 
        MODERNINDIAN 
        ARGENTINIAN 
        BRASSERIE 
        BAR 
        SICHUAN 
        DELIVERYCHINESE 
    }

    type Location {
        lat: Float
        lng: Float
    }

    type ReviewsDistribution {
        oneStar: Int
        twoStar: Int
        threeStar: Int
        fourStar: Int
        fiveStar: Int
    }
    type Restaurant {
        id: ID
        title: String
        categoryName: String
        address: String
        city: String
        postalCode: String
        website: String
        location: Location
        categories: [String]
        url: String
        placeId: String
        reviewsCount: Int
        reviewsDistribution:ReviewsDistribution
        imageUrls: [String]
    }

    type Query {
        getRestaurantByID(ID: ID!): Restaurant!
        getRestaurants(amount: Int): [Restaurant]
        getRestaurantsByCategory(categoryName: AllowedCategoryNames, amount: Int): [Restaurant]
    }


`


export const enum Categories {
   
} 