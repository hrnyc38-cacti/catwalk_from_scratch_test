import React from "react";

function BarChart({ratings}) {
  let labels = [];
  let datapt = [];
  for (var k in ratings) {
    labels.unshift(k + ' stars');
    datapt.unshift(parseInt(ratings[k]))
  }

  const max = Math.max.apply(null, datapt);
  //console.log('datapt ', datapt);

  return (
    <table>
      <tbody>
        {datapt.map((item, i) => {
          let style = {
            backgroundColor: 'rgba(6, 156,51, .3)',
            width: (item / max) * 100 + '%',
            height: 'auto',
          }
          // let fillStyle = {
          //   backgroundColor: 'rgba(128,128,128, .5)',
          //   width: (max - item) / max * 100 + '%',
          //   height: 'auto',
          // }
          return (
            <tr key={i}>
              <td>
                {labels[i]}
              </td>
              <td width="140px">
                <div style={style}>
                  <span>{item}</span>
                </div>
                {/* <div style={fillStyle}></div> */}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BarChart;
