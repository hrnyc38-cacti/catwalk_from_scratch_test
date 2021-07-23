import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Questions from './components/questions/Questions.jsx';
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx';
import Review from './components/review/Review.jsx';
import Overview from './components/overview/Overview.jsx';
//import getProductsByPage from '../lib/helpers';
import {TOKEN} from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      products: [],//[{id, productname, slogan, description, category, price, features, photos(thumbnail, url), }],
      reviews: [],
      questions: [],
      answers: [],
      cart:[]
    }
  }

  componentDidMount() {
    console.log('this is token ', TOKEN);
    this.getProductById(11001, (err, data) => {
      if (err) {console.log(err);}
      console.log(data);
      this.setState({
        currentProduct: data
      })
    })
  }

  getProductById(id, callback) {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`,
      headers: {
        //'User-Agent': 'request',
        'Authorization': `${TOKEN}`
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
  };

  render() {
    return (
      <div>
        <div>
          <Overview />
        </div>
        <div>
          <RelatedProducts/>
        </div>
        <div>
          <Questions productId={this.state.currentProduct.id}/>
        </div>
        <div>
          <Review/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById("app"));