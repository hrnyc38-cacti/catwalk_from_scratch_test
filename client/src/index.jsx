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
      currProductName: 'fakeProduct',
      products: [],//[{id, productname, slogan, description, category, price, features, photos(thumbnail, url), }],
      reviews: [],
      currentProduct: {},
      product_id: '11001',
      questions: [],
      answers: [],
      cart: [],
      finishedLoading: false
    }
  }

  componentDidMount() {
    this.getProductsByPage(1, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ products: data, currentProduct: data[0], finishedLoading: true })
      }
    })
  }

  getProductsByPage(page, callback) {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/?page=${page}`,
      headers: {
        //'User-Agent': 'request',
        'Authorization': TOKEN
      }
    };
    axios(options)
      .then((res) => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log('failed to load data from server');
        callback(err);
      })
  }


  render() {
    if (this.state.finishedLoading) {
      return (
        <div>
          <div>
            <Overview currentProduct={this.state.currentProduct} product_id={this.state.product_id} />
          </div>
          <div>
            <Carousels />
          </div>
          <div>
            <Questions productId={this.state.currentProductID} productName={this.state.currProductName}/>
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