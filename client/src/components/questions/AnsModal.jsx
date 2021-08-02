import React from "react";
import AnsForm from './AnsForm.jsx';

function AnsModal (props) {
  if (!props.show) {
    return null;
  }
  const handleSubmitAns = (e) => {
    e.preventDefault();
    console.log('new answer was submitted!');
    // axios put request here
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e)=> {e.stopPropagation()}}>
        <div className="modal-header">
          <h4 className="modal-title">Submit your Answer</h4>
          <h5 className="modal-subtitle">ProductName: QuestionBody</h5>
        </div>
        <div className="modal-body"> here is a form
          <AnsForm onSubmitAns={handleSubmitAns} qID={props.qId}/>

        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  )
};

export default AnsModal;