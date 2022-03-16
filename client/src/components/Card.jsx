import React from "react";
import {
  CardSt,
  ContGenres,
  ContName,
  FondoVermas,
  LinkVerMas,
  ImageCard,
  TitleCard,
  GenresCard,
} from "../styles/cardstyles";

export default function Card({ image, name, genres, id }) {
  return (
    <CardSt>
      <ContName>
        <TitleCard>{name}</TitleCard>
      </ContName>
      <ImageCard src={image} alt={name} />
      <ContGenres>
        <GenresCard>{genres && genres.join(" - ").toUpperCase()}</GenresCard>
      </ContGenres>
      <FondoVermas>
        <LinkVerMas to={`/videogame/${id}`}>Ver detalles</LinkVerMas>
      </FondoVermas>
    </CardSt>
  );
}
