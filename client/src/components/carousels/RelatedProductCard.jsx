import React from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: ''
    };
  }

  componentDidMount() {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productID}`,
      headers: {
        Authorization: `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`
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
  render() {
    return (
      <div className='singleCard'>
        <div className='imageContainer'>
          <img className='cardImage' src={this.state.cardData.url}></img>
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
export default RelatedProductCard;