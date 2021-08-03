import React from "react";
import { FaSearch } from 'react-icons/fa';

function Search4answer ({updateInput}) {
  const barStyle = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <form>
      <input type="text" placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
       onChange={(e) => updateInput(e.target.value)} style={barStyle}/>
      <button type="submit"><FaSearch/></button>
    </form>
  )
}








export default Search4answer;