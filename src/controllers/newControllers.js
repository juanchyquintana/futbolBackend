import New from "../models/New.js";

const getNews = async (req, res) => {
  try {
    const findNews = await New.find();
    res.status(200).json({ message: "All News", findNews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to get the News" });
  }
};

const createNew = async (req, res) => {
  try {
    const createNew = await New(req.body);
    await createNew.save();

    res.status(201).json({ message: "New successfuly created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to create the New" });
  }
};

const getNewById = async (req, res) => {
  try {
    const foundNew = await New.findById(req.params.id);
    res.status(200).json({ message: "The New's", foundNew });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "New Not Found" });
  }
};

const updateNew = async (req, res) => {
  try {
    const updateNew = await New.findById(req.params.id);
    if (!updateNew) {
      res.status(404).json({ message: "New Not Found - Incorrect ID" });
    }

    await New.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "New Successfully Modified", updateNew });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to update the New information" });
  }
};

const deleteNew = async (req, res) => {
  try {
    const newFound = New.findById(req.params.id);
    if (!newFound) {
      res.status(404).json({ message: "New Not Found - Incorrect ID" });
    }

    await New.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "New Succesfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting New" });
  }
};

export { getNews, createNew, getNewById, updateNew, deleteNew };
