import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    miniDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // Esto es para relacionar el producto con el usuario que lo creó, todavía no tenemos el AUTH
    // pero lo dejamos para cuando este listo.
    
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productModel);
