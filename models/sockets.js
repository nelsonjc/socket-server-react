class Sockets
{
    constructor(io)
    {
        this.io = io;

        this.socketEvents();
    }

    socketEvents()
    {
        //Conexión
        this.io.on('connection', (socket) =>
        {
            //Escuchar el evento
            socket.on('msg-to-server', (data) =>
            {
                console.log(data);
                this.io.emit('msg-from-server', data);
            });
        });
    }
}

module.exports = Sockets;