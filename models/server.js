const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server
{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;

        // Servidor de sockets
        this.server = http.createServer(this.app);

        // Configuración de socket io server
        this.io = socketio(this.server, {/* Configuraciones */ });
    }

    middleware()
    {
        //Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        //CORS
        this.app.use(cors);
    }

    consfigSockets()
    {
        new Sockets(this.io);
    }

    execute()
    {
        //Init middleware
        this.middleware();

        //Init sockets
        this.consfigSockets();

        //Puerto en el que corre
        this.server.listen(this.port, () =>
        {
            console.log("Server corriendo en puerto:", this.port);
        });
    }
}

module.exports = Server;