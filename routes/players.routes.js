const Router = require("express");

const {
  savePlayers,
  getAllPlayers,
} = require("../controllers/players.controlles");

const playersRouters = Router();

playersRouters.post("/create", savePlayers);

playersRouters.get("/all/:page", getAllPlayers);

module.exports = playersRouters;
