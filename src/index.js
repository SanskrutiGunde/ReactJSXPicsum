import React from "react";
import ReactDOM from "react-dom";

const pic = "https://picsum.photos/400";
ReactDOM.render(
  <div>
    <h1 className="heading">Random images from picsum</h1>
    <img src={pic} alt="random-pic" />
  </div>,
  document.getElementById("root")
);
