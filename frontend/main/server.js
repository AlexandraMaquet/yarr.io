// Run this with ts-node (https://github.com/TypeStrong/ts-node)

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

app.get('/', (req, res) => res.send("Hello World"))

const server = http.Server(app);
server.listen(3000);

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log("New client has connected with id:", socket.id);
    socket.emit('hello', {
        greeting: 'hello Paul'
    });

});