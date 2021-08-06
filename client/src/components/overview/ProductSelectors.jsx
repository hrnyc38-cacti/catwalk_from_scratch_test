import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

class ProductSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleToggleAddToFavoritesClick = this.handleToggleAddToFavoritesClick.bind(this);
    this.handleSelectQuantity = this.handleSelectQuantity.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
  }

  handleSelectQuantity(e) {
    console.log(e.target.value);
  }

  handleSelectSize(e) {
    console.log(e.target.value);
  }

  handleToggleAddToFavoritesClick(e) {
    let newFavsArray = this.props.currentFavorites;
    //newFavsArray.push({})
    //console.log(this.props.currentProduct);
  }

  componentDidMount() {
    console.log(this.props.currentStyles);
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
            <button className="add-to-bag-button">ADD TO BAG +</button>
          </div>
          <div className="div-star">
            <AiOutlineStar
              className="favs-star-unchecked"
              onClick={(e) => this.handleToggleAddToFavoritesClick(e)} />
          </div>

        </div>

      </div>

    )
  }


}

export default ProductSelectors;