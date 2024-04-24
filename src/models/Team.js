import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  apodo: {
    type: String,
    trim: true,
    required: true,
  },
  fundacion: {
    type: Date,
    trim: true,
    required: true,
  },
  estadio: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Stadium',
    type: String,
    trim: true,
    required: true,
  },
  capacidadEstadio: {
    type: Number,
    trim: true,
    required: true,
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
    trim: true,
    required: true,
  },
  jugadoresDestacados: [String],
  titulos: [
    {
      ligas: String,
      cantidad: Number,
    },
    {
      copas: String,
      cantidad: Number,
    },
  ],
  socios: Number,
  rivalidades: [String],
  colores: {
    principal: String,
    secundario: String,
  },
  redesSociales: {
    web: String,
    facebook: String,
    twitter: String,
    instagram: String,
  },
  entrenadorActual: String,
  plantillaActual: [
    {
      nombre: String,
      posicion: String,
      numberoCamiseta: Number,
    },
  ],
  patrocinadores: [String],
  hinchada: Number,
});

const Team = mongoose.model("team", teamSchema);
export default Team;
