import React from "react";
import { TOKEN } from './../../config.js';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelection from './StyleSelection.jsx';
import ProductSelectors from './ProductSelectors.jsx';
import MainImageCarousel from './MainImageCarousel.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: {},
      currentPhotos: [],
      currentStyles: [],
      currentThumbs: [],
      currentFavorites: [],
      currentCategory: '',
      photoIndex: 0,
      styleIndex: 0,
      styleName: ''
    };
    this.updateOverviewState = this.updateOverviewState.bind(this);
  }

  updateOverviewState(newStateImport) {
    // console.log('this was clicked')
    // console.log(newState);
    this.setState(newStateImport);
    let photoData = this.state.currentStyles[this.state.styleIndex].photos;
    let currentPhotosArray = [];
    let currentThumbsArray = [];
    for (let i = 0; i < photoData.length; i++) {
      currentPhotosArray.push(photoData[i].url);
      currentThumbsArray.push(photoData[i].thumbnail_url);
    }
    this.setState({
      currentPhotos: currentPhotosArray,
      currentThumbs: currentThumbsArray,
      styleName: this.state.currentStyles[this.state.styleIndex].name
    })

  }

  componentDidMount() {
    this.setState({ currentProduct: this.props.currentProduct });
    let options = {
      type: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.currentProduct.id}/styles`,
      headers: {
        'Authorization': TOKEN
      }
    };
    axios(options)
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
          currentProduct: this.props.currentProduct,
          currentCategory: this.props.currentCategory.toUpperCase(),
          currentThumbs: currentThumbsArray,
          styleName: results.data.results[this.state.styleIndex].name
        })
        console.log('results', results.data.results);
        // console.log(this.state.currentStyles);
        // console.log(this.state.currentThumbs);
        // console.log(this.state.currentPhotos);
        // console.log(this.state.currentProduct);
      });
  }

  // componentDidUpdate(prevProps) {
  //   prevProps !== this.props ? this.initializeOverview() : null
  // }

  initializeOverview() {

  }

  render() {
    return (

      <div className="grid-container">
        <div className="grid-child-1">
          <MainImageCarousel
            currentPhotos={this.props.currentPhotos}
            currentStyles={this.props.currentStyles}
            currentThumbs={this.props.currentThumbs}
            photoIndex={this.props.photoIndex}
            styleIndex={this.props.styleIndex} />
        </div>
        <div className="grid-child-2">
          <ProductInfo
            name={this.props.currentProduct.name}
            category={this.props.currentCategory}
            price={this.props.currentProduct.default_price}
            ratings={this.props.ratings}/>
          <StyleSelection
            currentStyles={this.props.currentStyles}
            currentThumbs={this.props.currentThumbs}
            handleUpdateMainAppState={this.props.handleUpdateMainAppState}
            styleIndex={this.props.styleIndex}
            styleName={this.props.styleName} />
          <ProductSelectors
            handleUpdateMainAppState={this.props.handleUpdateMainAppState}
            currentFavorites={this.props.currentFavorites}
            currentProduct={this.props.currentProduct}
            currentStyles={this.props.currentStyles}
            styleName={this.props.styleName}
            styleIndex={this.props.styleIndex} />
        </div>
      </div>
    )
  }
}

export default Overview;