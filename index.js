const express = require('express');
const port = 3000;
const app = express();

require('dotenv').config();

app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets
app.use(express.urlencoded({ extended: true })); // Middlaware viene con express y es para saber como analizar datos cuando es true es para datos complejos que contienen objetos por ejemplo

app.set('view engine', 'pug');
app.set('views', './views');

const homeRoutes = require("./routes/home.routes")
const filmRoutes = require("./routes/film.routes")
// const filmPostRoutes = require("./routes/filmPost.routes.js")


app.use('/home', homeRoutes);
app.use('/film', filmRoutes);
// app.use('/film', filmPostRoutes);

// app.get('/', (req, res) => {
//     res.redirect('/home');
//   });

// const url = `http://www.omdbapi.com/?apikey=${process.env.APIKEY}&t=${title}`

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));