import React from 'react';
import UseCount from '../../Hooks/UseCount';

function Count() {
  const [count, handleClick, handleClickMinus] = UseCount();
  const [count1, handleClick1, handleClickMinus1] = UseCount();

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClickMinus}>-</button>

        <hr />

        <p>Count: {count1}</p>
        <button onClick={handleClick1}>+</button>
        <button onClick={handleClickMinus1}>-</button>
      </div>
    </>
  );
}

export default Count;
