import React from "react";
import { ContError, SadFace, Reload } from "../styles/errorstyles";
import sadface from "../assets/sadface.svg";
import { useDispatch } from "react-redux";
import {
  getGenres,
  getVideogames,
  setError,
  setLoading,
} from "../redux/actions";

export default function Error() {
  const dispatch = useDispatch();

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(setError(false));
    dispatch(setLoading(true));
    dispatch(getVideogames());
    dispatch(getGenres());
  };

  return (
    <ContError>
      <SadFace src={sadface} />
      Ups, no existe ese juego.
      <Reload onClick={handleReload}>Intentar de nuevo</Reload>
    </ContError>
  );
}
