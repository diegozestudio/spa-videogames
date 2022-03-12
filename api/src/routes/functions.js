require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getApiInfo = () => {
  try {
    let i = 1;
    let allGames = [];
    while (i <= 5) {
      console.log("while");
      let currentUrl = axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      let apiInfo = currentUrl.then((res) =>
        res.data.results.map((e) => {
          return {
            id: e.id,
            name: e.name,
            image: e.background_image,
            genres: e.genres.map((g) => g.name),
            platforms: e.platforms.map((p) => p.platform.name),
            rating: e.rating,
            released: e.released,
          };
        })
      );
      i++;
      allGames = [...allGames, apiInfo];
    }
    return Promise.all(allGames).then((r) => r.flat());
  } catch (err) {
    console.log("entré al catch :(", err);
  }
};

const getDbInfo = () => {
  const dbInfo = Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dbInfo.then((r) =>
    r.map((v) => {
      const {
        id,
        name,
        genres,
        image,
        description,
        released,
        rating,
        platforms,
        createdInDB,
      } = v;
      const game = {
        id,
        name,
        genres: genres.map((e) => e.name),
        image,
        description,
        released,
        rating,
        platforms,
        createdInDB,
      };
      return game;
    })
  );
};

const getAllGames = () => {
  try {
    return Promise.all([getDbInfo(), getApiInfo()]).then((r) => r.flat());
  } catch (err) {
    console.log("entré al catch :(", err);
  }
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllGames,
};
