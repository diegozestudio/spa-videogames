import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../redux/actions";
import { Cover, ImageBack, LinktoHome } from "./landingpagestyles";
import imagen from "../assets/slide11.jpg";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <ImageBack src={imagen} alt="fondo" />
      <Cover />
      <LinktoHome to="/home">START</LinktoHome>
    </>
  );
}
