import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../redux/actions";
import Slider from "./Slider";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <main>
      <Slider />
    </main>
  );
}
