import React from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { TOKEN } from './../../config.js';
import { FaRegStar } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

class YourOutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productID,
      cardData: ''
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (this.state.productId) {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}`,
      headers: {
        Authorization: TOKEN
      },
      params: {
        product_id: this.props.productID
      }
    };
    axios(options)
      .then((res) => {
        var buildItem = {
          id: res.data.id,
          name: res.data.name,
          category: res.data.category,
          price: res.data.default_price
        };

        options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}/styles`;
        axios(options)
          .then((res) => {
            buildItem.url = res.data.results[0].photos[0].url;
            options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/`;

            axios(options)
              .then((res) => {
                var rating = 0;

                for (var x = 0; x < res.data.results.length; x++) {
                  rating += res.data.results[x].rating;
                }
                buildItem.rating = rating / res.data.results.length;
                this.setState({ cardData: buildItem });
              })
              .catch((err) => {
                console.log(err);
              })

          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }
  componentDidUpdate(previousProps, previousState, snapShot) {
    if (previousState.productId !== this.props.productID) {
      this.setState({productId: this.props.productID});
      // this.componentDidMount();
      console.log();
    }
  }
  eventHandler(e) {
    if (e === 'outfitImage') {
      console.log(this.props);
      (e) => this.props.handleClick();
    } else {
      // this.props.cardOnClick(this.state.cardData.id);
    }
  }
  render() {
    if (!this.props.productID) {
      return (
        <div className='singleCard  outfitCard' onClick={(e) => this.props.handleClick()}>
          <FaPlusCircle  className='outfitImage'/>
        </div>
      );
    }
    return (
      <div className='singleCard' onClick={(e) => this.eventHandler(e.target.classList[0])}>
        <div className='imageContainer'>
          <img className='cardImage' src={this.state.cardData.url}></img>
          <FaRegStar className='imageButton' />
        </div>
        <div>
          <p className='ProductInfo'>{this.state.cardData.category}</p>
          <p className='ProductInfo'>{this.state.cardData.name}</p>
          <p className='ProductInfo'>${this.state.cardData.price} </p>
          <ReactStars
            count={5}
            isHalf={true}
            value={this.state.cardData.rating}
            activeColor="#ffd700"
            className='ProductInfo'
          />
        </div>
      </div>
    );
  }
};
export default YourOutfitCard;