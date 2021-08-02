import React from "react";
import QForm from './QForm.jsx';

function QModal (props) {
  if (!props.show) {
    return null;
  }


  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e)=> {e.stopPropagation()}}>
        <div className="modal-header">
          <h4 className="modal-title">Ask Your Question</h4>
          <h5 className="modal-subtitle">About the {props.productName}</h5>
        </div>
        <div className="modal-body">
          <QForm productId={props.productId} />

        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  )
};

export default QModal;