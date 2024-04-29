import mongoose from "mongoose";

const newSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    subtitulo: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true
    },
    cuerpo: {
        type: String,
        required: true,
        minLength: 100,
    },
    fechaPublicacion: {
        type: Date,
        required: true,
        default: Date.now()
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        enum: ['fichajes', 'lesiones', 'partidos', 'otros', 'noticia'],
        default: 'noticia',
        required: true
    }
})

const New = mongoose.model('new', newSchema)
export default New;