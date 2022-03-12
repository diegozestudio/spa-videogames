import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres, getVideogames, postVideogame } from "../redux/actions";

import styles from "./VideogameCreate.module.css";
import {
  ContForm,
  CrearForm,
  DivInputForm,
  DivSelectForm,
  ErrorForm,
  InputForm,
  ContSelecciones,
  SelectForm,
  LinkVolver,
  BtnEliminar,
  Equis,
  Ffform,
} from "./styles";

const validurl = (url) => {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
};

const validnum = (num) => {
  if (num.match(/^(?!0\d)\d*(\.\d+)?$/)) {
    return true;
  } else {
    return false;
  }
};

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un Nombre";
  } else if (!input.description) {
    errors.description = "Se requiere una Descripción";
  } else if (!validurl(input.image)) {
    errors.image = "No es una url valida";
  } else if (!input.released) {
    errors.released = "Se requiere una Fecha de Lanzamiento";
  } else if (!validnum(input.rating)) {
    errors.rating = "No es un rating valido";
  } else if (input.genres.length === 0) {
    errors.genres = "Se requiere al menos un Género";
  } else if (!input.platforms[0]) {
    errors.platforms = "Se requiere al menos una Plataforma";
  }
  return errors;
};

export default function VideogameCreate() {
  const dispatch = useDispatch();
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
  let btndisabled = !(
    input.name &&
    input.description &&
    input.image &&
    input.released &&
    input.rating &&
    input.platforms.length &&
    input.genres.length
  );
  const history = useHistory();

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
    e.preventDefault();
    setInput({
      ...input,
      genres: input.genres.filter((c) => c !== e.target.name),
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };
  const handleSelectGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };
  const handleDeletePlatform = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      platforms: input.platforms.filter((c) => c !== e.target.name),
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };
  const handleSelectPlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getVideogames());
    setErrors(
      validate({
        ...input,
      })
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideogame(input));
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: "",
      genres: [],
      platforms: [],
    });
    alert("Videogame creado con exito");
    history.push("/home");
  };

  return (
    <ContForm>
      <Ffform onSubmit={handleSubmit} className={styles.cont}>
        <label htmlFor="nameID"></label>
        <DivInputForm>
          <InputForm
            id="nameID"
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
            placeholder="Nombre del videogame"
          />
        </DivInputForm>
        {errors.name && <ErrorForm>{errors.name}</ErrorForm>}
        <label htmlFor="descID"></label>
        <DivInputForm>
          <InputForm
            id="descID"
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
            placeholder="Descripción"
          />
        </DivInputForm>
        {errors.description && <ErrorForm>{errors.description}</ErrorForm>}
        <label htmlFor="imageID"></label>
        <DivInputForm>
          <InputForm
            id="imageID"
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
            placeholder="Url de Imagen"
          />
        </DivInputForm>
        {errors.image && <ErrorForm>{errors.image}</ErrorForm>}
        <label></label>
        <DivInputForm>
          <InputForm
            type="text"
            value={input.released}
            name="released"
            onChange={handleChange}
            placeholder="Fecha de Lanzamiento"
          />
        </DivInputForm>
        {errors.released && <ErrorForm>{errors.released}</ErrorForm>}
        <label></label>
        <DivInputForm>
          <InputForm
            type="text"
            value={input.rating}
            name="rating"
            onChange={handleChange}
            placeholder="Rating"
          />
        </DivInputForm>
        {errors.rating && <ErrorForm>{errors.rating}</ErrorForm>}
        <label style={{ fontWeight: "bold" }}></label>
        <DivSelectForm>
          <SelectForm onChange={handleSelectGenres}>
            <option value="Géneros:">Géneros:</option>
            {genres.map((genres) => {
              return (
                <option value={genres.name} key={genres.name}>
                  {genres.name}
                </option>
              );
            })}
          </SelectForm>
        </DivSelectForm>
        <ContSelecciones>
          {input.genres.map((g) => (
            <BtnEliminar name={g} onClick={handleDeleteGenres} key={g}>
              {g}
              <Equis>X</Equis>
            </BtnEliminar>
          ))}
        </ContSelecciones>
        {errors.genres && <ErrorForm>{errors.genres}</ErrorForm>}
        <label style={{ fontWeight: "bold" }}></label>
        <DivSelectForm>
          <SelectForm onChange={handleSelectPlatforms}>
            <option value="Plataformas:">Plataformas:</option>
            {platforms.map((platform) => {
              return (
                <option value={platform} key={platform}>
                  {platform}
                </option>
              );
            })}
          </SelectForm>
        </DivSelectForm>
        <ContSelecciones>
          {input.platforms.map((p) => (
            <BtnEliminar name={p} onClick={handleDeletePlatform} key={p}>
              {p}
              <Equis>X</Equis>
            </BtnEliminar>
          ))}
        </ContSelecciones>
        {errors.platforms && <ErrorForm>{errors.platforms}</ErrorForm>}
        <CrearForm disabled={btndisabled}>Crear Videogame</CrearForm>
      </Ffform>
      <LinkVolver to="/home">Volver</LinkVolver>
    </ContForm>
  );
}
