const express = require("express");
require('./config/db'); 
require('dotenv').config({ path: '../.env' });

const categoryRoutes = require('./routes/categoryRouters'); // Importa las rutas de categorías

const app = express();
const PORT = process.env.PORT;

// Middleware para rutas
app.use(express.json()); // Asegúrate de poder manejar JSON si es necesario

// Rutas
app.use('/api', categoryRoutes); //

app.get("/api", (req, res) => {
    res.send('el servidor esta funcionoando anda')
  });

app.listen(PORT, () => {
  console.log(`estoy ejecutando en http://localhost:${PORT}`);
});