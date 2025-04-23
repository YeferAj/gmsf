module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('entrenadores', 'email', 'correo_electronico');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('entrenadores', 'correo_electronico', 'email');
  }
};