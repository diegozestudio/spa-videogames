import { useState } from "react";
import { getNameVideogame, setCurrentPage, setLoading } from "../redux/actions";
import { useDispatch } from "react-redux";
import search from "../assets/search.svg";
import {
  ContSearch,
  FormSearch,
  InputLupita,
  InputSearch,
} from "./searchbarstyles";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(getNameVideogame(name));
    setName("");
    dispatch(setCurrentPage(1));
  };
  return (
    <FormSearch onSubmit={handleSubmit}>
      <ContSearch>
        <InputSearch
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={handleChange}
        />
        <InputLupita src={search} type="image" alt="lupita" />
      </ContSearch>
    </FormSearch>
  );
}
