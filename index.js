const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l'intégration des services cloud!');
});

// Endpoint pour vérifier la connexion aux services
app.get('/api/services', (req, res) => {
  res.json(config.connecteurs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});