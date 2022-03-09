import { render, screen } from "@testing-library/react";
import rootReducer from "./redux/reducer";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import VideogameCreate from "./components/VideogameCreate";

test("Debe devolver el estado inicial", () => {
  expect(rootReducer(undefined, {})).toEqual({
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: {},
    currentPage: 1,
    loading: true,
  });
});

describe("VideogameCreate", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <VideogameCreate />
        </BrowserRouter>
      </Provider>
    );
  });
  it("El formulario debe tener un input para poner el Nombre de un Videogame", () => {
    const element = screen.getByLabelText("Nombre");
    expect(element.type).toBe("text");
  });
  it("El formulario debe tener un input para poner una Descripción", () => {
    const element = screen.getByLabelText("Descripción");
    expect(element.type).toBe("text");
  });
  it("El formulario debe tener un input para poner una Imagen", () => {
    const element = screen.getByLabelText("Imagen");
    expect(element.type).toBe("text");
  });
});
