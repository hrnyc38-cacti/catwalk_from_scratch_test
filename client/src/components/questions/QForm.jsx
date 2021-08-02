import React from 'react';
import {TOKEN} from './../../config.js';
import axios from 'axios';

class QForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['newq']) {
      formIsValid = false;
      errors['newq'] = 'Cannot be empty'
    }

    if (!fields['nickname']) {
      formIsValid = false;
      errors['nickname'] = 'Cannot be empty'
    }

    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Cannot be empty'
    }
    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields['email'].indexOf('@@') == -1 && lastDotPos > 2 && (fields['email'].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors['email'] = "Email is not valid";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleSubmitQ(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      // axios.post(url, newq, headers)
      let newlyAdd = {};
      newlyAdd.body = this.state.fields['newq'];
      newlyAdd.name = this.state.fields['nickname'];
      newlyAdd.email = this.state.fields['email'];
      newlyAdd.product_id = this.props.productId;
      // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions`, newlyAdd,
      // {headers: {Authorization: TOKEN}})
      alert('New question submitted!');
    } else {
      alert('Form has errors.');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitQ.bind(this)}>
        <div className="form-group">
          <label htmlFor="new-q">Your Question </label>
          <textarea id="new-q" placeholder="Why did you like the product or not?" maxLength="1000" rows="10" col="250"
          onChange={this.handleChange.bind(this, 'newq')}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Nickname </label>
          <input id="name" placeholder="Example: jackson11!"
          onChange={this.handleChange.bind(this, 'nickname')}/>
          <p className="side-note">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email </label>
          <input type="email" id="email" placeholder="name@example.com"
          onChange={this.handleChange.bind(this, 'email')}/>
          <p className="side-note">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="form-group">
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }
};

export default QForm;