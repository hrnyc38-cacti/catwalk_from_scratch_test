import React, { useState, useEffect } from "react";
import QnA from './QnA.jsx';
import QModal from './QModal.jsx';

const qsPerPage = 4;
let array4holdingQs = [];

function QandAList ({questions, productId}) {
  const [show, setShow] = useState(false);
  if (questions.length > 4) {
    const [qsToShow, setQsToShow] = useState([]);
    const [next, setNext] = useState(4);

    const loopWithSlice = (start, end) => {
      const slicedQs = questions.slice(start, end);
      array4holdingQs = [...array4holdingQs, ...slicedQs];
      setQsToShow(array4holdingQs);
    }
    useEffect(() => {
      loopWithSlice(0, qsPerPage);
    }, []);

    const handleShowMoreQs = () => {
      loopWithSlice(next, next + qsPerPage);
      setNext(next + qsPerPage);
    };

    return (
      <div>
        <ol>
          { qsToShow.map((question, i) => {
            return <QnA key={i} question={question}/>
          })}
        </ol>
        <button onClick={handleShowMoreQs}>MORE ANSWERED QUESTIONS</button>
        <div>
          <button onClick={() => setShow(true)} >ADD A QUESTION +</button>
          <QModal show={show} onClose={()=> setShow(false)} productId={productId}/>
        </div>
      </div>
    )
  } else if (questions.length === 0) {
    return (
      <div>
          <button onClick={() => setShow(true)} >ADD A QUESTION +</button>
          <QModal show={show} onClose={()=> setShow(false)} productId={productId}/>
      </div>
    )
  } else {
    return (
      <div>
        <ol>
          { questions.map((question, i) => {
            return <QnA key={i} question={question}/>
          })}
        </ol>
        <div>
          <button onClick={() => setShow(true)} >ADD A QUESTION +</button>
          <QModal show={show} onClose={()=> setShow(false)} productId={productId}/>
        </div>
      </div>
    )
  }

}






export default QandAList;