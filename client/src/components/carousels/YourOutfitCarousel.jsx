import React from "react";
import axios from "axios";
import YourOutfitCard from './YourOutfitCard.jsx';
import Carousel from 'react-elastic-carousel';
import { TOKEN } from './../../config.js';


class YourOutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outFits: []
    };
    this.addOutfit = this.addOutfit.bind(this);
    this.removingOutfit = this.removingOutfit.bind(this);
  }
  addOutfit() {
    var currentOutfit = this.state.outFits.slice();
    currentOutfit.push(this.props.productId);
    this.setState({ outFits: currentOutfit });
  }
  removingOutfit(e) {
    for (var x = 0; x <= this.state.outFits.length; x++) {
      if (e === this.state.outFits[x]) {
        if (this.state.outFits.length === 1) {
          this.setState({ outFits: [] });
        } else {
          var newOutfitList = this.state.outFits.splice(x, 1);
          this.setState({ outFits: newOutfitList });
        }
      }
    }

  }
  render() {
    var breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
    return (
      <div>
        <h5 className="section-head">Your Outfit</h5>
        <Carousel breakPoints={breakPoints}>
          <YourOutfitCard handleClick={this.addOutfit} />
          {this.state.outFits.map((product) => {
            return <YourOutfitCard productID={product} removingOutfit={this.removingOutfit} />
          })}
        </Carousel>
      </div>
    );
  }
}
export default YourOutfitCarousel;