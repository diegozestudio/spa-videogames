import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../redux/actions";
import Card from "./Card";
import load from "../assets/loading.gif";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <Link to="/videogame">Crear Videogame</Link>
      <h1>Componente Home</h1>
      {/* <Paginado /> */}
      {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <img src={load} />
        </>
      ) : (
        <Pagination />
      )}
      {/* {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <img src={load} />
        </>
      ) : (
        allVideogames &&
        allVideogames.map((v) => {
          return (
            <div key={v.id}>
              <Card name={v.name} image={v.image} genres={v.genres} id={v.id} />
              <Link to={`/videogames/${v.id}`}>Ver más</Link>
            </div>
          );
        })
      )} */}
    </div>
  );
}
