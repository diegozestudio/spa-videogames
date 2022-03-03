import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../redux/actions";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <h1>Component Landing</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}
