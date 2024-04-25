import Match from "../models/Match.js";

const getMatchs = async (req, res) => {
  try {
    const match = await Match.find();
    res.status(200).json(match);
  } catch (error) {
    console.log(error);
    res.send(500).json({ message: "Error to get the Matchs" });
  }
};

const createMatch = async (req, res) => {
  try {
    const newMatch = await Match(req.body);
    await newMatch.save();

    res.status(200).json({ message: "Team Successfuly Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to created the Match" });
  }
};

const getMatchsById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    res.status(200).json({ message: "The Match is", match });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Match Not Found" });
  }
};

const updateMatch = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res
        .status(404)
        .json({ message: "Match Not Found - Incorrect ID" });
    }

    await Match.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Match Successfully Modified", match });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to update the Match Information" });
  }
};

const deleteMatch = async (req, res) => {
  try {
    const match = Match.findById(req.params.id);
    if (!match) {
      res.status(404).json({ message: "Match Not Found - Incorrect ID" });
    }

    await Match.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Match Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting Match" });
  }
};

export { getMatchs, createMatch, getMatchsById, updateMatch, deleteMatch };
