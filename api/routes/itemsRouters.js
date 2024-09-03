const express = require('express');
const { createItem } = require('../services/itemsServices'); // Ajusta la ruta según tu estructura

const router = express.Router();

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