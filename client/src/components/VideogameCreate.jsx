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

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un Nombre";
  } else if (!input.description) {
    errors.description = "Se requiere una Descripción";
  } else if (!input.image) {
    errors.image = "Se requiere una Imagen";
  } else if (!input.released) {
    errors.released = "Se requiere una Fecha de Lanzamiento";
  } else if (!input.rating) {
    errors.rating = "Se requiere un Rating";
  } else if (!input.genres[0]) {
    errors.genres = "Se requiere al menos un Género";
  } else if (!input.platforms[0]) {
    errors.platforms = "Se requiere al menos una Plataforma";
  }
  return errors;
};

export default function VideogameCreate() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.genres);
  const [errors, setErrors] = useState({});
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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
    alert("Videogame creado con éxito");
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
        {errors.name && <span>{errors.name}</span>}
        <div>
          <label>Descripción</label>
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        {errors.description && <span>{errors.description}</span>}
        <div>
          <label>Imagen</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        {errors.image && <span>{errors.image}</span>}
        <div>
          <label>Fecha de Lanzamiento</label>
          <input
            type="text"
            value={input.released}
            name="released"
            onChange={handleChange}
          />
        </div>
        {errors.released && <span>{errors.released}</span>}
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={input.rating}
            name="rating"
            onChange={handleChange}
          />
        </div>
        {errors.rating && <span>{errors.rating}</span>}
        {loading ? (
          <>
            <h2>Cargando Géneros y Plataformas</h2>
            <img src={load} alt="" />
          </>
        ) : (
          <>
            <label style={{ fontWeight: "bold" }}>Genres: </label>
            <select onChange={handleSelectGenres}>
              {genres.map((genres) => {
                return (
                  <option value={genres.name} key={genres.name}>
                    {genres.name}
                  </option>
                );
              })}
            </select>
            {input.genres.map((g) => (
              <div>
                <p>{g}</p>
                <button name={g} onClick={handleDeleteGenres}>
                  X
                </button>
              </div>
            ))}
            <br />
            <label style={{ fontWeight: "bold" }}>Platforms: </label>
            <select onChange={handleSelectPlatforms}>
              {platforms.map((platform) => {
                return (
                  <option value={platform} key={platform}>
                    {platform}
                  </option>
                );
              })}
            </select>
            {input.platforms.map((p) => (
              <div>
                <p>{p}</p>
                <button name={p} onClick={handleDeletePlatform}>
                  X
                </button>
              </div>
            ))}
          </>
        )}
        <br />
        <br />
        {input.name &&
        input.description &&
        input.image &&
        input.released &&
        input.rating &&
        input.platforms.length &&
        input.genres.length ? (
          <button type="submit">Crear Videogame</button>
        ) : (
          <button type="submit" disabled={true}>
            Crear Videogame
          </button>
        )}
      </form>
    </div>
  );
}
