const { gql } = require('apollo-server');

module.exports = gql`

    type Location {
        lat: Int
        lng: Int
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
`
