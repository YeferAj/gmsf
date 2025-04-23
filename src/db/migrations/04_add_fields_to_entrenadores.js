module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('entrenadores', 'email', {
      type: Sequelize.STRING(100),
      allowNull: true, // Initially set to true to allow existing records
    });
    
    await queryInterface.addColumn('entrenadores', 'telefono', {
      type: Sequelize.STRING(20),
      allowNull: true, // Initially set to true to allow existing records
    });
    
    await queryInterface.addColumn('entrenadores', 'numero_documento', {
      type: Sequelize.STRING(20),
      allowNull: true, // Initially set to true to allow existing records
    });

    // After adding columns, you can add constraints if needed
    // await queryInterface.addConstraint('entrenadores', {
    //   fields: ['email'],
    //   type: 'unique',
    //   name: 'unique_email_constraint'
    // });
    
    // await queryInterface.addConstraint('entrenadores', {
    //   fields: ['numero_documento'],
    //   type: 'unique',
    //   name: 'unique_documento_constraint'
    // });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('entrenadores', 'email');
    await queryInterface.removeColumn('entrenadores', 'telefono');
    await queryInterface.removeColumn('entrenadores', 'numero_documento');
  }
};