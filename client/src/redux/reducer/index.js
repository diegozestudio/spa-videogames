import {
  GET_VIDEOGAMES,
  SET_LOADING,
  GET_API_VIDEOGAMES,
  GET_DB_VIDEOGAMES,
  GET_GENRES,
  FILTER_BY_GENRE,
  ORDER_BY_NAME,
  SET_CURRENT_PAGE,
  ORDER_BY_RATING,
  GET_NAME_VG,
} from "../actions";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  currentPage: 1,
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
        return {
          ...state,
          videogames: gamesOrdered.concat([]),
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
        return {
          ...state,
          videogames: gamesOrdered.concat([]),
          loading: false,
        };
      }
    case ORDER_BY_RATING:
      if (action.payload === "menor-rating") {
        const gamesOrdered = state.allVideogames.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          videogames: gamesOrdered.concat([]),
          loading: false,
        };
      }
      if (action.payload === "mayor-rating") {
        const gamesOrdered = state.allVideogames.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          videogames: gamesOrdered.concat([]),
          loading: false,
        };
      }
    case GET_NAME_VG:
      return {
        ...state,
        videogames: action.payload,
        loading: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
