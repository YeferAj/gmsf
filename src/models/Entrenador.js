const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Entrenador = sequelize.define('Entrenador', {
  id_entrenador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'entrenadores',
  timestamps: true
});

module.exports = Entrenador;