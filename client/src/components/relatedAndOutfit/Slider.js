import React, { useState } from 'react';
import './../../../dist/slider.scss';
import RelatedProductCard from './RelatedProductCard.jsx'

function Slider(props) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.relatedProducts.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (props.relatedProducts.length - 1) ? setX(0) : setX(x - 100);
  };
  props.relatedProducts
  return (
    <div className='slider'>
      {props.relatedProducts.map((item, index) => {
        return (
          <div key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}>

            <RelatedProductCard key={item} productID={item} cardOnClick={props.cardClick} />

          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>left</button>
      <button id="goRight" onClick={goRight}>right</button>
    </div>
  );
};

export default Slider;