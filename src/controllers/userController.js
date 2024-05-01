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
    const userFound = await User.findOne({ email });
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

const confirmAccount = async (req, res) => {
  const { token } = req.params;
  const confirmUser = await Usuario.findOne({ token });

  if (!confirmUser) {
    res.status(403).json({ message: "Token not Valid" });
  }

  try {
    // TO DO: Tengo que agregarle estos campos en la BD
    confirmUser.confirmado = true;
    confirmUser.token = "";
    await confirmUser.save();

    res.status(200).json({ message: "User Successfully Confirm" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error to Confirm the Account" });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const userFound = User.findOne({ email });

  if (!userFound) {
    res.status(404).json({ message: "Usuario Not Found" });
  }

  try {
    userFound.token = generatedJWT();
    await userFound.save();

    // TO DO: Crear la función para mandar el mail de confirmación de cuenta
    sendEmailForgorPassword({
      email: userFound.email,
      nombre: userFound.nombre,
      token: userFound.token,
    });

    res.json({ message: "We send a email with the next steps!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error!" });
  }
};

const checkToken = async (req, res) => {
  const { token } = req.params;
  const validToken = await User.findOne({ token });

  if (validToken) {
    res.json({ msg: "Valid Token. The User was found" });
  } else {
    return res.status(404).json({ message: "Token Not Valid" });
  }
};

const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({ token });

  if (user) {
    user.password = password;
    user.token = "";

    try {
      await user.save();
      res.status(200).json({ message: "Password Successfully Modified" });
    } catch (error) {
      console.log(error);
    }
  } else {
    return res.status(500).json({ message: "Error to change the password!" });
  }
};

export {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  logIn,
  confirmAccount,
  forgotPassword,
  checkToken,
  newPassword,
};
