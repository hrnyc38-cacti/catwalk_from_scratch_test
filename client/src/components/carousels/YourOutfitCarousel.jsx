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
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem('outFits') !== null) {
      var localOutfits = localStorage.getItem('outFits');
      localOutfits = localOutfits.split(',');
      for (var x = 0; x < localOutfits.length; x++) {
        localOutfits[x] = parseInt(localOutfits[x]);
      }
      this.setState({ outFits: localOutfits });
    }
  }
  addOutfit() {
    var currentOutfit = this.state.outFits.slice();
    currentOutfit.push(parseInt(this.props.productId));
    this.setState({ outFits: currentOutfit });
    localStorage.setItem('outFits', currentOutfit);
  }
  removingOutfit(e) {
    var newOutfit = [];
    for (var x = 0; x < this.state.outFits.length; x++) {
      if (e !== this.state.outFits[x]) {
        newOutfit.push(this.state.outFits[x]);
      }
    }
    if (newOutfit.length === 0) {
      localStorage.removeItem('outFits');
    } else {
      localStorage.setItem('outFits', newOutfit);
    }
    this.setState({ outFits: newOutfit });
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
            return <YourOutfitCard key={product} productID={product} removingOutfit={this.removingOutfit} />
          })}
        </Carousel>
      </div>
    );
  }
}
export default YourOutfitCarousel;