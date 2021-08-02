import React from "react";
import axios from "axios";
import RelatedCarousel from "./RelatedCarousel.jsx";


class Carousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 11001
    };
  }

  render () {
    return (
      <div className="ProductCarousels">
        <RelatedCarousel productID={this.state.productID}/>
      </div>

    );
  }
}
export default Carousels;