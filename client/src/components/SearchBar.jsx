import { useState } from "react";
import { getNameVideogame, setLoading } from "../redux/actions";
import { useDispatch } from "react-redux";

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
