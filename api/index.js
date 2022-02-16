const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/fornecedores');
const config = require('config');

const app = express();
const PORT = config.get('api.port');

app.use(bodyParser.json());

app.use('/api/fornecedores/', router);

app.listen(PORT, () => {
    console.log('API rodando na porta: ' + PORT);
});