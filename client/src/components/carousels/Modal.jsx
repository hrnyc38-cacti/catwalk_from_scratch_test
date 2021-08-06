import React from "react";

var Modal = (props) => {

  return (
    <div>
      <button id='alanbtn'>open modal</button>
      <div id='myModalAlan' className='modalAlan'>
        <div className='modal-content-alan'>
          <p>SOME CONTENT</p>
        </div>
      </div>

    </div>
  );
}

export default Modal;