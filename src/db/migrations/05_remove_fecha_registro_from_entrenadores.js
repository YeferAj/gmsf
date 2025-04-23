module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('entrenadores', 'fecha_registro');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('entrenadores', 'fecha_registro', {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_DATE')
    });
  }
};