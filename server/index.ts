const server = require("./src/App")

//types

const PORT = 3001;

server.listen(PORT, () => {
 console.log(`El server se inició en el puerto ${PORT}`)
})