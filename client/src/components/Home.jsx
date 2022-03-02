import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../redux/actions";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  console.log(allVideogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <Link to="/videogame">Crear Videogame</Link>
      <h1>Componente Home</h1>
      {allVideogames &&
        allVideogames.map((v) => {
          return (
            <div key={v.id}>
              <Card name={v.name} image={v.image} genres={v.genres} />
              <Link to={`/videogames/${v.id}`}></Link>
            </div>
          );
        })}
    </div>
  );
}
