import React from 'react';
import '../Styles/Table.css';

const Table = (props) => {
  
const replaceKeys = () => {
  const replaced = [];
  let temp = {};
  let i;
  for (i = 0; i < props.warmupWeights.length; i += 1) {
    temp = {[props.warmupWeights[i]] : [props.warmupPlates[i]]}
    replaced.push(temp);
  }
  return replaced
}

let completeSet = replaceKeys();

//const display = Object.keys(completeSet).map(key => <li value={key}> {completeSet[key]}</li>)

  return (
    <div>
      <div className="container">
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Total Weight</th>
                <th>Plates</th>
              </tr>
              {props.warmupWeights.map((val, key) => (
                <tr id="weights" key={val}>
                  <td>{val}</td>
                </tr>
              ))}
              {props.warmupPlates.map((val, key) => (
                <tr id="plates" key={val}>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default Table;