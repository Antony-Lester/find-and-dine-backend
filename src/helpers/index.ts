const { getObjectId } = require('mongo-seeding');

interface LocationInfo {
  lat: number;
  lng: number;
}

interface ReviewDistribution {
  oneStar: number;
  twoStar: number;
  threeStar: number;
  fourStar: number;
  fiveStar: number;
}

interface DiningLocationItem {
  title: string;
  categoryName: string;
  address: string;
  city: string;
  postalCode: string;
  website: string;
  location: LocationInfo;
  categories: string[];
  url: string;
  placeId: string;
  reviewsCount: number;
  reviewsDistribution: ReviewDistribution;
  imageUrls: string[];
}

interface DiningLocationItems extends Array<DiningLocationItem>{}

export const mapToEntities = (restaurants: DiningLocationItems) => {
  return restaurants.map(({ title, categoryName, address, city, postalCode, website, location, categories, url, placeId, reviewsCount, reviewsDistribution, imageUrls}) => {
    return {
      title,
      categoryName,
      address,
      city,
      postalCode,
      website,
      location,
      categories,
      url,
      placeId,
      reviewsCount,
      reviewsDistribution,
      imageUrls
    };
  });
};

