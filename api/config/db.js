const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
console.log("estooooooo", process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Definir un esquema y modelo simple
const MenuSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const Menu = mongoose.model('Menu', MenuSchema);

// Crear un documento de prueba
const testMenu = new Menu({ name: 'Pizza', price: 12.99 });
testMenu.save()
  .then(() => console.log('Documento guardado en la base de datos restaurante'))
  .catch((error) => console.error('Error al guardar el documento:', error));