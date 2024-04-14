import mongoose from "mongoose";
import uuidv4 from 'uuid';

const userModel = new mongoose.Schema(
  { 
    id: {
      type: String,
      default: uuidv4,
      require: true,
      unique: true,
    },
  // GOOGLE DATA TO FORMS

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    googleId:{
    type: String,
    require: true,
    unique: true,
    },
    
    name: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },

// FORMS PAGE DATA

    lastname:{
      type: String,
      requiered: true,
      trim: true,
    },

// PROFILE FORM TO BUY

    adress: {
      type: String,
      required: false,
    },

    state: {
      type: String,
      required: false,
    },

    locality: {
      type: String,
      required: false,
    },

    codigoPostal: {
      type: Number,
      required: false,
    },

    dni: {
      type: Number,
      required: false,
    },

    phoneNumer: {
      type: String,
      required: false,
    },

    gender: {
      type: String,
      required: false,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userModel);
