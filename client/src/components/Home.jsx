import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../redux/actions";
import load from "../assets/loading.gif";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <Link to="/videogame">Crear Videogame</Link>
      <h1>Componente Home</h1>
      {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <img src={load} alt="" />
        </>
      ) : (
        <Pagination />
      )}
      <br />
      <br />
      <Link to="/">Volver a la Landing</Link>
    </div>
  );
}
