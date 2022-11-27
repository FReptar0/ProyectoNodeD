const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { personalRouter, userRouter } = require('../modules/controller/routes')

const app = express();

app.set("PORT", process.env.PORT || 3000);
app.set("HOST", process.env.HOST || "localhost");
app.use(cors({ origins: "*" }));
app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.send('Hello World! :)');
});

app.use('/personal', personalRouter);
app.use('/user', userRouter);

module.exports = { app }