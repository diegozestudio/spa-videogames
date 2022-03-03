import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, setLoading } from "../redux/actions";
import load from "../assets/loading.gif";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  let allVideogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(getVideogames());
  };

  //ordenar Alfabeticamente, Rating
  //filtrar Todos, Creados
  //filtrar Generos

  //extras
  //ordenar Fecha de Lanzamiento
  //filtrar Plataformas
  return (
    <div>
      <Link to="/videogame">Crear Nuevo Videogame</Link>
      <h1>Componente Home</h1>
      <button onClick={handleReload}>Volver a cargar personajes</button>
      <br />
      <br />
      <label>Ordenar: </label>
      <select>
        {/* <select onChange={handleSort}> */}
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
        <option value="mayor-rating">Mayor Rating</option>
        <option value="menor-rating">Menor Rating</option>
      </select>
      <label>Géneros: </label>
      <select>
        {/* <select onChange={handleGenres}> */}
        <option value="genres">Map de los generos</option>
      </select>
      <label>Plataformas: </label>
      <select>
        {/* <select onChange={handlePlatforms}> */}
        <option value="genres">Map de las plataformas</option>
      </select>
      <label>Filtrar: </label>
      <select>
        {/* <select onChange={handleFilterCreated}> */}
        <option value="all">Todos</option>
        <option value="created">Creados</option>
        <option value="api">Existentes</option>
      </select>
      {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <img src={load} alt="" />
        </>
      ) : (
        <Pagination allVideogames={allVideogames} />
      )}
      <br />
      <br />
      <Link to="/">Volver a la Landing</Link>
    </div>
  );
}
