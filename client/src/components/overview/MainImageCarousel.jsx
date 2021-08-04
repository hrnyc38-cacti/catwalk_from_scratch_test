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
  }

  componentDidUpdate() {
    //console.log(this.props);
  }


  render() {
    let photoURL = this.props.currentPhotos[this.props.photoIndex];
    return (
      <div className="overview-carousel" >
        <div className="thumbs-slider">
          {this.props.currentThumbs.map((thumb) => {
            return (
              <div className="thumbs" key={thumb}>
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