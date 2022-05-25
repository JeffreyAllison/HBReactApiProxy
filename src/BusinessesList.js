import React from 'react';

export default function BusinessesList({ yelpBusinesses }) {
  return (
    <div>
      {yelpBusinesses.map(({ name, image_url, price, rating }, i) => (
        <div className="yelp-businesses" key={name + rating + i}>
          <h3>Name: {name}</h3>
          <p>price: {price}</p>
          <p>rating: {rating}</p>
          <img src={image_url} />
        </div>
      ))}
    </div>
  );
}
