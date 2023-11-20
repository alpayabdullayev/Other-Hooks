import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ustunegel':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

const UseReducerPractics = () => {
  const [state, dispatch] = useReducer(reducer, { count: 3 });

  const handleIncrement = () => {
    dispatch({ type: 'ustunegel',payload: 10  });
  };

  return (
    <>
      <br />
      <button onClick={handleIncrement}>+ADD</button>
      <div>deyerim : {state.count}</div>
    </>
  );
}

export default UseReducerPractics;
