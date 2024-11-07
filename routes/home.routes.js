const express = require('express');
const router = require('express').Router();
const homeController = require('../controllers/home.controller');


// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
// router.get("/", homeController.getHome);

router.get('/', homeController.renderHomePage);

// Ruta para manejar el formulario de búsqueda y redirigir a la página de detalles
router.post('/film', (req, res) => {
    const title = req.body.title;
    res.redirect(`/film/${title}`);
});


module.exports = router;