import React from "react";
import {
  CardSt,
  ContGenres,
  ContName,
  FondoVermas,
  LinkVerMas,
} from "./styles";
import styles from "./Card.module.css";

export default function Card({ image, name, genres, id }) {
  return (
    <CardSt>
      <ContName>
        <h3>{name}</h3>
      </ContName>
      <img src={image} alt={name} className={styles.image} />
      <ContGenres>
        <span>{genres && genres.join(" - ").toUpperCase()}</span>
      </ContGenres>
      <FondoVermas>
        <LinkVerMas to={`/videogame/${id}`}>Ver detalles</LinkVerMas>
      </FondoVermas>
    </CardSt>
  );
}
