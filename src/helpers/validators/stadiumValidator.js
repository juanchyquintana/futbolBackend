import { check } from "express-validator";
import resultValidation from "../resultValidation.js";

const stadiumValidator = [
  check("nombre").notEmpty().withMessage("El Nombre es requerido").trim(),
  check("capacidad")
    .isInt({ min: 1 })
    .withMessage("La Capacidad debe ser un número entero mayor que cero"),
  check("ubicacionEstadio")
    .isArray({ min: 1 })
    .withMessage(
      "La ubicacion del estadio debe ser un array con al menos un elemento"
    )
    .custom((value) => {
      const isValid = value.every((coords) => coords.lat && coords.lng);
      if (!isValid) {
        throw new Error(
          "Cada ubicación debe tener latitud (lat) y longitud (lng)"
        );
      }
      return true;
    }),
  check("historia").notEmpty().withMessage("La historia es requerida"),
  check("pais").notEmpty().withMessage("El pais es un campo requerido"),
  check("dimensiones").notEmpty().withMessage("Las dimensiones son requeridas"),
  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default stadiumValidator;
