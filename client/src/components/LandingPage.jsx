import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../redux/actions";
import { LinktoHome } from "./styles";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <img
        src="https://w.wallhaven.cc/full/pk/wallhaven-pkmpmm.jpg"
        className={styles.image}
      ></img>
      <div className={styles.cover} />
      <LinktoHome to="/home">START</LinktoHome>
    </>
  );
}
