import React from "react";

function Container(props) {
  console.log(props);
  return (
    <div className="container_div">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Container;
