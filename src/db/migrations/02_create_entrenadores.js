module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entrenadores', {
      id_entrenador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      especialidad: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      correo_electronico: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      telefono: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      numero_documento: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      estado: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('entrenadores');
  }
};