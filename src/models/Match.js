import mongoose from "mongoose";

const matchSchema = mongoose.Schema({
    equipoLocal: {
        type: String,
        required: true,
        trim: true
    },
    equipoVisitante: {
        type: String,
        required: true,
        trim: true
    },
    fechaHora: {
        type: Date,
        required: true
    },
    estadio: {
        type: String,
        required: true,
        trim: true
    },
    resultado: {
        equipoLocal: {
            type: Number,
            default: 0
        },
        equipoVisitante: {
            type: Number,
            default: 0
        }
    },
    arbitro: String,
    competicion: String,
    estado: {
        type: String,
        enum: ['programado', 'en-curso', 'finalizado', 'suspendido'],
        default: 'programado'
    }
});

const Match = mongoose.model("match", matchSchema);
export default Match;
