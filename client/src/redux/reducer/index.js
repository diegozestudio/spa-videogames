import {
  GET_VIDEOGAMES,
  SET_LOADING,
  GET_API_VIDEOGAMES,
  GET_DB_VIDEOGAMES,
  GET_GENRES,
  FILTER_BY_GENRE,
} from "../actions";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  loading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogames: action.payload,
        loading: false,
      };
    case GET_API_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        loading: false,
      };
    case GET_DB_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
        loading: false,
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
