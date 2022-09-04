const express = require('express');
const userProduct = require('./routes/products.router');

// ...

const app = express();
app.use(express.json());

app.use('/products', userProduct);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
