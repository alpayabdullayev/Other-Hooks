import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  function Hesabla(state, action) {
    switch (action.type) {
      case "+":
        console.log(state);
        return { ...state, result: state.num1 + state.num2 };
        break;
      case "*":
        return { ...state, result: state.num1 * state.num2 };
        break;
      case "-":
        return { ...state, result: state.num1 - state.num2 };
        break;
      case "/":
        return { ...state, result: state.num1 / state.num2 };
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(Hesabla, {
    num1: 0,
    num2: 0,
    result: 0,
  });

//   const handleAdd = (e) => {
//     // const valuee = e.target.value
//     dispatch({ type: "+"});
//   };

  const handleNum1Change = (e) => {
    state.num1 = parseFloat(e.target.value);
    console.log(state.num1);
  };

  const handleNum2Change = (e) => {
    state.num2 = parseFloat(e.target.value);
    console.log(state.num2);
  };

  const handleVurma =() =>{
    dispatch({type: "*"})
  }
  const handleCixma = () =>{
    dispatch({type:"-"})
  }

  const handleBome = () =>{
    dispatch({type: "/"})
}

  return (
    <>
      <input type="text" onChange={(e) => handleNum1Change(e)} />
      <input type="text" onChange={(e) => handleNum2Change(e)} />
      <button onClick={()=> dispatch({ type: "+"})} value="+">Add</button>
      <button onClick={handleVurma}>vurma</button>
      <button onClick={handleCixma}>Cixma</button>
      <button onClick={handleBome}>Bolme</button>
      <p>{state.result}</p>     
    </>
  );
};

export default UseReducer;
