import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_API_VIDEOGAMES = "GET_API_VIDEOGAMES";
export const GET_DB_VIDEOGAMES = "GET_DB_VIDEOGAMES";
export const SET_LOADING = "SET_LOADING";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_NAME_VG = "GET_NAME_VG";
export const GET_DETAIL = "GET_DETAIL";
export const POST_VG = "POST_VG";

export function getVideogames() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/videogames");
    return dispatch({ type: GET_VIDEOGAMES, payload: json.data });
  };
}

export function getApiVideogames() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api_videogames");
    return dispatch({ type: GET_API_VIDEOGAMES, payload: json.data });
  };
}

export function getDBVideogames() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/db_videogames");
    return dispatch({ type: GET_DB_VIDEOGAMES, payload: json.data });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/genres");
    return dispatch({ type: GET_GENRES, payload: json.data });
  };
}

export function getNameVideogame(payload) {
  return async function (dispatch) {
    try {
      const json = await axios(
        `http://localhost:3001/videogames?name=${payload}`
      );
      return dispatch({
        type: GET_NAME_VG,
        payload: json.data,
      });
    } catch (e) {
      alert("Videojuego no encontrado");
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios("http://localhost:3001/videogame/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log("ERRROR", error);
    }
  };
}

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}

export function filterByGenre(payload) {
  return { type: FILTER_BY_GENRE, payload };
}

export function orderByName(payload) {
  return { type: ORDER_BY_NAME, payload };
}

export function setCurrentPage(payload) {
  return { type: SET_CURRENT_PAGE, payload };
}

export function orderByRating(payload) {
  return { type: ORDER_BY_RATING, payload };
}

export function postVideogame(payload) {
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/videogame", payload);
    return json;
  };
}
