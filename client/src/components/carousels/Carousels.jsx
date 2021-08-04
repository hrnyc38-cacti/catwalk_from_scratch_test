import React from "react";
import axios from "axios";
import RelatedCarousel from "./RelatedCarousel.jsx";
import YourOutfit from "./YourOutfit.jsx"


var Carousels = (props) => {
    return (
      <div className="ProductCarousels">
        <RelatedCarousel productId={props.productId}  cardOnClick={props.cardOnClick}/>
        <YourOutfit productId={props.productId}  />
      </div>

    );
}
export default Carousels;