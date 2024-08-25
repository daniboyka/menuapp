const express = require("express");
require('dotenv').config({ path: '../.env' });


const app = express();
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
    res.send('el servidor esta funcionoando anda')
  });

app.listen(PORT, () => {
  console.log(`estoy ejecutando en http://localhost:${PORT}`);
});