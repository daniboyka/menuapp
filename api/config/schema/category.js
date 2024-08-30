const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },  // Nombre de la categoría (pizzas, pastas, etc.)
    image: { type: String }, // URL de la imagen de la categoría
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] 
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;