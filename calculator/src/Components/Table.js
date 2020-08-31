import React, { useEffect } from 'react';
import '../Styles/Table.css';

const Table = (props) => {

useEffect(() => {
  if (props.warmupWeights[0] === 45) {
    document.getElementById("plates").cells[0].innerHTML = "Empty bar";
  }
})

  return (
    <div>
      <div className="container">
        <table id="floatleft">
          <tbody>
            <tr>
              <th>Total Weight</th>
            </tr>
            {props.warmupWeights.map((val, key) => (
              <tr className="column" id="weights" key={key}>
                <td>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>Plates</th>
            </tr>
            {props.warmupPlates.map((vul, key) => (
              <tr className="column" id="plates" key={key}>
                <td>{vul}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Table;