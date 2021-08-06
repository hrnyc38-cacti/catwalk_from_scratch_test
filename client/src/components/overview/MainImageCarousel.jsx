import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaExpandArrowsAlt, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import ImagePopUp from './ImagePopUp.jsx';

class MainImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotos: [],
      showPopup: false
    };
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleExpandButtonClick = this.handleExpandButtonClick.bind(this);
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    // this.handleShowPopup = this.handleShowPopup.bind(this);
    // this.handleHidePopup = this.handleHidePopup.bind(this);
  }

  componentDidUpdate() {
    //console.log(this.props);
  }

  handleThumbnailClick(index) {
    console.log('this workED', index);
    let newState = {
      photoIndex: index,
      mainImage: this.props.currentPhotos[index]
    }
    this.props.handleUpdateMainAppState(newState);
  }

  handleNextButtonClick() {
    let newIndex = this.props.photoIndex;
    newIndex++;
    if (newIndex >= this.props.currentPhotos.length) {
      newIndex = 0;
    }
    let newState = {
      photoIndex: newIndex,
      mainImage: this.props.currentPhotos[newIndex]
    };
    this.props.handleUpdateMainAppState(newState);
  }

  handlePreviousButtonClick() {
    let newIndex = this.props.photoIndex;
    newIndex--;
    if (newIndex < 0) {
      newIndex = this.props.currentPhotos.length - 1;
    }
    let newState = {
      photoIndex: newIndex,
      mainImage: this.props.currentPhotos[newIndex]
    };
    this.props.handleUpdateMainAppState(newState);
  }

  // handleExpandButtonClick() {
  //   let newState = {};
  //   this.props.handleUpdateMainAppState(newState);
  // }
  handleShowPopup (e) {
    console.log('button was clicked!');
    this.setState({
      showPopup: true
    })
  }
  handleHidePopup () {
    this.setState({
      showPopup: false
    })
  }


  render() {
    let photoURL = this.props.mainImage;
    return (
      <div className="overview-carousel" >
        <div className="thumbs-slider">
          {this.props.currentThumbs.map((thumb, index) => {
            return (
              <div className="thumbs" key={thumb} onClick={() => this.handleThumbnailClick(index)}>
                <img src={thumb} />
              </div>
            )
          })}
        </div>
        <div className="current-photo">
          <img className="this-image" src={photoURL} />
          {/* <ImagePopUp src={photoURL} show={this.state.showPopup} onClose={this.handleHidePopup}/> */}
        </div>
        {/* <FaExpandArrowsAlt className="expand" onClick={(e)=>this.handleShowPopup} /> */}
        <FaArrowCircleRight className="next-button" onClick={() => this.handleNextButtonClick()} />
        <FaArrowCircleLeft className="prev-button" onClick={() => this.handlePreviousButtonClick()} />
      </div >
    )
  }
}

export default MainImageCarousel;

// {this.props.currentPhotos.map((photo) => {
//   return (
//     <img src={photo} />
//   )
// })}