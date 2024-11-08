const apiKey = 'v0ZG6vWt943ZgreGwvkesMa2TebNl6vGf3HjS8EN0T5-tC4oUY37bySKvrdCMPsytfcU0n5F9mFSuPdvMOg7Bn6n_N2dDtaZCBj1okP-kPsUh89V5A7iDlalL48tZ3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};

export default Yelp;
