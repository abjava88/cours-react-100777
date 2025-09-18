import React from "react";

const Title2 = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Titre : {props.title}</h2>
      <h3>Auteur : {props.author}</h3>
    </div>
  );
};

export default Title2;
