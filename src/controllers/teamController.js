import Team from "../models/Team.js";

const createTeam = async (req, res) => {
  try {
    const newTeam = await Team(req.body);
    await newTeam.save();

    res.status(201).json({ message: "Team Successfuly Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to created the Team" });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json({ message: "All Teams", teams });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to get the Teams" });
  }
};

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.status(200).json({ message: "The Team is", team });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Team Not Found" });
  }
};

const updateTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team Not Found - Incorrect ID" });
    }

    await Team.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Team Successfully Modified", team });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to update the Team Information" });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const team = Team.findById(req.params.id);
    if (!team) {
      res.status(404).json({ message: "Team Not Found - Incorrect ID" });
    }

    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Team Successfuly Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting Team" });
  }
};

export { createTeam, getTeams, getTeamById, updateTeam, deleteTeam };
