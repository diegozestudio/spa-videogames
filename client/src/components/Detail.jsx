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
} from "./styles";

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
      <LineDetail>
        <BoxShadow>Fecha de lanzamiento: {videogame.released}</BoxShadow>
        <BoxShadow>Rating: {videogame.rating}</BoxShadow>
      </LineDetail>
      <SubTitleDetail>Generos: </SubTitleDetail>
      <LineDetail>
        {videogame.genres &&
          videogame.genres.map((g) => {
            return <BoxShadow key={g}>{g}</BoxShadow>;
          })}
      </LineDetail>
      <SubTitleDetail>Plataformas: </SubTitleDetail>
      <LineDetail>
        {videogame.platforms &&
          videogame.platforms.map((p) => {
            return <BoxShadow key={p}>{p}</BoxShadow>;
          })}
      </LineDetail>
      <LinkDetail to="/home">Volver</LinkDetail>
    </ContDetail>
  );
}
