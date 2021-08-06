import React from 'react';

class StyleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChangeStyleClick = this.handleChangeStyleClick.bind(this);
  }

  componentDidMount() {
    //console.log('here we go again', this.props.currentStyles);

  }

  handleChangeStyleClick(style_id, index) {
    //console.log('this was clicked', this.props);
    let photoData = this.props.currentStyles[index].photos;
    let currentPhotosArray = [];
    let currentThumbsArray = [];
    for (let i = 0; i < photoData.length; i++) {
      currentPhotosArray.push(photoData[i].url);
      currentThumbsArray.push(photoData[i].thumbnail_url);
    }
    let newState = {
      currentThumbs: currentThumbsArray,
      currentPhotos: currentPhotosArray,
      styleIndex: index,
      mainImage: currentPhotosArray[0],
      styleName: this.props.currentStyles[index].name
    }
    this.props.handleUpdateMainAppState(newState);
  }

  render() {
    return (
      <div className="styles-section">
        <h4 id="style-text">STYLE >  {this.props.styleName}</h4>
        <div className="style-selection">
          {this.props.currentStyles.map((thumb, index) => {
            return (
              <div className="individual-styles-thumb" key={thumb.style_id} onClick={() => this.handleChangeStyleClick(thumb.style_id, index)}>
                <img className="thumb-photo" src={thumb.photos.[0].thumbnail_url} />
              </div>
            )
          })}

        </div>
      </div >
    )
  }

}

export default StyleSelection;