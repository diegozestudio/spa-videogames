/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);

const videogame = {
  name: "Maincra",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.n porttitor sit amet est ac varius.",
  released: "2022-28-02",
  rating: 4.5,
  platforms: ["Xbox One", "PlayStation 4"],
  image:
    "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
  genres: ["RPG", "Platformer"],
};

describe("Videogame routes", () => {
  describe("GET Videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200)).timeout(
      40000
    );
  });
});
