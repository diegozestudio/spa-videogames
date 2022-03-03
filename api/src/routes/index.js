require("dotenv").config();
const { getAllGames, getApiInfo, getDbInfo } = require("./functions");
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  try {
    const name = req.query.name;
    let charactersTotal = await getAllGames();
    if (name) {
      let characterName = await charactersTotal.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      characterName.length
        ? res.status(200).send(characterName)
        : res.status(400).send("No existe el videogame :(");
    } else {
      res.status(200).send(charactersTotal);
    }
  } catch (err) {
    console.log("entré al catch :(", err);
  }
});

router.get("/api_videogames", async (req, res) => {
  let charactersApi = await getApiInfo();
  res.status(200).send(charactersApi);
});

router.get("/db_videogames", async (req, res) => {
  let charactersDB = await getDbInfo();
  res.status(200).send(charactersDB);
});

router.get("/genres", async (req, res) => {
  try {
    const genresApi = await getApiInfo();
    const genres = genresApi.map((c) => c.genres);
    // console.log([...new Set(genres.flat())]);
    const genresEach = [...new Set(genres.flat())];
    genresEach.forEach((genre) => {
      Genre.findOrCreate({
        where: { name: genre },
      });
    });
    const allGenres = await Genre.findAll();
    res.send(allGenres);
  } catch (err) {
    console.log("entré al catch :(", err);
  }
});

router.post("/videogame", async (req, res) => {
  let {
    name,
    description,
    released,
    rating,
    platforms,
    image,
    createdInDB,
    genres,
  } = req.body;
  let newVideogame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    image,
    createdInDB,
  });
  let genreDb = await Genre.findAll({
    where: { name: genres },
  });
  newVideogame.addGenre(genreDb);
  res.send("Videogame creado con exito");
});

router.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;
  const gamesApi = await getApiInfo();
  const gamesDB = await getDbInfo();
  const findInApi = gamesApi.find((game) => game.id === Number(id));
  const findInDB = gamesDB.find((game) => String(game.id) === id);
  if (findInDB) {
    res.send(findInDB);
  } else if (findInApi) {
    const gameFind = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    let {
      name,
      genres,
      background_image,
      description,
      released,
      rating,
      platforms,
    } = gameFind.data;
    const game = {
      id,
      name,
      genres: genres.map((e) => e.name),
      image: background_image,
      description,
      released,
      rating,
      platforms: platforms.map((e) => e.platform.name),
    };
    res.send(game);
  } else {
    res.status(404).send("No existe el videogame");
  }
});

module.exports = router;
