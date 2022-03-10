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
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import {
  DivNewGame,
  HomeSt,
  LinkNewGame,
  Loading,
  NavBot,
  NavBottomRight,
  NavTop,
  NavTopRight,
  NewSearchBar,
  SelectCosas,
} from "./styles";
import joystick from "../assets/joystick.svg";
import menu from "../assets/bars.svg";
import styles from "./Home.module.css";
import reload from "../assets/arrow-rotate-right.svg";
import gamepad from "../assets/gamepad.svg";
import flechabajo from "../assets/chevron-down.svg";
import flecharriba from "../assets/angle-up.svg";

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
    <>
      <NavTop>
        <Link to="/" className={styles.linkhome}>
          <img src={joystick} className={styles.joystick} />
        </Link>
        <NavTopRight>
          <SearchBar />
          <LinkNewGame to="/videogame">
            <DivNewGame>
              New
              <img src={gamepad} className={styles.gamepad} />
            </DivNewGame>
          </LinkNewGame>
          <img src={menu} className={styles.hamburger} />
        </NavTopRight>
      </NavTop>
      <NavBot>
        <img onClick={handleReload} src={reload} className={styles.reload} />
        <NavBottomRight>
          <SelectCosas>
            <select onChange={handleSort}>
              <option>Orden</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
              <option value="mayor-rating">Mayor Rating</option>
              <option value="menor-rating">Menor Rating</option>
            </select>
            <img src={flechabajo} className={styles.flechitabajo} />
          </SelectCosas>
          <SelectCosas>
            <select onChange={handleGenres}>
              <option>Géneros</option>
              {genres.map((g) => {
                return (
                  <option value={g.name} key={g.name}>
                    {g.name}
                  </option>
                );
              })}
            </select>
            <img src={flechabajo} className={styles.flechitabajo} />
          </SelectCosas>
          <SelectCosas>
            <select onChange={handleFilterCreated}>
              <option>Origen</option>
              <option value="all">Todos</option>
              <option value="db">Creados</option>
              <option value="api">Existentes</option>
            </select>
            <img src={flechabajo} className={styles.flechitabajo} />
          </SelectCosas>
          <img src={flecharriba} className={styles.flechitarriba} />
        </NavBottomRight>
      </NavBot>
      {loading ? (
        <>
          <h2>Cargando los Videogames...</h2>
          <Loading />
        </>
      ) : (
        <Pagination videogames={videogames} />
      )}
    </>
  );
}
