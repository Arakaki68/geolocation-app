const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/receber_localizacao', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    res.send('Localização recebida com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors

const app = express();
const port = 3000;

app.use(cors()); // Usar cors
app.use(bodyParser.json());

app.post('/receber_localizacao', (req, res) => {
    const { latitude, longitude } = req.body;

    if (latitude && longitude) {
        console.log(`Recebido: Latitude ${latitude}, Longitude ${longitude}`);
        res.status(200).send('Localização recebida com sucesso!');
    } else {
        res.status(400).send('Dados de localização inválidos.');
    }
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});


