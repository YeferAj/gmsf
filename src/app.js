const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const rolRoutes = require('./routes/rolRoutes');
const entrenadorRoutes = require('./routes/entrenadorRoutes');
const servicioRoutes = require('./routes/servicioRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/roles', rolRoutes);
app.use('/api/entrenadores', entrenadorRoutes);
app.use('/api/servicios', servicioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Gestión de Gimnasio' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Sincronizar base de datos y arrancar el servidor
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = app;