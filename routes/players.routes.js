const Router = require("express");

const {
  savePlayers,
  getAllPlayers,
  generateRandomWord,
  updatePlayersScore
} = require("../controllers/players.controlles");

const playersRouters = Router();

playersRouters.post("/create", savePlayers);

playersRouters.get("/all/:page", getAllPlayers);

playersRouters.get("/playzone",generateRandomWord);

playersRouters.post("/updateScore",updatePlayersScore);

module.exports = playersRouters;
