import React from "react";

var Modal = (props) => {
  if(!props.show) {
    return null;
  }
  return (
    <div onClick={props.closeModule}>
      <div id='related-modal' className='related-modal'>
        <div className='related-modal-content'>
        </div>
      </div>
    </div>
  );
}

export default Modal;