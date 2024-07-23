const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;
const googleApiKey = 'YOUR_GOOGLE_API_KEY'; // Substitua pela sua chave de API do Google

app.use(bodyParser.json());

app.post('/receber_localizacao', async (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Recebido: Latitude ${latitude}, Longitude ${longitude}`);

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`);
        const address = response.data.results[0].formatted_address;
        console.log(`Endereço aproximado: ${address}`);
        res.send(`Localização recebida com sucesso! Endereço: ${address}`);
    } catch (error) {
        console.error('Erro ao obter o endereço:', error);
        res.status(500).send('Erro ao obter o endereço');
    }
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
