const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'gmsf_p6s0', // Nombre EXACTO de tu DB en Render
  'gym_admin',  // Usuario EXACTO
  'jowwFz1UIoscimOnuY9X8evY7IYLXhXj', // Contraseña EXACTA
  {
    host: 'dpg-d03msppr0fns73ck5tag-a', // Host EXACTO
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { // Obligatorio para Render
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

// Verificación de conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión exitosa a gmsf_p6s0'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;