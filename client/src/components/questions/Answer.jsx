import React from "react";
import axios from 'axios';
import {TOKEN} from './../../config.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpful: false,
      count: this.props.answer.helpfulness,
      isReport: 'Report'
    }
  }
  handleHelpful(e) {
    if (!this.state.isHelpful) {
      //invoke func (this.props.answer.helpfulness +1) in index.js
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/answers/${this.props.answer.id}/helpful`, null,
      {headers: {Authorization: TOKEN}})
        .then(() => {
          this.setState({
            isHelpful: true,
            count: this.state.count + 1
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleReport(e) {
    if (this.state.isReport === 'Report') {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/answers/${this.props.answer.id}/report`, null,
      {headers: {Authorization: TOKEN}})
        .then(()=> {
          this.setState({
            isReport: 'Reported'
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const formattedDate = new Date(this.props.answer.date).toLocaleDateString({}, {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"})
    //console.log(formattedDate);
    return (
      <li>
        <div>{this.props.answer.body}</div>
        <div>{this.props.answer.photos.length === 0? null : this.props.answer.photos.map((photo, i) => {return <img key={i} src={photo} />})}</div>
        <div>
          <span>by {this.props.answer.answerer_name}, {formattedDate}</span>
          <span> | Helpful? <button className="text-bttn" onClick={this.handleHelpful.bind(this)}>Yes {`(${this.state.count})`}</button></span>
          <span> | <button className="text-bttn" onClick={this.handleReport.bind(this)}>{this.state.isReport}</button></span>
        </div>
      </li>
    )
  }
}






export default Answer;