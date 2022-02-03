const express = require('express');
var cors = require('cors')
const app = express();
require('dotenv').config();
var path = require('path');
var public = path.join(__dirname, 'public');

const PORT = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: "*",
}))

app.use(require('./routes/index'));

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(PORT, () => console.log("server starting on port " + PORT));
module.exports = app;
