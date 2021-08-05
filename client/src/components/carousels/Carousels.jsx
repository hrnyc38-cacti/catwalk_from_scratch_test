import React from "react";
import axios from "axios";
import RelatedCarousel from "./RelatedCarousel.jsx";
import YourOutfitCarousel from "./YourOutfitCarousel.jsx"

var Carousels = (props) => {
    return (
      <div className="ProductCarousels">
        <RelatedCarousel productId={props.productId} cardOnClick={props.cardOnClick}/>
        <YourOutfitCarousel productId={props.productId}/>
      </div>
    );
}
export default Carousels;