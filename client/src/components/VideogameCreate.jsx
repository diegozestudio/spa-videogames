import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getGenres,
  getVideogames,
  postVideogame,
  setLoading,
} from "../redux/actions";
import load from "../assets/loading.gif";

export default function VideogameCreate() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    image: "",
    genres: [],
    platforms: [],
  });

  const juegos = useSelector((state) => state.allVideogames);
  const allPlatforms = juegos.map((c) => c.platforms);
  const platforms = [...new Set(allPlatforms.flat())];

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteGenres = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((c) => c !== e.target.name),
    });
  };

  const handleSelectGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };
  const handleDeletePlatform = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((c) => c !== e.target.name),
    });
  };

  const handleSelectPlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getGenres());
    dispatch(getVideogames());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideogame(input));
    alert("Personaje creado padre");
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: "",
      genres: [],
      platforms: [],
    });
  };

  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Nuevo Videogame</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Released</label>
          <input
            type="text"
            value={input.released}
            name="released"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={input.rating}
            name="rating"
            onChange={handleChange}
          />
        </div>
        {loading ? (
          <>
            <h2>Cargando Generos y Plataformas</h2>
            <img src={load} alt="" />
          </>
        ) : (
          <>
            <label style={{ fontWeight: "bold" }}>Genres: </label>
            <select onChange={handleSelectGenres}>
              {genres.map((genres) => {
                return <option value={genres.name}>{genres.name} </option>;
              })}
            </select>
            {input.genres.map((oc) => (
              <div>
                <p>{oc}</p>
                <button name={oc} onClick={handleDeleteGenres}>
                  X
                </button>
              </div>
            ))}
            <br />
            <label style={{ fontWeight: "bold" }}>Platforms: </label>
            <select onChange={handleSelectPlatforms}>
              {platforms.map((platform) => {
                return <option value={platform}>{platform} </option>;
              })}
            </select>
            {input.platforms.map((x) => (
              <div>
                <p>{x}</p>
                <button name={x} onClick={handleDeletePlatform}>
                  X
                </button>
              </div>
            ))}
          </>
        )}
        <br />
        <br />
        <button type="submit">Crear Videogame</button>
      </form>
    </div>
  );
}
