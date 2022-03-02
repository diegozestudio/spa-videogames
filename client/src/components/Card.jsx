import React from "react";

export default function Card({ image, name, genres }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="videogame" width="200px" height="250px" />
      {/* {genres &&
        genres.map((g) => {
          console.log(g);
        })} */}
    </div>
  );
}
