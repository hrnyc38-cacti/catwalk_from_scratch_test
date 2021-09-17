import React from "react";
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function StarSum({ ratings }) {
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
  const averageStar = (sum / divider).toFixed(1);


  return (
    <div>
      <span className="star-sum">{averageStar} </span>
      <Rating name="half-rating-read" defaultValue={averageStar} precision={0.25} readOnly />
    </div>
  )
};

export default StarSum;




// const getStars = (num) => {
//   let percentFilled = (num / 5) * 100 + '%';
//   let percentOutlined = (5 - num) / 5 * 100 + '%';
//   let j = 0;
//   let filledStars = [...Array(5)].map(() => {
//     return <BsStarFill key={j++} />
//   })
//   let outlineStars = [...Array(5)].map(() => {
//     return <BsStar key={j++} />
//   })
//   console.log('PERCENTAGE STARS ', percentFilled);
//   return (
//     <div className="star-rating">
//       <div className="star-rating-top" style={{width: percentFilled}}><span>★★★★★</span></div>
//       <div className="star-rating-bottom" ><span>★★★★★</span></div>
//     </div>
//   )
// };