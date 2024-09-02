const express = require('express');
const { getAllCategories } = require('../services/categoryServices'); // Asegúrate de tener la ruta correcta a tu archivo de servicios

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
      
    } catch (error) {
        console.log("entraaaaaaaaaaaaa")
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
});

module.exports = router;