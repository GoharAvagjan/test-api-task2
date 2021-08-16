const http = require('http');
const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 2021;

app.set('port', PORT);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
router(app);

const server = http.createServer(app);
const uri = process.env.MONGODB_URI;

mongoose.connect(uri || 'mongodb://localhost/task-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    server.listen(PORT);
})
