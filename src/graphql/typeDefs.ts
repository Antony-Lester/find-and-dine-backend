const { gql } = require('apollo-server');

module.exports = gql`

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
        getRestaurantsByCategory(categoryName: String, amount: Int): [Restaurant]
    }
`
