import React, { useState, useEffect, useRef } from "react";
import QnA from './QnA.jsx';
import QModal from './QModal.jsx';

const qsPerPage = 4;

function QandAList({ questions, productId, productName }) {
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(4);
  const [qsToShow, setQsToShow] = useState([]);
  let array4holdingQs = [];

  const loopWithSlice = (start, end) => {
    const slicedQs = questions.slice(start, end);
    array4holdingQs = [...array4holdingQs, ...slicedQs];
    setQsToShow(array4holdingQs);
  }

  useEffect(() => {
    loopWithSlice(0, qsPerPage);
  }, [questions]);

  const handleShowMoreQs = () => {
    loopWithSlice(0, next + qsPerPage);
    setNext(next + qsPerPage);
  };

  if (!qsToShow) {
    return (<div>loading</div>)
  } else {
    if (questions.length > 4) {
      return (
        <div>
          <ol>
            {qsToShow.map((question, i) => {
              return <QnA key={i} question={question} productName={productName} />
            })}
          </ol>
          <span>
            <button className="load-Q-bttn" onClick={handleShowMoreQs}>MORE ANSWERED QUESTIONS</button>
            <button className="add-Q-bttn" onClick={() => setShow(true)} >ADD A QUESTION +</button>
            <QModal show={show} onClose={() => setShow(false)} productId={productId} productName={productName} />
          </span>
        </div>
      )
    } else if (questions.length === 0) {
      return (
        <div>
          <button className="add-Q-bttn" onClick={() => setShow(true)} >ADD A QUESTION +</button>
          <QModal show={show} onClose={() => setShow(false)} productId={productId} productName={productName} />
        </div>
      )
    } else {
      return (
        <div>
          <ol>
            {questions.map((question, i) => {
              return <QnA key={i} question={question} productName={productName} />
            })}
          </ol>
          <div>
            <button className="add-Q-bttn" onClick={() => setShow(true)} >ADD A QUESTION +</button>
            <QModal show={show} onClose={() => setShow(false)} productId={productId} productName={productName} />
          </div>
        </div>
      )
    }

  }

};






export default QandAList;