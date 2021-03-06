import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Questions from './components/questions/index.jsx';
import RelatedCarousel from './components/relatedAndOutfit/RelatedCarousel.jsx';
import YourOutfitCarousel from'./components/relatedAndOutfit/YourOutfitCarousel.jsx';
import Review from './components/review/index.jsx';
import Overview from './components/overview/Overview.jsx';
import _ from 'underscore';
import { TOKEN } from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: '39333',
      currentProduct: {},
      addToBag: [],
      finishedLoading: false,
      currentPhotos: [],
      currentStyles: [],
      currentThumbs: [],
      currentFavorites: [],
      currentCategory: '',
      photoIndex: 0,
      styleIndex: 0,
      styleName: '',
      mainImage: '',
      currentSizesAvailable: [],
      currentQuantitiesAvailable: [],
      currentSKU: '',
      currentStyleID: '',
      selectedSize: 'M',
      selectedQuantity: 1,
      currentItemInFavorites: false,
      ratings: null
    }
    this.cardOnClick = this.cardOnClick.bind();
    this.handleUpdateMainAppState = this.handleUpdateMainAppState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  handleUpdateMainAppState(newState) {
    console.log('I made it back up', newState);
    this.setState(newState);
  }
  componentDidMount() {
    this.getProductByID(this.state.currentProductID);
  }
  cardOnClick = (e) => {
    this.setState({ currentProductID: e });
  }
  componentDidUpdate(previousProps, previousState, snapShot) {
    if (previousState.currentProductID !== this.state.currentProductID) {
      this.setState({ currentProductID: this.state.currentProductID });
      this.componentDidMount();
    }
  }

  getProductByID(ID) {
    let options = {
      type: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${ID}`,
      headers: {
        'Authorization': TOKEN
      }
    };
    axios(options)
      .then((res) => {
        let options2 = {
          type: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${ID}/styles`,
          headers: {
            'Authorization': TOKEN
          }
        };
        axios(options2)
          .catch((err) => {
            console.error(err);
          })
          .then((results) => {
            let photoData = results.data.results[this.state.styleIndex].photos;
            let currentPhotosArray = [];
            let currentThumbsArray = [];
            for (let i = 0; i < photoData.length; i++) {
              currentPhotosArray.push(photoData[i].url);
              currentThumbsArray.push(photoData[i].thumbnail_url);
            }
            let sizeData = results.data.results[this.state.styleIndex].skus;
            let currentSizesArray = [];
            let quantityAvailable = 1;
            let currentQuantitiesArray = [];
            let sku;
            let isFavorite = false;
            for (let key in sizeData) {
              currentSizesArray.push(sizeData[key].size);
              if (sizeData[key].size === 'M') {
                quantityAvailable = sizeData[key].quantity
                sku = key;
              }
            }
            for (let i = 2; i <= quantityAvailable; i++) {
              currentQuantitiesArray.push(i);
            }

            for (let i = 0; i < this.state.currentFavorites.length; i++) {
              if (sku === currentFavorites[i].sku) {
                isFavorite = true;
                break;
              }
            }

            this.setState({
              currentStyleID: results.data.results[0].style_id,
              currentProduct: res.data,
              currentStyles: results.data.results,
              currentPhotos: currentPhotosArray,
              currentCategory: res.data.category.toUpperCase(),
              currentThumbs: currentThumbsArray,
              styleName: results.data.results[this.state.styleIndex].name,
              mainImage: photoData[this.state.photoIndex].url,
              currentSizesAvailable: currentSizesArray,
              currentQuantitiesAvailable: currentQuantitiesArray,
              currentItemInFavorites: isFavorite,
              currentSKU: sku,
              finishedLoading: true
            })
          });
      })
      .catch((err) => {
        console.err('failed to load data from server', err);
      })
  }

  passRatings(rating) {
    this.setState({ ratings: rating });
  }
  render() {
    if (this.state.finishedLoading) {
      return (
        <div>
          {/* <Overview
            currentProduct={this.state.currentProduct}
            currentProductID={this.state.currentProductID}
            currentCategory={this.state.currentProduct.category}
            addToBag={this.state.addToBag}
            currentPhotos={this.state.currentPhotos}
            currentStyles={this.state.currentStyles}
            currentThumbs={this.state.currentThumbs}
            currentFavorites={this.state.currentFavorites}
            photoIndex={this.state.photoIndex}
            styleIndex={this.state.styleIndex}
            styleName={this.state.styleName}
            mainImage={this.state.mainImage}
            handleUpdateMainAppState={this.handleUpdateMainAppState}
            currentSizesAvailable={this.state.currentSizesAvailable}
            currentQuantitiesAvailable={this.state.currentQuantitiesAvailable}
            currentItemInFavorites={this.state.currentItemInFavorites}
            currentSKU={this.state.currentSKU}
            currentStyleID={this.state.currentStyleID}
            selectedSize={this.state.selectedSize}
            selectedQuantity={this.state.selectedQuantity}
            ratings={this.state.ratings} /> */}
          {/* <h3 className="slogan" >"{this.state.currentProduct.slogan}"</h3> */}
          <RelatedCarousel productId={this.state.currentProduct.id} cardOnClick={this.cardOnClick} />
          <YourOutfitCarousel productId={this.state.currentProduct.id} />

          {/* <Questions productId={this.state.currentProduct.id} productName={this.state.currentProduct.name} />
          <Review productId={this.state.currentProduct.id} passRatings={this.passRatings.bind(this)} /> */}
        </div>
      );
    } else {
      return (
        <div>
          <h1>this page is loading</h1>
        </div>
      )
    }
  }

};

ReactDOM.render(<App />, document.getElementById("app"));