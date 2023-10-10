const express = require('express');
const usersRouter = require('./routes/users')

class Server{
    constructor(){
        this.app = express();   //instancia de express
        this.port = 3000;       //puerto para el servidor

        //Paths http://localhost:3000/api/v1

        this.basePath = '/api/v1'; //Ruta base
        this.usersPath = `${this.basePath}/users`; //Path para la tabla users

        this.middlewares();//Invocación de los middlewares
        this.routes(); //Invocación de las rutas
    }

    middlewares() {
        this.app.use(express.json()); //para poder interpretar texto en formato json
    }

    routes(){
        this.app.use(this.usersPath, usersRouter);  //EndPoint de Users
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log("Server listening on port " + this.port);
        });
    }
}

module.exports = Server;