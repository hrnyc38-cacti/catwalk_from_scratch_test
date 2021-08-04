import React from "react";
//import { max } from 'underscore';

function BarChart({ratings}) {
  let labels = [];
  let datapt = [];
  for (var k in ratings) {
    labels.push(k + ' stars');
    datapt.push(parseInt(ratings[k]))
  }

  const max = Math.max.apply(null, datapt);
  console.log('datapt ', datapt);

  return (
    <table>
      <tbody>
        {datapt.map((item, i) => {
          let style = {
            backgroundColor: 'rgba(6, 156,51, .3)',
            width: (item / max) * 100 + '%',
            height: 'auto',
          }
          return (
            <tr key={i}>
              <td>
                {labels[i]}
              </td>
              <td width="40px">
                <div style={style}>
                  <span>{item}</span>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BarChart;
