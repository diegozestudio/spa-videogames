import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export function getVideogames() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/videogames");
    return dispatch({ type: GET_VIDEOGAMES, payload: json.data });
  };
}
