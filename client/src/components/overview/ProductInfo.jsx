import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

function ProductInfo({ ratings, category, name, price, description }) {
  var getStars = (ratings) => {
    let star = [];
    let count = [];
    for (var k in ratings) {
      star.push(parseInt(k));
      count.push(parseInt(ratings[k]))
    }
    let sum = 0;
    let divider = 0;
    for (let i = 0; i < star.length; i++) {
      sum += star[i] * count[i];
      divider += count[i];
    }
    let averageStar = (sum / divider).toFixed(1);
    let deciPart = averageStar - Math.floor(averageStar);
    averageStar = Math.floor(averageStar);
    let outlineCount = 5 - averageStar;
    let j = 0;
    let halfStar = [];
    if (deciPart !== 0) {
      halfStar = [
        <BsStarHalf key={j++} />
      ];
      outlineCount--;
    }
    let filledStars = [...Array(averageStar)].map(() => {
      return <BsStarFill key={j++} />
    })
    let outlineStars = [...Array(outlineCount)].map(() => {
      return <BsStar key={j++} />
    })
    var stars = filledStars.concat(halfStar, outlineStars);
    return stars
  }
  if (!ratings) {
    return <div>loading</div>
  } else {
    return (
      <div className="product-info">
        <span className="stars-on-product-info">{getStars(ratings)}</span>
        <span>
          <a id="read-all-reviews" href="#reviews">Read All Reviews</a>
        </span>
        <h5 className="category-display">{category}</h5>
        <h1>{name}</h1>
        <h5>"{description}"</h5>
        <h4>{price}</h4>
      </div>
    )
  }
};

export default ProductInfo;