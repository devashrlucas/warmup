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

const completeSet = replaceKeys();

  return (
    <div>
      <ul>
        <ul>
          {completeSet.map((val, key) => (
            <li key={key.toString()} val={val}>
              {val}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );

}

export default List;