import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const MONGO_URL = process.env.DB_URL

const connectDB = async (force = false) => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/Mercaduck");
    await mongoose.connect(`${MONGO_URL}`)

    console.log('Se inicio MongoDB correctamente')

    if (force) {
      // Reinicializar la base de datos
      await mongoose.connection.dropDatabase()
      console.log('La base de datos se reinició correctamente')
    }
  } catch (error) {
    console.error('Hubo un error al conectar con la base de datos', error)
    // Exit process with failure
    process.exit(1)
  }
}

export default connectDB
