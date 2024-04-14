import mongoose from "mongoose";
const userModel = new mongoose.Schema(
  { 
    id: { // Insert to model the googleId 
      type: String,
      required: true,
      unique: true,
    },
  // GOOGLE DATA TO FORMS

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    
    name: {
      type: String,
      required: false,
      unique: true,
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
