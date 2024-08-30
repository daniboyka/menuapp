const mongoose = require('mongoose');
const Category = require('./schema/category');
const Item = require('./schema/items');
require('dotenv').config({ path: './.env' });


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

async function createData() {
    try {
        const pizzaCategory = new Category({ name: 'Pizzas', image: 'url-de-imagen-pizzas' });
        await pizzaCategory.save();

        const margherita = new Item({
            name: 'Pizza Margherita',
            description: 'Pizza clásica con tomate, mozzarella y albahaca.',
            price: 8.99,
            image: 'url-de-imagen-margherita',
            category: pizzaCategory._id
        });

        const pepperoni = new Item({
            name: 'Pizza Pepperoni',
            description: 'Pizza con pepperoni y mozzarella.',
            price: 9.99,
            image: 'url-de-imagen-pepperoni',
            category: pizzaCategory._id
        });

        await margherita.save();
        await pepperoni.save();

        // Asociar los ítems con la categoría
        pizzaCategory.items.push(margherita._id, pepperoni._id);
        await pizzaCategory.save();

        console.log('Datos de ejemplo guardados en la base de datos');
    } catch (error) {
        console.error('Error al crear los datos de ejemplo:', error);
    } finally {
        mongoose.connection.close();
    }
}

createData();