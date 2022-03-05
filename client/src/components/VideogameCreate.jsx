import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, postVideogame } from "../redux/actions";

export default function VideogameCreate() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [input, setInput] = useState({
    name: "",
    nickname: "",
    birthday: "",
    status: "",
    img: "",
    genres: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        status: e.target.value,
      });
    }
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((c) => c !== e.target.name),
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(getGenres());
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
      platforms: [],
      genres: [],
    });
  };

  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Crea tu personaje</h1>
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
            name="nickname"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            value={input.image}
            name="img"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Released</label>
          <input
            type="date"
            value={input.released}
            name="birthday"
            onChange={handleChange}
          />
        </div>
        <label style={{ fontWeight: "bold" }}>Genres: </label>
        <select onChange={handleSelect}>
          {genres.map((genres) => {
            return <option value={genres.name}>{genres.name} </option>;
          })}
        </select>
      </form>
      {input.genres.map((oc) => (
        <div>
          <p>{oc}</p>
          <button name={oc} onClick={handleDelete}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
