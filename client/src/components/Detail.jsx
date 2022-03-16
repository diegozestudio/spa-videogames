import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, setLoading } from "../redux/actions";
import {
  BoxShadow,
  ContDetail,
  DetailDetail,
  ImageDetail,
  LineDetail,
  LinkDetail,
  Loading,
  SubTitleDetail,
  TitleDetail,
  ContErrorDetail,
  ListDetail,
  DateRating,
} from "../styles/detailstyles";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return loading ? (
    <ContErrorDetail>
      <Loading />
    </ContErrorDetail>
  ) : (
    <ContDetail>
      <TitleDetail genero={"rpg"}> {videogame.name} </TitleDetail>
      <ImageDetail src={videogame.image} alt={videogame.name} />
      <DetailDetail>{videogame.description}</DetailDetail>
      <DateRating>
        <BoxShadow>Fecha de lanzamiento: {videogame.released}</BoxShadow>
        <BoxShadow>Rating: {videogame.rating}</BoxShadow>
      </DateRating>
      <LineDetail>
        <SubTitleDetail>Generos: </SubTitleDetail>
        <ListDetail>
          {videogame.genres &&
            videogame.genres.map((g) => {
              return <BoxShadow key={g}>{g}</BoxShadow>;
            })}
        </ListDetail>
      </LineDetail>
      <LineDetail>
        <SubTitleDetail>Plataformas: </SubTitleDetail>
        <ListDetail>
          {videogame.platforms &&
            videogame.platforms.map((p) => {
              return <BoxShadow key={p}>{p}</BoxShadow>;
            })}
        </ListDetail>
      </LineDetail>
      <LinkDetail to="/home">Volver</LinkDetail>
    </ContDetail>
  );
}
