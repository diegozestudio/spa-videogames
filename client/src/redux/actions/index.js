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
export const SET_NAV = "SET_NAV";
export const SET_ERROR = "SET_ERROR";
export const SET_AUTOPLAY = "SET_AUTOPLAY";
export const SET_CORS = "SET_CORS";
export const DELETE_VG = "DELETE_VG";

export function getVideogames() {
  return async function (dispatch) {
    try {
      let json = await axios.get("/videogames");
      return dispatch({ type: GET_VIDEOGAMES, payload: json.data });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function getApiVideogames() {
  return async function (dispatch) {
    try {
      let json = await axios.get("/api_videogames");
      return dispatch({ type: GET_API_VIDEOGAMES, payload: json.data });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function getDBVideogames() {
  return async function (dispatch) {
    try {
      let json = await axios.get("/db_videogames");
      return dispatch({ type: GET_DB_VIDEOGAMES, payload: json.data });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function getGenres() {
  return async function (dispatch) {
    try {
      let json = await axios.get("/genres");
      return dispatch({ type: GET_GENRES, payload: json.data });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function getNameVideogame(payload) {
  return async function (dispatch) {
    try {
      const json = await axios(`/videogames?name=${payload}`);
      return dispatch({
        type: GET_NAME_VG,
        payload: json.data,
      });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios("/videogame/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
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
    try {
      const json = await axios.post("/videogame", payload);
      return json;
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}

export function setNav(payload) {
  return { type: SET_NAV, payload };
}

export function setError(payload) {
  return { type: SET_ERROR, payload };
}

export function setAutoplay(payload) {
  return { type: SET_AUTOPLAY, payload };
}

export function setCors(payload) {
  return { type: SET_CORS, payload };
}

export function deleteVideogame(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/deleted/${id}`);
      return dispatch({
        type: DELETE_VG,
      });
    } catch (err) {
      return dispatch({ type: SET_ERROR, payload: true });
    }
  };
}
