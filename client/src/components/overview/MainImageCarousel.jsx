import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaExpandArrowsAlt, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

var proper = 'background-color';

class MainImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotos: []
    };
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
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
          <img src={photoURL} />
        </div>
        <FaExpandArrowsAlt className="expand" />
        <FaArrowCircleRight className="next-button" />
        <FaArrowCircleLeft className="prev-button" />
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