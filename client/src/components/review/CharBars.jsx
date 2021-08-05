import React from "react";
import CharBar from './CharBar.jsx';

function CharBars({characteristics}) {
  let charList = [];
  for (var key in characteristics) {
    charList.push(<CharBar title={key} content={characteristics[key]}/>)
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

