const { Sequelize } = require('sequelize'); // ¡Falta esta línea crucial!

const sequelize = new Sequelize(
  process.env.DB_NAME || 'gmsf_p6s0',
  process.env.DB_USER || 'gym_admin',
  process.env.DB_PASSWORD || 'jowwFz1UIoscimOnuY9X8evY7IYLXhXj',
  {
    host: process.env.DB_HOST || 'dpg-d03msppr0fns73ck5tag-a',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

// Verificación de conexión (opcional pero recomendado)
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a PostgreSQL establecida'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;