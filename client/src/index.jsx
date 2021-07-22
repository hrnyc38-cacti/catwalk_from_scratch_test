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
      products: [],//[{id, productname, slogan, description, category, price, features, photos(thumbnail, url), }],
      reviews: [],
      questions: [],
      answers: [],
      cart:[]
    }
  }

  componentDidMount() {
    this.getProductsByPage(1, (err, data) => {
      if (err) {console.log(err);}
      console.log(data);
    })
  }

  getProductsByPage(page, callback) {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/?page=${page}`,
      headers: {
        //'User-Agent': 'request',
        'Authorization': "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"
      }
    };
    console.log('this is token ', TOKEN);
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
          <Questions />
        </div>
        <div>
          <Review/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById("app"));