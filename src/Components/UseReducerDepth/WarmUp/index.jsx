import React from "react";

function reducer(state, action) {
  state + action;
}

reducer();
const WarmUp = () => {
  const res = [1, 2, 3].reduce(reducer);
  console.log(res);
};

export default WarmUp;
