const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const calculationsRoutes = require('./routes/calculations');

const config = require('./config');
const Calculator = require('./core/Calculator');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.calculator = new Calculator();
    next();
});

app.use('/calculations', calculationsRoutes);

app.get('/', (_, res) => res.json({ success: true, message: 'Hello world!' }));

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));