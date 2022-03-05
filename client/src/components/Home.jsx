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
  orderByName,
  orderByRating,
  setCurrentPage,
  setLoading,
} from "../redux/actions";
import load from "../assets/loading.gif";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  let videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getVideogames());
    dispatch(getGenres());
  }, []);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(getVideogames());
  };

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

  const handleGenres = (e) => {
    dispatch(filterByGenre(e.target.value));
  };

  function handleSort(e) {
    if (e.target.value === "a-z" || e.target.value === "z-a") {
      dispatch(orderByName(e.target.value));
    }
    if (
      e.target.value === "mayor-rating" ||
      e.target.value === "menor-rating"
    ) {
      dispatch(orderByRating(e.target.value));
    }
    dispatch(setCurrentPage(1));
  }

  return (
    <div>
      <Link to="/videogame">Crear Nuevo Videogame</Link>
      <SearchBar />
      <h1>Componente Home</h1>
      <button onClick={handleReload}>Volver a cargar personajes</button>
      <br />
      <br />
      <label>Ordenar: </label>
      <select onChange={handleSort}>
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
      {/* <label>Plataformas: </label>
        <select onChange={handlePlatforms}>
        <option>Selecciona</option>
        <option value="genres">Map de las plataformas</option>
      </select> */}
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
        <Pagination videogames={videogames} />
      )}
      <br />
      <br />
      <Link to="/">Volver a la Landing</Link>
    </div>
  );
}
