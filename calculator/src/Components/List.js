import React from 'react';

const List = (props) => {
  
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
console.log(typeof props.warmupPlates)

  return (
    <div>
      <div className="container">
        <div className="row">
          <table>
            {props.warmupWeights.map((val, key) => (
              <tr id="weights" key={val}>
                {val}
              </tr>
            ))}
            {props.warmupPlates.map((val, key) => (
              <tr id="plates" key={val}>
                {val}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );

}

export default List;