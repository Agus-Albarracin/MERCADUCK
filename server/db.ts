import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mercaduck");
    console.log("Se inicio MongoDB correctamente");
  } catch (error) {
    console.error("Hubo un error al conectar con la base de datos", error);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
