const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String }, // URL de la imagen del ítem
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // Relación con la categoría
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;