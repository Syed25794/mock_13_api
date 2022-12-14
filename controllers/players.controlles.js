const Players = require("../models/players.models");

const randomWordGenerator = require("random-words");

const savePlayers = async (req, res) => {
  console.log(req.body);
  try {
    const players = await Players.find({ name: req.body.name });
    if (players) {
      let result = await Players.updateOne({ level: req.body.level });
      res.status(200).send({ msg: "successfully updated player level" });
    }
    const payload = new Players({
      name: req.body.name,
      level: req.body.level,
      score: req.body.score,
    });
    console.log(payload);
    payload.save();
    res.status(200).send({ msg: "successfully created Players" });
  } catch (err) {
    res.status(500).send({ msg: "something went wrong" });
  }
};

const generateRandomWord = async (req, res) => {
  try {
    res.status(200).send({ word: randomWordGenerator() });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const getAllPlayers = async (req, res) => {
  let page = null;
  page = req.params.page;
  console.log(page);
  if (page) {
    page = req.body.page;
  }
  let skips = page * 10;
  try {
    let data = await Players.find().skip(skips).limit(10).sort({ score: -1 });
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const updatePlayersScore = async (req, res) => {
  const { score, name, level } = req.body;
  try {
    let data = await Players.find({ name: name }).updateOne({
      score: score,
      level: level,
    });
    res.status(200).send({ msg: "updated" });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

module.exports = {
  savePlayers,
  getAllPlayers,
  generateRandomWord,
  updatePlayersScore,
};
