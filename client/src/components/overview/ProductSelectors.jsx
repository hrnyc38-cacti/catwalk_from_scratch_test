import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

class ProductSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleToggleAddToFavoritesClick = this.handleToggleAddToFavoritesClick.bind(this);
    this.handleSelectQuantity = this.handleSelectQuantity.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleAddToBagClick = this.handleAddToBagClick.bind(this);
    this.checkFavoritesForWhichToRender = this.checkFavoritesForWhichToRender.bind(this);
  }

  handleSelectQuantity(e) {
    this.props.handleUpdateMainAppState({ selectedQuantity: e.target.value })
  }

  handleSelectSize(e) {
    let sizeData = this.props.currentStyles[this.props.styleIndex].skus;
    let sku;
    let quantityAvailable = 1;
    let currentQuantitiesArray = [];
    for (let key in sizeData) {
      if (sizeData[key].size === e.target.value) {
        quantityAvailable = sizeData[key].quantity;
        sku = key;
      }
    }
    for (let i = 2; i <= quantityAvailable; i++) {
      currentQuantitiesArray.push(i);
    }
    let newState = {
      currentSKU: sku,
      currentQuantitiesAvailable: currentQuantitiesArray,
      selectedSize: e.target.value
    };
    this.props.handleUpdateMainAppState(newState);
    console.log(this.props.currentSKU);
  }

  handleToggleAddToFavoritesClick(e) {
    let oldFavs = this.props.currentFavorites;
    let itemToBeAddedToFavs = {
      name: this.props.currentProduct.name,
      currentProduct: this.props.currentProduct,
      product_id: this.props.currentProductID,
      currentCategory: this.props.currentCategory,
      image: this.props.currentThumbs[0],
      styleName: this.props.styleName,
      sku: this.props.currentSKU,
      style_id: this.props.currentStyleID,
      size: this.props.selectedSize,
      quantity: this.props.selectedQuantity
    }
    let itemAlreadyInFavs = false;
    let timesToIterate = oldFavs.length
    for (let i = 0; i < timesToIterate; i++) {
      if (oldBag.length === 0) {
        oldFavs.push(itemToBeAddedToFavs);
        itemAlreadyInFavs = true;
        break;
      }
      if (oldFavs[i].sku === this.props.currentSKU) {
        itemAlreadyInFavs = true;
        break;
      }
    }
    if (!itemAlreadyInFavs) {
      oldFavs.push(itemToBeAddedToFavs);
    }
    let newState = { currentFavorites: oldFavs, currentItemInFavorites: itemAlreadyInFavs }
    this.props.handleUpdateMainAppState(newState);

  }

  handleAddToBagClick(e) {
    let oldBag = this.props.addToBag;
    let itemToBeAddedToBag = {
      name: this.props.currentProduct.name,
      currentProduct: this.props.currentProduct,
      product_id: this.props.currentProductID,
      currentCategory: this.props.currentCategory,
      image: this.props.currentThumbs[0],
      styleName: this.props.styleName,
      sku: this.props.currentSKU,
      style_id: this.props.currentStyleID,
      size: this.props.selectedSize,
      quantity: this.props.selectedQuantity
    }
    let itemAlreadyInBag = false;
    let timesToIterate = oldBag.length
    for (let i = 0; i < timesToIterate; i++) {
      if (oldBag.length === 0) {
        oldBag.push(itemToBeAddedToBag);
        itemAlreadyInBag = true;
        break;
      }
      if (oldBag[i].sku === this.props.currentSKU) {
        itemAlreadyInBag = true;
        break;
      }
    }
    if (!itemAlreadyInBag) {
      oldBag.push(itemToBeAddedToBag);
    }
    let newState = { addToBag: oldBag }
    this.props.handleUpdateMainAppState(newState);
  }

  componentDidMount() {
    console.log(this.props.currentStyles);
  }

  checkFavoritesForWhichToRender() {
    if (!itemAlreadyInFavs) {
      return (<AiOutlineStar className="favs-star-unchecked" onClick={(e) => this.handleToggleAddToFavoritesClick(e)} />)
    } else {
      return (<AiFillStar className="favs-star-unchecked" onClick={(e) => this.handleToggleAddToFavoritesClick(e)} />)
    }
  }

  render() {
    let currentStyles = this.props.currentStyles;
    let styleIndex = this.props.styleIndex;
    let arrayOfSKUS = [];
    // for (let key in currentStyles[styleIndex].skus) {
    //   arrayOfSKUS.push(currentStyles[styleIndex].skus.[key])
    // }
    //console.log('arrayOfSKUS', arrayOfSKUS);
    //console.log('next', this.props.currentStyles);
    return (
      <div className="product-selectors">
        <div className="size-and-quantity-div">
          <div className="div-size-select">
            <select className="size-selector" onChange={(e) => { this.handleSelectSize(e) }}>
              <option selected disabled>SELECT SIZE</option>
              {this.props.currentSizesAvailable.map((size) => {
                return (
                  <option key={size}>{size}</option>
                )
              })}
            </select>
          </div>
          <div className="div-quantity">
            <select className="quantity-selector" onChange={(e) => { this.handleSelectQuantity(e) }}>
              <option selected>1</option>
              {this.props.currentQuantitiesAvailable.map((qty) => {
                return (
                  <option>{qty}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="add-and-star-div">
          <div className="div-add">
            <button className="add-to-bag-button" onClick={(e) => { this.handleAddToBagClick(e) }}>ADD TO BAG +</button>
          </div>
          <div className="div-star">
            {/* {this.checkFavoritesForWhichToRender()} */}
          </div>

        </div>

      </div>

    )
  }


}

export default ProductSelectors;