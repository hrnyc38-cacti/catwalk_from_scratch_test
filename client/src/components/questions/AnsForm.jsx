import React from 'react';

function AnsForm ({onSubmitAns}) {
  return (
    <form onSubmit={onSubmitAns}>
      <div className="form-group">
        <label htmlFor="new-answer">Your Answer</label>
        <input id="new-answer"/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Your Nickname</label>
        <input id="name"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="name@example.com"/>
      </div>
      <div className="form-group">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default AnsForm;