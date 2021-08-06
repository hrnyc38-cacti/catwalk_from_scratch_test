import React from "react";
import { BiSearchAlt2 } from 'react-icons/bi';

function Search4answer ({updateInput}) {
  const barStyle = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <form>
      <input type="text" className="search-bar" placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS... '
       onChange={(e) => updateInput(e.target.value)} style={barStyle}/>
      <span type="submit" className="search-i"><BiSearchAlt2 /></span>
    </form>
  )
}








export default Search4answer;