import React from 'react';


function ProductInfo(props) {
  //console.log('this is category', props.category);
  return (
    <div className="product-info">
      <h5>insert stars and a link to reviews here</h5>
      <h5>{props.category}</h5>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
    </div>
  )
};

export default ProductInfo;