import React from "react";
import ReactDOM from "react-dom";

const pic = "https://picsum.photos/400";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={pic} />
  </div>,
  document.getElementById("root")
);
