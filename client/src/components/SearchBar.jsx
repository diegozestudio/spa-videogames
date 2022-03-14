import { useState } from "react";
import { getNameVideogame, setCurrentPage, setLoading } from "../redux/actions";
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
    dispatch(setCurrentPage(1));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formsearch}>
      <div className={styles.bordesearch}>
        <input
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={handleChange}
          className={styles.inputsearch}
        />
        <input
          src={search}
          type="image"
          className={styles.lupita}
          alt="lupita"
        />
      </div>
    </form>
  );
}
