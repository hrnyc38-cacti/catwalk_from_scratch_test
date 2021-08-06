import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Questions from './components/questions/index.jsx';
import Carousels from './components/carousels/Carousels.jsx';
import Review from './components/review/index.jsx';
import Overview from './components/overview/Overview.jsx';
import _ from 'underscore';
import { TOKEN } from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {},
      cart: [],
      finishedLoading: false,
      currentProduct: {},
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
      ratings: null
    }
    this.cardOnClick = this.cardOnClick.bind();
    this.handleUpdateMainAppState = this.handleUpdateMainAppState.bind(this);
  }

  handleUpdateMainAppState(newState) {
    //console.log('I made it back up', newState)
    this.setState(newState);
  }

  componentDidMount() {
    this.getProductsByPage(1);
  }
  cardOnClick = (e) => {
    console.log('The sent item: ', e);
    let newID = e;
    console.log('The state before update: ', this.state.currentProductID);
    this.setState({ currentProductID: newID });
    console.log('The state after updating: ', this.state.currentProductID)
  }
  componentDidUpdate(previousProps, previousState, snapShot) {
    if (previousState.currentProductID !== this.state.currentProductID) {
      this.setState({ currentProductID: this.state.currentProductID });
      console.log('ComponentDidUpdate on main page ', this.state.currentProductID);
    }
  }
  cardOnClick = (e) => {
    this.setState({ currentProductID: e });
  }

  getProductsByPage(page) {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/?page=${page}`,
      headers: {
        'Authorization': TOKEN
      }
    };
    axios(options)
      .then((res) => {
        let options2 = {
          type: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${res.data[0].id}/styles`,
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
            for (let key in sizeData) {
              currentSizesArray.push(sizeData[key].size);
              if (sizeData[key].size === 'M') {
                quantityAvailable = sizeData[key].quantity
              }
            }
            for (let i = 2; i <= quantityAvailable; i++) {
              currentQuantitiesArray.push(i);
            }

            this.setState({
              products: res.data,
              currentProduct: res.data[0],
              currentStyles: results.data.results,
              currentPhotos: currentPhotosArray,
              currentCategory: res.data[0].category.toUpperCase(),
              currentThumbs: currentThumbsArray,
              styleName: results.data.results[this.state.styleIndex].name,
              mainImage: photoData[this.state.photoIndex].url,
              currentSizesAvailable: currentSizesArray,
              currentQuantitiesAvailable: currentQuantitiesArray,
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
    console.log('RATINGS IN MAIN PAGE ', this.state.ratings);
  }


  render() {
    if (this.state.finishedLoading) {
      return (
        <div>
          <div>
            <Overview
              currentProduct={this.state.currentProduct}
              product_id={this.state.product_id}
              currentCategory={this.state.currentProduct.category}
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
              currentSKU={this.state.currentSKU}
              currentStyleID={this.state.currentStyleID}
              selectedSize={this.state.selectedSize}
              selectedQuantity={this.state.selectedQuantity}
              ratings={this.state.ratings} />
          </div>
          <div>
            <Carousels productId={this.state.currentProduct.id} cardOnClick={this.cardOnClick} />
          </div>
          <div>
            <Questions productId={this.state.currentProduct.id} productName={this.state.currentProduct.name} />
          </div>
          <div>
            <Review productId={this.state.currentProduct.id} passRatings={this.passRatings.bind(this)} />
          </div>
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