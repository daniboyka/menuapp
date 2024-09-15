const express = require("express");
const connectDB = require('./api/config/db');
const cors = require('cors');
require('dotenv').config({ path: './.env' });


const categoryRoutes = require('./api/routes/categoryRouters'); // Importa las rutas de categorías
const itemsRoutes = require('./api/routes/itemsRouters'); // Importa las rutas de platos

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
// Middleware para rutas
app.use(express.json()); // Asegúrate de poder manejar JSON si es necesario
app.use(cors()); // agrego esto

// Rutas
app.use('/api', categoryRoutes);
app.use('/api', itemsRoutes);

app.get("/api", (req, res) => {
    res.send('el servidor esta funcionoando anda')
  });

app.listen(PORT, () => {
  console.log(`estoy ejecutando en http://localhost:${PORT}`);
});