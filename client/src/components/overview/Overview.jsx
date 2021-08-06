import React from "react";
import { TOKEN } from './../../config.js';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelection from './StyleSelection.jsx';
import ProductSelectors from './ProductSelectors.jsx';
import MainImageCarousel from './MainImageCarousel.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: {},
      currentPhotos: [],
      currentStyles: [],
      currentThumbs: [],
      currentFavorites: [],
      currentCategory: '',
      photoIndex: 0,
      styleIndex: 0,
      styleName: ''
    };
    //this.updateOverviewState = this.updateOverviewState.bind(this);
  }

  // updateOverviewState(newStateImport) {

  // }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps) {
  //   prevProps !== this.props ? this.initializeOverview() : null
  // }

  // initializeOverview() {

  // }

  render() {
    return (

      <div className="grid-container">
        <div className="grid-child-1">
          <MainImageCarousel
            handleUpdateMainAppState={this.props.handleUpdateMainAppState}
            currentProduct={this.props.currentProduct}
            currentPhotos={this.props.currentPhotos}
            currentStyles={this.props.currentStyles}
            currentThumbs={this.props.currentThumbs}
            photoIndex={this.props.photoIndex}
            mainImage={this.props.mainImage}
            styleIndex={this.props.styleIndex} />
        </div>
        <div className="grid-child-2">
          <ProductInfo
            description={this.props.currentProduct.description}
            name={this.props.currentProduct.name}
            category={this.props.currentCategory}
            price={this.props.currentProduct.default_price}
            ratings={this.props.ratings} />
          <StyleSelection
            currentStyles={this.props.currentStyles}
            currentThumbs={this.props.currentThumbs}
            handleUpdateMainAppState={this.props.handleUpdateMainAppState}
            styleIndex={this.props.styleIndex}
            styleName={this.props.styleName} />
          <ProductSelectors
            handleUpdateMainAppState={this.props.handleUpdateMainAppState}
            addToBag={this.props.addToBag}
            currentProductID={this.props.currentProductID}
            currentFavorites={this.props.currentFavorites}
            currentCategory={this.props.currentCategory}
            currentProduct={this.props.currentProduct}
            currentStyles={this.props.currentStyles}
            currentThumbs={this.props.currentThumbs}
            currentItemInFavorites={this.props.currentItemInFavorites}
            styleName={this.props.styleName}
            styleIndex={this.props.styleIndex}
            currentSizesAvailable={this.props.currentSizesAvailable}
            currentQuantitiesAvailable={this.props.currentQuantitiesAvailable}
            currentSKU={this.props.currentSKU}
            currentStyleID={this.props.currentStyleID}
            selectedSize={this.props.selectedSize}
            selectedQuantity={this.props.selectedQuantity} />
        </div>
      </div>
    )
  }
}

export default Overview;