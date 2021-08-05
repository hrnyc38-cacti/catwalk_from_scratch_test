import React from "react";
import CharBar from './CharBar.jsx';

function CharBars({characteristics}) {
  let charList = [];
  let index = 0;
  for (var key in characteristics) {
    charList.push(<CharBar key={index++} title={key} content={characteristics[key]}/>)
  }

  return (
    <table>
      {/* <tbody> */}
        {charList}
      {/* </tbody> */}
    </table>
  )
}

export default CharBars;

