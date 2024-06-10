const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/api');

// Habilitar CORS
app.use(cors());
// Usar las rutas de la API
app.use('/api', apiRoutes);

// Servir archivos estáticos de la aplicación Angular
/*app.use(express.static(path.join(__dirname, '../angular/dist/weather-conditions-app')));

// Controlador "catchall": para cualquier solicitud que no coincida con las anteriores, devolver el index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../angular/dist/weather-conditions-app/index.html'));
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
