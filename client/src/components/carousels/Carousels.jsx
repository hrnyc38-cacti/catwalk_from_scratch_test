import React from "react";
import axios from "axios";
import RelatedCarousel from "./RelatedCarousel.jsx";


var Carousels = (props) => {
    return (
      <div className="ProductCarousels">
        <RelatedCarousel productId={props.productId}  cardOnClick={props.cardOnClick}/>
      </div>

    );
}
export default Carousels;