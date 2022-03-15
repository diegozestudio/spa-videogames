import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  getApiVideogames,
  getDBVideogames,
  getGenres,
  getVideogames,
  orderByName,
  orderByRating,
  setAutoplay,
  setCurrentPage,
  setError,
  setLoading,
  setNav,
} from "../redux/actions";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Error from "./Error";
import {
  DivNewGame,
  LinkNewGame,
  Loading,
  NavBot,
  NavBottomRight,
  NavTop,
  NavTopRight,
  SelectCosas,
  ContLoading,
  Joystick,
  Hamburger,
  Reload,
  LinkHome,
  Gamepad,
  SelectFiltros,
  FlechitaAbajo,
  FlechitaArriba,
} from "./homestyles";
import joystick from "../assets/joystick.svg";
import menu from "../assets/bars.svg";
import reload from "../assets/arrow-rotate-right.svg";
import gamepad from "../assets/gamepad.svg";
import flechabajo from "../assets/chevron-down.svg";
import flecharriba from "../assets/angle-up.svg";

export default function Home() {
  const dispatch = useDispatch();
  const autoplay = useSelector((state) => state.autoplay);
  const loading = useSelector((state) => state.loading);
  const nav = useSelector((state) => state.nav);
  const genres = useSelector((state) => state.genres);
  let videogames = useSelector((state) => state.videogames);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    autoplay && dispatch(setAutoplay(false));
    dispatch(setLoading(true));
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(setError(false));
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
    if (e.target.value === "generos") {
      dispatch(setLoading(true));
      dispatch(getVideogames());
    } else {
      dispatch(filterByGenre(e.target.value));
    }
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
    if (e.target.value === "orden") {
      dispatch(setLoading(true));
      dispatch(getVideogames());
    }
    dispatch(setCurrentPage(1));
  }

  const handleShowNav = () => {
    nav ? dispatch(setNav(false)) : dispatch(setNav(true));
  };

  const handleHideNav = () => {
    dispatch(setNav(false));
  };

  return (
    <>
      <NavTop>
        <LinkHome to="/">
          <Joystick src={joystick} alt="joistick" />
        </LinkHome>
        <NavTopRight>
          <SearchBar />
          <LinkNewGame to="/videogame">
            <DivNewGame>
              New
              <Gamepad src={gamepad} alt="gamepad" />
            </DivNewGame>
          </LinkNewGame>
          <Hamburger src={menu} onClick={handleShowNav} alt="hamburger" />
        </NavTopRight>
      </NavTop>
      {nav && (
        <NavBot>
          <Reload onClick={handleReload} src={reload} alt="reload" />
          <NavBottomRight>
            <SelectCosas>
              <SelectFiltros onChange={handleSort}>
                <option value="orden">Orden</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="mayor-rating">Mayor Rating</option>
                <option value="menor-rating">Menor Rating</option>
              </SelectFiltros>
              <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
            </SelectCosas>
            <SelectCosas>
              <SelectFiltros onChange={handleGenres}>
                <option value="generos">Géneros</option>
                {genres.map((g) => {
                  return (
                    <option value={g.name} key={g.name}>
                      {g.name}
                    </option>
                  );
                })}
              </SelectFiltros>
              <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
            </SelectCosas>
            <SelectCosas>
              <SelectFiltros onChange={handleFilterCreated}>
                <option value="all">Origen</option>
                <option value="all">Todos</option>
                <option value="db">Creados</option>
                <option value="api">Existentes</option>
              </SelectFiltros>
              <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
            </SelectCosas>
            <FlechitaArriba
              src={flecharriba}
              onClick={handleHideNav}
              alt="flecha-arriba"
            />
          </NavBottomRight>
        </NavBot>
      )}
      {error ? (
        <Error />
      ) : loading ? (
        <ContLoading>
          <Loading />
        </ContLoading>
      ) : (
        <Pagination videogames={videogames} />
      )}
    </>
  );
}
