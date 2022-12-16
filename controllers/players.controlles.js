const Players = require("../models/Players.models");

const savePlayers = async (req, res) => {
  console.log(req.body);
  try {
    const payload = new Players({
      name: req.body.name,
      level: req.body.level,
      score: req.body.score,
    });
    console.log(payload);
    payload.save();
    res.status(200).send({ msg: "successfully created Players" });
  } catch (err) {
    res.status(400).send({ msg: "something went wrong" });
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
    let data = await Players.find().skip(skips).limit(10).sort({score: -1 });
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

module.exports = {
  savePlayers,
  getAllPlayers,
};
