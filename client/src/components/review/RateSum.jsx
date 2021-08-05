import React from "react";
import BarChart from './Barchart.jsx';
import StarSum from './StarSum.jsx';
import CharBars from './CharBars.jsx';

function RateSum({ meta }) {
  //console.log('RATINGS ', meta.ratings);
  let recommend = parseInt(meta.recommended.true);
  let noRecommend = parseInt(meta.recommended.false);
  let rate = (recommend / (recommend + noRecommend)).toFixed(2) * 100 + '%';
  return (
    <div>
      <StarSum ratings={meta.ratings} />
      <span>{rate} of reviews recommend this product</span>
      <BarChart ratings={meta.ratings} />
      <CharBars characteristics={meta.characteristics} />
    </div>
  )

}


export default RateSum;