import React from 'react';

const List = (props) => {
  props.warmupWeights.map((val, key) =>(
    console.log(val)
  ))
  return (
    <div>
      <ul>
        <ul>
          {props.warmupWeights.map((val, key) => (
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