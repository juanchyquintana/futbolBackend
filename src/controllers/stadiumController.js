import Stadium from "../models/Stadium.js";

const getStadiums = async (req, res) => {
  try {
    const stadiums = await Stadium.find();
    res.status(200).json({ message: "All Stadiums", stadiums });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to get the Stadiums" });
  }
};

const createStadium = async (req, res) => {
  try {
    const createStadium = await Stadium(req.body);
    await createStadium.save();

    res.status(201).json({ message: "Stadium successfuly created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to create the Stadiums" });
  }
};

const getStadiumsById = async (req, res) => {
  try {
    const foundStadium = await Stadium.findById(req.params.id);
    res.status(200).json({ message: "The Stadium's", foundStadium });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Stadium Not Found" });
  }
};

const updateStadium = async (req, res) => {
  try {
    const updateStadium = await Stadium.findById(req.params.id);
    if (!updateStadium) {
      res.status(404).json({ message: "New Not Found - Incorrect ID" });
    }

    await Stadium.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .json({ message: "Stadium Successfully Modified", updateStadium });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error to update the Stadium information" });
  }
};

const deleteStadium = async (req, res) => {
    try {
        const stadiumFound = await Stadium.findById(req.params.id)
        if(!stadiumFound) {
            res.status(404).json({ message: "Stadium Not Found - Incorrect ID" })
        }

        await Stadium.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Stadium Succesfully Deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error Deleting Stadium" })
    }
};

export {
  getStadiums,
  createStadium,
  getStadiumsById,
  updateStadium,
  deleteStadium,
};
