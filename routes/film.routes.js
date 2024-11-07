const express = require('express');
const router = express.Router();
const filmController = require('../controllers/film.controller');

// Ruta para mostrar los detalles de la película (GET /film/:title)
router.get('/:title', filmController.getFilmDetails);

// Ruta para procesar el formulario de búsqueda (POST /film)
router.post('/', (req, res) => {
    const { title } = req.body;
    // Redirige a la ruta GET /film/:title
    res.redirect(`/film/${encodeURIComponent(title)}`); // se utiliza para codificar title en un formato seguro para url
}); // y encodeURIComponent convierte caracteres en una forma que pueda incluirse en la URL (un espacio se codifica como %20)

module.exports = router;

