import React from 'react';
import './Review.css'
function Review() {
    const reviews = [
      {
        id: 1,
        name: 'John Doe',
        rating: 5,
        reviewText: 'I had an excellent experience working with this agency. They helped me find the perfect home within my budget.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        reviewText: 'The renting process was smooth, and the property I found through them exceeded my expectations.',
      },
      {
        id: 3,
        name: 'Alice Johnson',
        rating: 5,
        reviewText: 'I recently sold my house with their assistance. The team was professional and got me a great deal.',
      },
    ];
  
    return (
      <div className="review-page">
        <h1>Customer Reviews</h1>
        <ul className="review-list">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <div className="review-rating">Rating: {review.rating} stars</div>
              <div className="review-author">By: {review.name}</div>
              <p className="review-text">{review.reviewText}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Review;  