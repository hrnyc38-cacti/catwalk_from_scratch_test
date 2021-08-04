import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

class ProductSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFavorites: []
    };

    this.handleToggleAddToFavoritesClick = this.handleToggleAddToFavoritesClick.bind(this);
  }

  handleToggleAddToFavoritesClick(e) {
    let newFavsArray = this.props.currentFavorites;
    //newFavsArray.push({})
    console.log(this.props.currentProduct);

  }

  render() {
    let currentStyles = this.props.currentStyles;
    let styleIndex = this.props.styleIndex;
    let arrayOfSKUS = [];
    // for (let key in currentStyles[styleIndex].skus) {
    //   arrayOfSKUS.push(currentStyles[styleIndex].skus.[key])
    // }
    console.log('arrayOfSKUS', arrayOfSKUS);
    console.log('next', this.props.currentStyles);
    return (
      <div className="product-selectors">
        <form>
          <div className="size-and-quantity-div">
            <div className="div-size-select">
              <select className="size-selector">
                <option selected disabled>SELECT SIZE</option>
                {/* {currentStyles[styleIndex].} */}
                <option>small</option>
              </select>
            </div>
            <div className="div-quantity">
              <select className="quantity-selector">
                <option>1</option>
              </select>
            </div>
          </div>
          <div className="add-and-star-div">
            <div className="div-add">
              <button className="add-to-bag-button">ADD TO BAG</button>
            </div>

            <AiOutlineStar
              className="favs-star-unchecked"
              onClick={(e) => this.handleToggleAddToFavoritesClick(e)} />

          </div>
        </form>
      </div>

    )
  }


}

export default ProductSelectors;