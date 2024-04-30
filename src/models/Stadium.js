import mongoose from "mongoose";

const stadiumSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    ubicacionEstadio: [
      {
        lat: {
          type: Number,
          trim: true,
        },
        lng: {
          type: Number,
          trim: true,
        },
      },
    ],
    historia: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    dimensiones: {
        type: String,
        required: true
    }
});

const Stadium = mongoose.model("stadium", stadiumSchema);
export default Stadium;
