import {
  GET_VIDEOGAMES,
  SET_LOADING,
  GET_API_VIDEOGAMES,
  GET_DB_VIDEOGAMES,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_NAME,
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
      const gamesFiltered = state.allVideogames.filter((g) =>
        g.genres.includes(action.payload)
      );
      return {
        ...state,
        videogames: gamesFiltered,
        loading: false,
      };
    case ORDER_BY_NAME:
      if (action.payload === "a-z") {
        console.log("entre al a-z");
        const gamesOrdered = state.allVideogames.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        console.log(gamesOrdered);
        return {
          ...state,
          videogames: gamesOrdered,
          loading: false,
        };
      }
      if (action.payload === "z-a") {
        console.log("entre al z-a");
        const gamesOrdered = state.allVideogames.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
        console.log(gamesOrdered);
        return {
          ...state,
          videogames: gamesOrdered,
          loading: false,
        };
      }
    default:
      return state;
  }
}

export default rootReducer;
