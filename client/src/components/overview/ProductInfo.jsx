import React from 'react';


function ProductInfo(props) {
  //console.log(props);
  return (
    <div className="product-info">
      <h5>insert stars and a link to reviews here</h5>
      <h2>{props.category}</h2>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
    </div>
  )
};

export default ProductInfo;