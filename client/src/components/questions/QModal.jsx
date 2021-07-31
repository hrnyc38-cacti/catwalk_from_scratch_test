import React from "react";
import QForm from './QForm.jsx';

function QModal (props) {
  if (!props.show) {
    return null;
  }
  const handleSubmitQ = (e) => {
    e.preventDefault();
    console.log('new question was submitted!');
    // axios put request here
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e)=> {e.stopPropagation()}}>
        <div className="modal-header">
          <h4 className="modal-title">Ask Your Question</h4>
          <h5 className="modal-subtitle">About the ?ProductName</h5>
        </div>
        <div className="modal-body"> here is a form
          <QForm onSubmitQ={handleSubmitQ}/>

        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  )
};

export default QModal;