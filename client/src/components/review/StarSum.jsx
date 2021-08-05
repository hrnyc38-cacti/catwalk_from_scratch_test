import React from "react";
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

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
  //console.log('average star ', averageStar);

  const getStars = (num) => {
    //console.log('NOW in getstars');
    let j = 0;
    let filledStars = [...Array(num)].map(() => {
      return <BsStarFill key={j++} />
    })
    //let n = 5 - j
    let outlineStars = [...Array(5 - num)].map(() => {
      return <BsStar key={j++} />
    })
    var stars = filledStars.concat(outlineStars);
    return stars
  }
  return (
    <div>
      <span className="star-sum">{averageStar} </span>
      {getStars(Math.floor(averageStar))}
    </div>

  )
}

export default StarSum;