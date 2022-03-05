import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, setLoading } from "../redux/actions";
import load from "../assets/loading.gif";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <>
          <h2>Cargando los Detalles...</h2>
          <img src={load} alt="" />
        </>
      ) : (
        <div>
          <h1>Componente Detail</h1>
          {videogame ? (
            <div>
              <h1> {videogame.name} </h1>
              <img
                src={videogame.image}
                alt={videogame.name}
                width="500px"
                height="300px"
              />
              <p>{videogame.description}</p>
              <span>Lanzamiento: {videogame.released}</span>
              <br />
              <span>Rating: {videogame.rating}</span>
              <br />
              <span>Generos: </span>
              {videogame.genres &&
                videogame.genres.map((g) => {
                  return <span key={g}>{g}, </span>;
                })}
              <br />
              <span>Plataformas: </span>
              {videogame.platforms &&
                videogame.platforms.map((p) => {
                  return <span key={p}>{p}, </span>;
                })}
            </div>
          ) : (
            <h1>No existe el Videogame</h1>
          )}
          <Link to="/home">
            <button>Volver</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
