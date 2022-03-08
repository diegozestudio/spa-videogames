import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../redux/actions";
import { LinktoHome } from "./styles";
import wallpaper from "../assets/imageBack.jpg";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <img src={wallpaper} className={styles.image}></img>
      <div className={styles.cover} />
      <LinktoHome to="/home">START</LinktoHome>
    </>
  );
}
