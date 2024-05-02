import { check } from "express-validator";
import resultValidation from "../resultValidation.js";

const newValidator = [
    check('titulo')
        .notEmpty()
        .withMessage('El Título es requerido')
        .trim()
        .isLength({ min: 5 })
        .withMessage('El título debe tener al menos 5 caracteres'),
    check('subtitulo')
        .notEmpty()
        .withMessage('El subtitulo es requerido')
        .trim(),
    check('imagen')
        .notEmpty()
        .withMessage('La URL o la Imagen es requerida'),
    check('cuerpo')
        .notEmpty()
        .withMessage('El Cuerpo de la noticia es requerido')
        .isLength({ min: 100 })
        .withMessage('El cuerpo de la noticia debe tener al menos 100 caracteres'),
    check('fechaPublicacion')
        .isISO8601()
        .withMessage('La fecha de publicación debe ser válida (ISO 8601 format)')
        .toDate(),
    check('autor')
        .notEmpty()
        .withMessage('El autor es requerido')
        .trim(),
    check('categoria')
        .notEmpty()
        .withMessage('La categoria es requerida')
        .isIn(['fichajes', 'lesiones', 'partidos', 'otros', 'noticia'])
        .withMessage('La categoría debe ser una de: fichajes, lesiones, partidos, otros, noticia'),
    (req, res, next) => {
        resultValidation(req, res, next)
    }
]

export default newValidator