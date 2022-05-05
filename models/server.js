// package ocupado
// cors: https://www.npmjs.com/package/cors
// permite proteger el servidor de manera superficial
// comando use es un middleware


const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();


        //Rutas de mi app
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json());
        
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }



}



module.exports = Server;