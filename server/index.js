const express = require("express");
const app = express();
const cors = require("cors");
const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());

app.get("/", (req, res) => {
    res.json("hello server");
});

/*io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('update-document', (data) => {
        
        socket.broadcast.emit('updated-document', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});*/


app.listen(5000, () => {
    console.log("server is running");
});