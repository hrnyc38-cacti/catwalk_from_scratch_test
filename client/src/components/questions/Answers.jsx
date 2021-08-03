import React, { useState, useEffect } from "react";
import Answer from './Answer.jsx';

const ansPerPage = 2;
let array4holdingAs = [];

function Answers ({answers}) {
  console.log('THIS IS ANS FOR EACH Q ', answers)
  let ansArr = [];
  for (var k in answers) {
    ansArr.push(<Answer answer={answers[k]} key={k}/>);
  }
  if (ansArr.length <= 2) {
    return (<ul>{ansArr}</ul>)
  } else {
    const [ansToShow, setAnsToShow] = useState([]);
    let [next, setNext] = useState(2);

    let loopWithSlice = (start, end) => {
      const slicedAs = ansArr.slice(start, end);
      array4holdingAs = [...array4holdingAs, ...slicedAs];
      setAnsToShow(array4holdingAs);
    }

    useEffect(() => {
      loopWithSlice(0, ansPerPage);
    }, []);

    const handleShowMoreAs = () => {
      loopWithSlice(next, next + ansPerPage);
      setNext(next + ansPerPage);
    };

    return (
      <div>
        <ul>{ansToShow}</ul>
        <button onClick={handleShowMoreAs}>LOAD MORE ANSWERS</button>
      </div>
    )
  }

};








export default Answers;