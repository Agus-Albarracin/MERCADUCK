import server from "./src/App";
import connectDB from "./db"
//demo upload data
import { uploadUser, uploadProducts } from "./utils/uploadDB";

//types

const PORT = 3001;

const startServer = async () => {
    try{
        await connectDB(true);
        await uploadProducts();
        await uploadUser();
        server.listen(PORT, () => {
            console.log(`El server se inició en el puerto ${PORT}`)
           })

    }catch(error){
        console.error("hubo un problema al iniciar la db", error)
    }
}

startServer();
