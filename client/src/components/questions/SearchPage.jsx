import React, { useState, useEffect } from "react";
import Search4answer from './Search4answer.jsx';
import QandAList from './QandAList.jsx';

function SearchPage ({questions, productId, productName}) {
  console.log('new Qs in search page ', questions);
  const [input, setInput] = useState('');
  const [qList, setqList] = useState([]);

  const updateInput = (input) => {
    if (input.length < 3) {
      setqList(questions);
    } else {
      var filtered = questions.filter((question) => {
        //console.log('IN SEARCH BAR ', question.question_body.toLowerCase().includes(input.toLowerCase()));
        return question.question_body.toLowerCase().includes(input.toLowerCase())
      })
      console.log('THIS IS FILTERED ', filtered);
      setInput(input);
      setqList(filtered);
    }
  };

  useEffect(() => {
    setqList(questions);
  }, [questions]);

  return (
    <div>
      <Search4answer updateInput={updateInput}/>
      <QandAList questions={qList} productId={productId} productName={productName} />
      {/* <ul>
        {qList.map((item, i) => {
          if (item) {
            return (<li>{item.question_body}</li>)
          }
          return null
        })}
      </ul> */}
    </div>
  )
}



export default SearchPage
