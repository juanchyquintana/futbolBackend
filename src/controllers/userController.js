import generatedJWT from "../helpers/generatedJWT.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  try {
    const newUser = await User(req.body);
    await newUser.save();

    res.status(201).json({ message: "User successfuly created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to create the User" });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ message: "All Users", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to get the User" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ message: "The User is", user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User Not Found" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userFound = await User.findById(req.params.id);
    if (!userFound) {
      return res.status(404).json({ message: "User Not Found - Incorrect ID" });
    }

    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "User Successfully Modified", userFound });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error to update the user information" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userFound = User.findById(req.params.id);
    if (!userFound) {
      res.status(404).json({ message: "User Not Found - Incorrect ID" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Succesfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting User" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email })
    const validPassword = bcrypt.compareSync(password, userFound.password);

    if (!userFound) {
      res.status(400).json({ message: "Incorrect Email!" });
    }

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect Password!" });
    }

    const token = await generatedJWT(userFound._id, userFound.email);

    res.status(200).json({
      message: "Login Successfully!",
      id: userFound._id,
      email,
      tipoUsuario: userFound.tipoUsuario,
      estado: userFound.estado,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login Error! Wrong Information" });
  }
};

export { getUsers, createUser, getUserById, updateUser, deleteUser, logIn };
