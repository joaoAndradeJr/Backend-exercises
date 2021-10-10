const express = require('express');
const bodyParser = require('body-parser');
const plantsControllers = require('../controllers/plants');

const app = express();

app.use(bodyParser.json());

app.get('/plant/:id', plantsControllers.getById);
app.delete('/plant/:id', plantsControllers.remove);
app.put('/plant/:id', plantsControllers.update);
app.post('/plant', plantsControllers.create);
app.get('/plants', plantsControllers.getAll);

app.get('/sunny/:id', plantsControllers.getByNeedsSun);

module.exports = app;
