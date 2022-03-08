import React from "react";
import { CardSt, FondoVermas, LinkVerMas } from "./styles";
import styles from "./Card.module.css";

export default function Card({ image, name, genres, id }) {
  return (
    <CardSt>
      <h3>{name}</h3>
      <img src={image} alt="videogame" className={styles.image} />
      <FondoVermas>
        <LinkVerMas to={`/videogame/${id}`}>Ver detalles</LinkVerMas>
      </FondoVermas>
      <ul>
        {genres &&
          genres.map((g) => {
            return <li key={g + id}>{g} </li>;
          })}
      </ul>
    </CardSt>
  );
}
