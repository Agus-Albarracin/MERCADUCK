// import { faker } from '@faker-js/faker';
// import fs from "fs";

// //* Este archivo se guarda porque se utilizó para generar los archivos de prueba en formato JSON, los cuales usaremos para consumir y guardar en la base de datos.
// //* This file is saved to generate demo files in JSON format, which we will use to consume and save data in the database.

// // Interfaz para definir la estructura de un producto
// interface Product {
//   id: number;
//   name: string;
//   mindescription: string;
//   price: string;
//   location: string;
//   description: string;
// }

// // Función para generar un producto simulado
// export const generateProducts = (): Product[] => {
//   // :Pruduct[] espera que la función devuelva un array que cumple con la interface de Product.

//   const allProducts: Product[] = []; 
// //: Especifica el tipo de dato que debe contener. / Specifies the data type that the array should contain.
// // En este caso, objetos de tipo Product. / In this case, objects of type Product.
// // Se declara un array vacío. / An empty array is declared.

//   for (let id = 1; id <= 50; id++) {
//     const product: Product = {
//       id,
//       name: faker.commerce.product(),
//       mindescription: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       location: faker.commerce.department(),
//       description: faker.commerce.productDescription()
//     };
//     allProducts.push(product);
//   }
//   return allProducts;
// }

// const dataProductsGenerate = generateProducts();

// try {
//   fs.writeFileSync("data.json", JSON.stringify(dataProductsGenerate, null, 2));
//   //Permite la creación de un archivo asincronico / Create async file, this case, the object product.
//   console.log("Archivo JSON generado con éxito.");
// } catch (error) {
//   console.error("Error al escribir el archivo JSON:", error);
// }


