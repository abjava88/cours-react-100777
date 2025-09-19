import React from "react";

const Avatar = ({ person, size, handleClick }) => {
  return (
    <div>
      <img src={person.imageUrl} alt={person.name} width={size} height={size} />
      <br />
      <button onClick={() => handleClick(person.name)}>Envoyer</button>
    </div>
  );
};

export default Avatar;