import React from "react";
import { BsTriangleFill } from 'react-icons/bs';

function CharBar({title, content}) {
  let style = {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: '100%',
    height: '8px',
  }
  var value = content.value;

  const testValue1 = (number) => {
    if (number < 1.67) {
      let position = (number / 1.67).toFixed(2) * 100 + '%';
      let istyle = {
        position: 'relative',
        left: position,
      };
      return (<span ><BsTriangleFill style={istyle}/></span>)
    } else {
      return (<span className="bar-tag">foo</span>)
    }
  }
  const testValue2 = (number) => {
    if (number < 3.33 && number >= 1.67) {
      let position = ((number - 1.67)/ 1.67).toFixed(2) * 100 + '%';
      let istyle = {
        position: 'relative',
        left: position,
      };
      return (<span ><BsTriangleFill style={istyle}/></span>)
    } else {
      return (<span className="bar-tag">foo</span>)
    }
  }
  const testValue3 = (number) => {
    if (number >= 3.33) {
      let position = ((number - 3.33) / 1.67).toFixed(2) * 100 + '%';
      let istyle = {
        position: 'relative',
        left: position,
      };
      return (<span ><BsTriangleFill style={istyle}/></span>)
    } else {
      return (<span className="bar-tag">foo</span>)
    }
  }

  var labelDict = {
      Fit: ['Runs small', 'Perfect', 'Runs large'],
      Size: ['Runs small', 'Perfect', 'Runs large'],
      Length: ['Runs short', 'Perfect', 'Runs Long'],
      Width: ['Runs narrow', 'Perfect', 'Runs wide'],
      Comfort: ['Poor', 'OK', 'Perfect'],
      Quality: ['Poor', 'OK', 'Perfect']
    };

  console.log('TITLE ', labelDict[title][0]);
  if (!title) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <tbody>
        <tr>
          <td>{title}</td>
          <td width="150px">
            <div style={style}>
              {testValue1(value)}
            </div>
          </td>
          <td width="150px">
            <div style={style}>
              {testValue2(value)}
              {/* <span ><FiTriangle style={istyle}/></span> */}
            </div>
          </td>
          <td width="150px">
            <div style={style}>
              {testValue3(value)}
              {/* <span className="bar-tag">beyond</span> */}
            </div>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td >
              <span>{labelDict[title][0]}</span>
          </td>
          <td >
              <span>{labelDict[title][1]}</span>
          </td>
          <td >
              <span>{labelDict[title][2]}</span>
          </td>
        </tr>
      </tbody>
    )

  }
}

export default CharBar;