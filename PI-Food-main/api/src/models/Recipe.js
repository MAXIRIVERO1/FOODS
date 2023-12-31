const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      type: DataTypes.FLOAT,
      allowNull: true
    },
    steps:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  },{timestamps: false});
};
