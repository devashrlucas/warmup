import React from 'react';

const List = (props) => {
  const valuesToRemove = ["0", "1", "2", "3", "4"]
 
  
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