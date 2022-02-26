require("dotenv").config();
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;
const axios = require("axios");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// [ ] GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal

const getApiInfo = async () => {
  try {
    let i = 1;
    let allGames = [];
    while (i <= 5) {
      let currentUrl = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      let apiInfo = await currentUrl.data.results.map((e) => {
        return {
          id: e.id,
          name: e.name,
          // description: e.description,
        };
      });
      allGames = [...allGames, ...apiInfo];
      i++;
    }
    console.log(allGames);
    console.log(allGames.length);
  } catch (err) {
    console.log("entré al catch :(", err);
  }
};
getApiInfo();

module.exports = router;
