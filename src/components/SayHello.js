import React from "react";

function SayHello(props) {
  return (
    <h2>
      Hello, {props.firstName} {props.lastName}
    </h2>
  );
}

export default SayHello;
