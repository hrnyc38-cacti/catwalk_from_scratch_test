import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Questions from './components/questions/index.jsx';
import Carousels from './components/carousels/Carousels.jsx';
import Review from './components/review/Review.jsx';
import Overview from './components/overview/Overview.jsx';
import _ from 'underscore';
import { TOKEN } from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: 11002,
      products: [],//[{id, productname, slogan, description, category, price, features, photos(thumbnail, url), }],
      reviews: [],
      currentProduct: {},
      product_id: '11001',
      questions: [],
      answers: [],
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
      styleName: ''
    }
    this.handleUpdateMainAppState = this.handleUpdateMainAppState.bind(this);
  }

  handleUpdateMainAppState(newState) {
    console.log('I made it back up', newState)
    this.setState(newState);
    console.log(this.state);
  }

  componentDidMount() {
    this.getProductsByPage(1);
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
        this.setState({ products: res.data, currentProduct: res.data[0] })
      })
      .then((res) => {
        let options2 = {
          type: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.currentProduct.id}/styles`,
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
            this.setState({
              currentStyles: results.data.results,
              currentPhotos: currentPhotosArray,
              currentCategory: this.state.currentProduct.category.toUpperCase(),
              currentThumbs: currentThumbsArray,
              styleName: results.data.results[this.state.styleIndex].name,
              finishedLoading: true
            })
            // console.log('results', results.data.results);
            // console.log(this.state.currentStyles);
            // console.log(this.state.currentThumbs);
            // console.log(this.state.currentPhotos);
            // console.log(this.state.currentProduct);
          });
      })
      .catch((err) => {
        console.err('failed to load data from server', err);
      })
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
              handleUpdateMainAppState={this.handleUpdateMainAppState} />
          </div>
          <div>
            <Carousels />
          </div>
          <div>
            <Questions productId={this.state.currentProductID} />
          </div>
          <div>
            <Review />
          </div>
        </div>
      )
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