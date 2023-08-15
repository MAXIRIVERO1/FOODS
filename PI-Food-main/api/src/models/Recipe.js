const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stepByStep:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
