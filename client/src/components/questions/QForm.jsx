import React from 'react';

function QForm ({onSubmitQ}) {
  return (
    <form onSubmit={onSubmitQ}>
      <div className="form-group">
        <label htmlFor="new-q">Your Question</label>
        <input id="new-q" placeholder="Why did you like the product or not?"/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Your Nickname</label>
        <input id="name" placeholder="Example: jackson11!"/>
        <p>For privacy reasons, do not use your full name or email address</p>
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="name@example.com"/>
        <p>For authentication reasons, you will not be emailed</p>
      </div>
      <div className="form-group">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default QForm;