import React from "react";

const Box = ({ imageUrl, text }) => {
  return (
    <div className="box">
      <img className="icon" src={imageUrl} alt="icon" />
      <div>{text}</div>
    </div>
  );
};

export default Box;
