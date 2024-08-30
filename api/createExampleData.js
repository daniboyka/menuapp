const mongoose = require('mongoose');
require('./config/db'); // Conecta a la base de datos
const Category = require('./config/schema/category'); // Importa el modelo

// Crear una categoría de ejemplo
const pizzaCategory = new Category({
    name: 'Pizzas',
    items: [
        { name: 'Margarita', description: 'Pizza clásica con queso y tomate', price: 10.99 },
        { name: 'Pepperoni', description: 'Pizza con pepperoni y queso extra', price: 12.99 },
    ]
});

pizzaCategory.save()
    .then(() => {
        console.log('Categoría guardada en la base de datos');
        mongoose.connection.close(); // Cierra la conexión cuando termine
    })
    .catch((error) => {
        console.error('Error al guardar la categoría:', error);
        mongoose.connection.close();
    });