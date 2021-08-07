import React from 'react';

class StyleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChangeStyleClick = this.handleChangeStyleClick.bind(this);
  }

  componentDidMount() {

  }

  handleChangeStyleClick(style_id, index) {
    let reset = function (element) {
      let selectedButton = document.getElementsByClassName(element);
      selectedButton[0].selectedIndex = 0;
    }
    reset('size-selector');
    reset('quantity-selector');
    let photoData = this.props.currentStyles[index].photos;
    let currentPhotosArray = [];
    let currentThumbsArray = [];
    for (let i = 0; i < photoData.length; i++) {
      currentPhotosArray.push(photoData[i].url);
      currentThumbsArray.push(photoData[i].thumbnail_url);
    }
    let sizeData = this.props.currentStyles[index].skus;
    let sku;
    let quantityAvailable = 1;
    let currentQuantitiesArray = [];
    let currentSizesArray = [];
    for (let key in sizeData) {
      currentSizesArray.push(sizeData[key].size);
      if (sizeData[key].size === 'M') {
        quantityAvailable = sizeData[key].quantity;
        sku = key;
      }
    }
    for (let i = 2; i <= quantityAvailable; i++) {
      currentQuantitiesArray.push(i);
    }
    let newState = {
      currentQuantitiesAvailable: currentQuantitiesArray,
      currentSizesAvailable: currentSizesArray,
      currentStyleID: style_id,
      selectedQuantity: 1,
      selectedSize: 'M',
      currentThumbs: currentThumbsArray,
      currentPhotos: currentPhotosArray,
      styleIndex: index,
      mainImage: currentPhotosArray[0],
      styleName: this.props.currentStyles[index].name
    }
    this.props.handleUpdateMainAppState(newState);
  }

  render() {
    return (
      <div className="styles-section">
        <h4 id="style-text">STYLE >  {this.props.styleName}</h4>
        <div className="style-selection">
          {this.props.currentStyles.map((thumb, index) => {
            return (
              <div className="individual-styles-thumb" key={thumb.style_id} onClick={() => this.handleChangeStyleClick(thumb.style_id, index)}>
                <img className="thumb-photo" src={thumb.photos.[0].thumbnail_url} />
              </div>
            )
          })}

        </div>
      </div >
    )
  }

}

export default StyleSelection;