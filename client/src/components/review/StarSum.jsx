import React from "react";
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

function StarSum ({ratings}) {
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
  console.log('average star ', averageStar);

  const getStars = (num) => {
    console.log('NOW in getstars');
    let deciPart = num - Math.floor(num);
    num = Math.floor(num);
    let outlineCount = 5 - num;
    let j = 0;
    let halfStar = [];
    if (deciPart !== 0) {
      halfStar = [
        <BsStarHalf key={j++}/>
      ];
      outlineCount --;
    }
    let filledStars = [...Array(num)].map(()=> {
      return <BsStarFill key={j++} />
    })
    //let n = 5 - j
    let outlineStars = [...Array(outlineCount)].map(() => {
      return <BsStar key={j++} />
    })
    var stars = filledStars.concat(halfStar, outlineStars);
    return stars
  }
  return (
    <div>
      <span className="star-sum">{averageStar} </span>
      {getStars(averageStar)}
    </div>

  )
}

export default StarSum;

// deciPart = deciPart * 100
// halfStar = [<BsStarFill style={{
//   display: "inline-block",
//   width: "7px",
//   overflow: "hidden",
//   direction: (deciPart%25===0) ? "ltr" : "rtl"
// }} />]