import React from 'react';


function ImagePopUp (props) {
  if (!props.show) {
    return null;
  }


  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e)=> {e.stopPropagation()}}>
        <div className="modal-header">
          <h4 className="modal-title"></h4>
        </div>
        <div className="modal-body">
          <img className="popup-image" src={props.src} />
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  )
};

export default ImagePopUp;