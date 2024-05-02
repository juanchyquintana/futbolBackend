import { check } from "express-validator";
import resultValidation from "../resultValidation.js";

const matchValidator = [
  check("equipoLocal")
    .notEmpty()
    .withMessage("El nombre del equipo local es requerido")
    .trim(),
  check("equipoVisitante")
    .notEmpty()
    .withMessage("El nombre del equipo local es requerido")
    .trim(),
  check("fechaHora")
    .isISO8601()
    .withMessage("La fecha y la hora es requerida")
    .toDate(),
  check("estadio").notEmpty().withMessage("El estadio es requerido").trim(),
  check("arbitro").optional().trim(),
  check("").optional().trim(),
  check("estado")
    .notEmpty()
    .withMessage("El estado es requerido")
    .isIn(["programado", "en-curso", "finalizado", "suspendido"])
    .withMessage(
      "El estado debe ser uno de: programado, en-curso, finalizado, suspendido"
    ),
  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default matchValidator;
