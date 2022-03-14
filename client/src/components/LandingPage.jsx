import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../redux/actions";
import { Cover, ImageBack, LinktoHome } from "./landingpagestyles";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <ImageBack
        src="https://w.wallhaven.cc/full/pk/wallhaven-pkmpmm.jpg"
        alt="fondo"
      />
      <Cover />
      <LinktoHome to="/home">START</LinktoHome>
    </>
  );
}
