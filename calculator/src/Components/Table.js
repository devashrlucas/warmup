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
console.log(Object.keys(props.warmupWeights))
console.log(Object.keys(props.warmupPlates))


//const display = Object.keys(completeSet).map(key => <li value={key}> {completeSet[key]}</li>)

  return (
    <div>
      <div className="container">
        <table id="floatleft">
          <tr>
            <th>Total Weight</th>
          </tr>
          <tbody>
            {props.warmupWeights.map((val, key) => (
              <tr className="column" id="weights" key={key}>
                <td>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tr>
            <th>Plates</th>
          </tr>
          <tbody>
            {props.warmupPlates.map((vul, key) => (
              <tr className="column" id="plates" key={key}>
                <td>{vul}</td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Table;