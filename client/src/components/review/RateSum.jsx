import React from "react";
import BarChart from './Barchart.jsx';
import StarSum from './StarSum.jsx';

function RateSum ({ meta }) {
  console.log('RATINGS ', meta.ratings);
  return (
    <div>
      <StarSum ratings={meta.ratings}/>
      <BarChart ratings={meta.ratings}/>
    </div>
  )

}


export default RateSum;