const express = require("express");
const {
  getAllCategories,
  createCategory,
  findCategoryById,
} = require("../services/categoryServices"); // Asegúrate de tener la ruta correcta a tu archivo de servicios

const router = express.Router();

router.get("/categories", async (req, res) => { 
  try { 
    const categories = await getAllCategories();
    res.status(201).json(categories);
  } catch (error) {  
    res.status(500).json({ message: "Error al obtener las categorías"});
  }
});
router.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await findCategoryById(id);
    if (!categories) {
      res.status(400).json({
        message: `La categoria con id ${id} no existe`,
      });
    } else {
      res.status(200).json(categories);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al obtener la categoría con id:${id}` });
  }
});


// Endpoint para crear una nueva categoría
router.post("/categorie", async (req, res) => {
  try {
    const newCategory = await createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
