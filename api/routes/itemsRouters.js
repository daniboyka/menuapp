const express = require('express');
const { createItem, getAllItems } = require('../services/itemsServices'); // Ajusta la ruta según tu estructura

const router = express.Router();

router.get('/items', async (req, res) =>{    
    try {
        const items = await getAllItems()
        res.status(201).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los platos" }); 
    }
})

// Endpoint para crear un nuevo ítem
router.post('/items', async (req, res) => {
    try {
        const newItem = await createItem(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;