const { DataTypes } = require('sequelize');
const sequelize = require('../db');

  const Entrenador = sequelize.define('entrenador', {
    id_entrenador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    numero_documento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
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
  