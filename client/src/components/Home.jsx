import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterByGenre,
  getApiVideogames,
  getDBVideogames,
  getGenres,
  getVideogames,
  setLoading,
} from "../redux/actions";
import load from "../assets/loading.gif";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  let videogames = useSelector((state) => state.videogames);
  let allVideogames = useSelector((state) => state.allVideogames);

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(getVideogames());
  };

  //ordenar Alfabeticamente, Rating
  //filtrar Generos

  //extras
  //ordenar Fecha de Lanzamiento
  //filtrar Plataformas

  // const handleSort = (e) => {
  //   if (e.target.value === a - z) {
  //     dispatch(getdeAaZ());
  //   }
  // };

  const handleFilterCreated = (e) => {
    if (e.target.value === "all") {
      dispatch(setLoading(true));
      dispatch(getVideogames());
    }
    if (e.target.value === "api") {
      dispatch(setLoading(true));
      dispatch(getApiVideogames());
    }
    if (e.target.value === "db") {
      dispatch(setLoading(true));
      dispatch(getDBVideogames());
    }
  };

  // console.log(gamesFiltered);
  const handleGenres = (e) => {
    const gamesFiltered = allVideogames.filter((g) =>
      g.genres.includes(e.target.value)
    );
    dispatch(filterByGenre(gamesFiltered));
  };
  // console.log(allVideogames[0].genres);

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
        <option>Selecciona</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
        <option value="mayor-rating">Mayor Rating</option>
        <option value="menor-rating">Menor Rating</option>
      </select>
      <label>Géneros: </label>
      {/* <select> */}
      <select onChange={handleGenres}>
        <option>Selecciona</option>
        {genres.map((g) => {
          return (
            <option value={g.name} key={g.name}>
              {g.name}
            </option>
          );
        })}
      </select>
      <label>Plataformas: </label>
      <select>
        {/* <select onChange={handlePlatforms}> */}
        <option>Selecciona</option>
        <option value="genres">Map de las plataformas</option>
      </select>
      <label>Filtrar: </label>
      <select onChange={handleFilterCreated}>
        <option>Selecciona</option>
        <option value="all">Todos</option>
        <option value="db">Creados</option>
        <option value="api">Existentes</option>
      </select>
      {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <img src={load} alt="" />
        </>
      ) : (
        <Pagination allVideogames={videogames} />
      )}
      <br />
      <br />
      <Link to="/">Volver a la Landing</Link>
    </div>
  );
}
