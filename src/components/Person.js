import { useState } from "react";
import React from "react";

const Person = (props) => {
  // console.log(props.index);
  return (
    <div>
      My name is {props.name}. I am {props.age}. I am living in {props.city}
      <button onClick={(e) => props.deleteThisItem(props.index)}>Delete</button>
    </div>
  );
};

export default Person;
