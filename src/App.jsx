import { useState } from "react";
import "./App.css";
import APP from "./Components/Basket";
import Cards from "./Components/BasketEmil/CARDS";
import Count from "./Components/Count";
import FormikYup from "./Components/FormikYup";
import Form from "./Components/Forn";
import LocalStorage from "./Components/LocalStorage";
import Navbar from "./Components/Navbar";

import UseReducer from "./Components/UseReducer";
import Exercise1 from "./Components/UseReducerDepth/Exercise1";
import Counter from "./Components/UseReducerDepth/Exercise2/Counter";
import ControlledForm from "./Components/UseReducerDepth/Exercise3";
import WarmUp from "./Components/UseReducerDepth/WarmUp";
import UseReducerPractics from "./Components/UseReducerPractics";
import UseReducerTodo from "./Components/UseReducerTodo";
import UseRef from "./Components/UseRef";
import FormikYupMain from "./FormikYup";

function App() {
  const [basket, setbasket] = useState(getLocalStorage("basket") || []);
  let basketArr = getLocalStorage("basket") || [];

  function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  return (
    <>
      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <UseReducerPractics/> */}
      {/* <UseReducerTodo/> */}
      {/* <WarmUp/> */}
      {/* <Exercise1/> */}
      {/* <Counter/> */}
      {/* <ControlledForm/> */}
      {/* <APP/> */}
      {/* <Cards props={{ basket, setbasket }} /> */}
      {/* <Form/> */}
      {/* <FormikYup/> */}
      {/* <FormikYupMain/> */}
      {/* <Navbar/> */}
      {/* <Count/> */}
      <LocalStorage/>


    </>
  );
}

export default App;
