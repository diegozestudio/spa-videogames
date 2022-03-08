import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, name, genres, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="videogame" width="200px" height="250px" />
      <ul>
        {genres &&
          genres.map((g) => {
            return <li key={g + id}>{g} </li>;
          })}
      </ul>
      <Link to={`/videogame/${id}`}>Ver más</Link>
    </div>
  );
}
