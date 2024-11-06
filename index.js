const express = require('express');
const port = 3000;
const app = express();

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));