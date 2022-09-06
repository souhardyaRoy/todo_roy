const express = require('express');
const mongoose = require('mongoose');
 require('dotenv').config();
const todoRoutes = require('./route_controller/todo_rc');

const app = express();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

app.get('/', (req, res) => res.json({ 'message': 'server is running' }));
app.use('/todo', todoRoutes);

const DB_URI = process.env.DB_URI;
mongoose.Promise = global.Promise;

const _option = {
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true,
};

mongoose.connect(DATABASE_URL, _option).then(()=> console.log(`DB connected`)).catch(err=> {
    console.error(err);
    
    process.exit(1);
});
