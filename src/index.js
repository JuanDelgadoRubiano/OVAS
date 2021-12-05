const express = require('express');
var cors = require('cors')
const app = express();
require('dotenv').config();

const PORT = process.env.puertoApp || 80;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: "*",
}))

app.use(require('./routes/index'));

app.listen(PORT, () => console.log("server starting on port " + PORT));
module.exports = app;
