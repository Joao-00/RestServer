// package instalados
// express para crear el webserver
// dotenv para crear variables de entorno

// libreria instalada npm install google-auth-library --save

require('dotenv').config();
const Server = require('./models/server');


const server = new Server();



server.listen();