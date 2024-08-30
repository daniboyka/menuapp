const express = require("express");
require('./config/db'); 
require('dotenv').config({ path: '../.env' });

// const Category = require('./config/schema/category'); 

const app = express();
const PORT = process.env.PORT;

// Crear un documento de ejemplo
// const pizzaCategory = new Category({
//   name: 'Pizzas',
//   items: [
//       { name: 'Margarita', description: 'Pizza clásica con queso y tomate', price: 10.99 },
//       { name: 'Pepperoni', description: 'Pizza con pepperoni y queso extra', price: 12.99 },
//   ]
// });

// pizzaCategory.save()
//   .then(() => console.log('Categoría guardada en la base de datos'))
//   .catch((error) => console.error('Error al guardar la categoría:', error));


app.get("/api", (req, res) => {
    res.send('el servidor esta funcionoando anda')
  });

app.listen(PORT, () => {
  console.log(`estoy ejecutando en http://localhost:${PORT}`);
});