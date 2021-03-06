import React from 'react';
import { TOKEN } from './../../config.js';
import axios from 'axios';

class AnsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      selectedFile: null
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['body']) {
      formIsValid = false;
      errors['body'] = 'Cannot be empty'
    }

    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty'
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

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleFileChange = (e) => {
    if (e.target.files.length > 5) {
      alert('Maximum 5 files accepted.');
      e.preventDefault();
    } else {
      this.setState({ selectedFile: e.target.files });
    }
  }

  handleSubmitAns(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      // axios.post(url, new, headers)
      let newlyAdd = {};
      newlyAdd.body = this.state.fields['body'];
      newlyAdd.name = this.state.fields['name'];
      newlyAdd.email = this.state.fields['email'];
      newlyAdd.img = this.state.selectedFile;
      //const formData = new FormData();
      //formData.append(this.state.selectedFile);
      console.log('THIS IS newlyadd', newlyAdd);
      // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${this.props.qID}/answers`, newlyAdd,
      //   { headers: { Authorization: TOKEN } })
      //   .then(() => { alert('New answer submitted!'); })
      //   .catch((err) => { console.log('failed to submit answer'); });
      alert('New answer submitted!');
    } else {
      alert('Form has errors.');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitAns.bind(this)}>
        <div className="form-group">
          <label htmlFor="new-answer">Your Answer </label>
          <textarea id="new-answer" maxLength="1000" rows="10" col="250"
          onChange={this.handleChange.bind(this, 'body')} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Nickname </label>
          <input id="name" onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email </label>
          <input type="email" id="email" placeholder="name@example.com" onChange={this.handleChange.bind(this, 'email')} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Upload Photos </label>
          <input type="file" multiple onChange={this.handleFileChange.bind(this)}/>
        </div>
        <div className="form-group">
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }
};

export default AnsForm;