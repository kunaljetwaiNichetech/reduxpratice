import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Disp() {
  const text = useSelector((state) => {
    console.log(state);
    return state.random.count;
  });
  // console.log(typeof(text))

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
