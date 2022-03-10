import { useState } from "react";
import { getNameVideogame, setLoading } from "../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import search from "../assets/search.svg";

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
      <div className={styles.bordesearch}>
        <input
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={handleChange}
        />
        <input src={search} type="image" className={styles.lupita} />
      </div>
    </form>
  );
}
