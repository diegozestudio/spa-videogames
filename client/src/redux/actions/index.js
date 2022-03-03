import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_API_VIDEOGAMES = "GET_API_VIDEOGAMES";
export const GET_DB_VIDEOGAMES = "GET_DB_VIDEOGAMES";
export const SET_LOADING = "SET_LOADING";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

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

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}

export function filterByGenre(payload) {
  return { type: FILTER_BY_GENRE, payload };
}

export function orderByName(payload) {
  return { type: ORDER_BY_NAME, payload };
}
