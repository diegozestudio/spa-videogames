const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("Post Videogame", () => {
      it("Debería devolver un error si no se le pasa ningún parametro", (done) => {
        Videogame.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("Debería crear exitosamente un nuevo juego con todos los parametros", (done) => {
        Videogame.create({
          name: "Probando",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.n porttitor sit amet est ac varius.",
          released: "2022-28-02",
          rating: 4.5,
          platforms: ["Xbox One", "PlayStation 4"],
          image:
            "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
          genres: ["RPG", "Platformer"],
        })
          .then(() => done())
          .catch(() => done(new Error("it should create a new Videogame")));
      });
    });
    describe("description", () => {
      it("Debería devolver un error si no se le pasa una descripción", (done) => {
        Videogame.create({
          name: "Probando",
          description: "",
          released: "2022-28-02",
          rating: 4.5,
          platforms: ["Xbox One", "PlayStation 4"],
          image:
            "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
          genres: ["RPG", "Platformer"],
        })
          .then(() => done())
          .catch(() => done(new Error("It requires a valid name")));
      });
    });
    describe("rating", () => {
      it("Debería devolver un error si no se le pasa un rating", (done) => {
        Videogame.create({
          name: "Probando",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.n porttitor sit amet est ac varius.",
          released: "2022-28-02",
          rating: "",
          platforms: ["Xbox One", "PlayStation 4"],
          image:
            "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
          genres: ["RPG", "Platformer"],
        })
          .then(() => done(new Error("It requires a valid rating")))
          .catch(() => done());
      });
    });
    describe("image", () => {
      it("Debería devolver un error si no se le pasa una imagen", (done) => {
        Videogame.create({
          name: "Probando",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.n porttitor sit amet est ac varius.",
          released: "2022-28-02",
          rating: 4.5,
          platforms: ["Xbox One", "PlayStation 4"],
          image: "",
          genres: ["RPG", "Platformer"],
        })
          .then(() => done())
          .catch(() => done(new Error("It requires a valid image")));
      });
    });
  });
});
