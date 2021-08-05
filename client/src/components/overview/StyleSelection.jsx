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
    this.props.handleUpdateMainAppState({ styleIndex: index })
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