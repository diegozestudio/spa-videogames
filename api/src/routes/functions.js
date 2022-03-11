require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getApiInfo = async () => {
  try {
    let i = 1;
    let allGames = [];
    while (i <= 5) {
      let currentUrl = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      let apiInfo = currentUrl.data.results.map((e) => {
        return {
          id: e.id,
          name: e.name,
          image: e.background_image,
          genres: e.genres.map((g) => g.name),
          platforms: e.platforms.map((p) => p.platform.name),
          rating: e.rating,
          released: e.released,
        };
      });
      allGames = [...allGames, ...apiInfo];
      i++;
    }
    return allGames;
  } catch (err) {
    console.log("entré al catch :(", err);
  }
};

const getDbInfo = async () => {
  const dbInfo = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const dbMaped = dbInfo.map((v) => {
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
  });
  return dbMaped;
};

const getAllGames = async () => {
  try {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    // const infoTotal = dbInfo.concat(apiInfo);
    const infoTotal = [...dbInfo, ...apiInfo];
    // console.log(infoTotal);
    // console.log(infoTotal.length);
    return infoTotal;
  } catch (err) {
    console.log("entré al catch :(", err);
  }
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllGames,
};
