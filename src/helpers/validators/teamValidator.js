import { check } from "express-validator";
import resultValidation from "../resultValidation.js";

const teamValidator = [
  check("nombre").notEmpty().withMessage("El Nombre es un dato obligatorio."),
  check("apodo").notEmpty().withMessage("El Nombre es un dato obligatorio."),
  check("fundacion")
    .notEmpty()
    .withMessage("La Fundacion es un dato obligatorio."),
  check("estadio")
    .notEmpty()
    .withMessage("La Fundacion es un dato obligatorio."),
  check("capacidadEstadio")
    .notEmpty()
    .withMessage("La capacidad del estadio es un dato obligatorio.")
    .isInt({ min: 1 })
    .withMessage(
      "La capacidad del estadio debe ser un número entero mayor que cero."
    ),
  check("historia")
    .notEmpty()
    .withMessage("Debes escribir una historia del Equipo"),
  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default teamValidator;
