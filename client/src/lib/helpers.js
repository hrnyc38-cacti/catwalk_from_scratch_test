import axios from 'axios';
import config from '../config.js';

// http://example.com/page?parameter=value&also=another
// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE

let getProductsByPage =  (page, callback) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/nyc-38/products/page?${page}`
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(options.url, options.headers)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      console.log('failed to load data from server');
      callback(err);
    })
};

export default getProductsByPage;