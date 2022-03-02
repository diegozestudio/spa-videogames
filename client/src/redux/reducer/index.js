import { GET_VIDEOGAMES, SET_LOADING } from "../actions";

const initialState = {
  videogames: [],
  loading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
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
    default:
      return state;
  }
}

export default rootReducer;
