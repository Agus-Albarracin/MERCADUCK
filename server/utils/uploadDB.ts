import users from "../../users.json";
import products from "../../products.json";
import userModel from "../src/models/user.model";
import productModel from "../src/models/product.model";

export const uploadUser = async () => {
    try {
         await userModel.insertMany(users);
        console.log("Users were successfully loaded into the database");
    } catch (error) {
        console.error("Error occurred while loading users into the database:", error);
    }
}

export const uploadProducts = async () => {
    try {
        await productModel.insertMany(products);
        console.log("Products were successfully loaded into the database");
    } catch (error) {
        console.error("Error occurred while loading products into the database:", error);
    }
}