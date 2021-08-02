const http = require('http');
const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();


app.set('port', 2021);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
router(app);

const server = http.createServer(app);

mongoose.connect('mongodb://localhost/task-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    server.listen(2021);
})


