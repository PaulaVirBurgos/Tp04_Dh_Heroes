const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    return res.sendFile(path.join(__dirname, 'views', 'Index.html'));
});

app.get('/babbage', (req, res) => {

    return res.sendFile(path.join(__dirname, 'views', 'babbage.html'))
});

app.listen(3030, () => {

    console.log(`servidor corriendo en el puerto http://localhost:${port}`);
})