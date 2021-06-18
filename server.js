require("regenerator-runtime/runtime");
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/pins', async (req,res,next) => {
    try {
        const data = await readFile('./public/data/pins.json', 'utf-8')
        res.send(JSON.parse(data));
    } catch (error) {
        next(error);
    }
})

app.get('*', (req,res,next) => {
    try {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    } catch (error) {
        next(error)
    }
})

app.use((err,req,res) => {
    res.status(err.status || 500).send(err.message || "Internal Server Error")
})

app.listen(PORT, () => {
    console.log(`Pin-A-Like is now running on\n
        http://localhost:3000 `)
})

