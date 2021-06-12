const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

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
    console.log(`Listening on port ${PORT}`)
})

