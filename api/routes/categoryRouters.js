const express = require('express');
const { getAllCategories, createCategory } = require('../services/categoryServices'); // Asegúrate de tener la ruta correcta a tu archivo de servicios

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        // res.send("lego acaaaaa")
        const categories = await getAllCategories();
        res.json(categories);
      
    } catch (error) {
        console.log("entraaaaaaaaaaaaa")
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
});

// Endpoint para crear una nueva categoría
router.post('/categorie', async (req, res) => {
    console.log("entra antes del try?")
    try {
        console.log("despues del try")
        const newCategory = await createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.log("entro al errrorr")
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;