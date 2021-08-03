import React, { useState, useEffect } from "react";
import Answer from './Answer.jsx';



function Answers ({answers}) {
  //console.log('THIS IS ANS FOR EACH Q ', answers)
  const ansPerPage = 2;
  let array4holdingAs = [];
  let ansArr = [];
  for (var k in answers) {
    ansArr.push(<Answer answer={answers[k]} key={k}/>);
  }
  if (ansArr.length <= 2) {
    return (<ul>{ansArr}</ul>)
  } else {
    //console.log('THIS IS ANS ARR ', ansArr);
    const [ansToShow, setAnsToShow] = useState([]);
    let [next, setNext] = useState(2);
    //console.log('THIS IS NEXT ', next, setNext);

    let loopWithSlice = (start, end) => {
      const slicedAs = ansArr.slice(start, end);
      array4holdingAs = [...array4holdingAs, ...slicedAs];
      //console.log('START END ARR4 ', start, end, array4holdingAs);
      setAnsToShow(array4holdingAs);
    }

    useEffect(() => {
      loopWithSlice(0, ansPerPage);
    }, []);

    const handleShowMoreAs = () => {
      loopWithSlice(0, next + ansPerPage);
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