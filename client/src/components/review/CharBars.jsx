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

// var sliders;
// var key = {
//   Size: {
//     1: 'Small',
//     3: 'Perfect',
//     5: 'Big',
//   },
//   Width: {
//     1: 'Narrow',
//     3: 'Perfect',
//     5: 'Wide',
//   },
//   Comfort: {
//     1: 'Poor',
//     3: 'Ok',
//     5: 'Perfect',
//   },
//   Quality: {
//     1: 'Poor',
//     3: 'Expected',
//     5: 'Perfect',
//   },
// };

// var values = [];
// if (characteristics !== undefined) {
//   values = Object.entries(characteristics);
//   var keyArray = Object.entries(key);
// }

// sliders = values.map (function(item, index) {
//   var value = parseInt(item[1].value);
//   var min = key[item[0]][1];
//   var mid = key[item[0]][3];
//   var max = key[item[0]][5];
//   return (<div key={index} className='slideContainer'>
//     <label className='slideLabel'>{item[0]}</label>
//     <div >
//       <input
//         id={item[0]}
//         type="range"
//         // style={{backgroundColor: "black"}}
//         min={1}
//         max={5}
//         step={1}
//         value={value}
//         className='slider'
//         // readOnly={false}
//       />
//     </div>
//     <div className='sliderLabels'>
//       <p>{min}</p>
//       <p>{mid}</p>
//       <p>{max}</p>
//     </div>
//   </div>
//   );

// });


// return sliders;