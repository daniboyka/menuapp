const express = require("express");
const connectDB = require('./config/db'); 
const cors = require('cors');
require('dotenv').config({ path: '../.env' });


const categoryRoutes = require('./routes/categoryRouters'); // Importa las rutas de categorías
const itemsRoutes = require('./routes/itemsRouters'); // Importa las rutas de platos

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
// Middleware para rutas
app.use(express.json()); // Asegúrate de poder manejar JSON si es necesario
app.use(cors());

// Rutas
app.use('/api', categoryRoutes);
app.use('/api', itemsRoutes);

app.get("/api", (req, res) => {
    res.send('el servidor esta funcionoando anda')
  });








 



// Habilitar CORS para todas las solicitudes


// Opcional: Si deseas permitir solo ciertas URLs
// app.use(cors({ origin: 'http://localhost:3000' }));








app.listen(PORT, () => {
  console.log(`estoy ejecutando en http://localhost:${PORT}`);
});