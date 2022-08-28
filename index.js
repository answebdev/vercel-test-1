const express = require('express');
const product = require('./api/product');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/product', product);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
