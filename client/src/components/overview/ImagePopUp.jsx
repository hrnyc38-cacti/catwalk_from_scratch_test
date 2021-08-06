import React from 'react';


function ImagePopUp (props) {
  if (!props.show) {
    return null;
  }


  return (
    <div className="modal-image" onClick={props.onClose}>
      <div className="modal-content-image" onClick={(e)=> {e.stopPropagation()}}>
        <div className="modal-header-image">
          <h4 className="modal-title-image"></h4>
        </div>
        <div className="modal-body-image">
          <img className="popup-image" src={props.src} />
        <div className="modal-footer-image">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
        </div>
      </div>
    </div>
  )
};

export default ImagePopUp;