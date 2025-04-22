const sequelize = new Sequelize(
  process.env.DB_NAME || 'gmsf_p6s0', // Usa el nombre correcto
  process.env.DB_USER || 'gym_admin',
  process.env.DB_PASSWORD || 'jowwFz1UIoscimOnuY9X8evY7IYLXhXj',
  {
    host: process.env.DB_HOST || 'dpg-d03msppr0fns73ck5tag-a',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { // Obligatorio para Render
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);