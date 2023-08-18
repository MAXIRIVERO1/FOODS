const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.ENUM("vegetarian","gluten free","dairy free","lacto ovo vegetarian","vegan","paleolithic","primal","whole 30","pescatarian","ketogenic","fodmap friendly"),
      allowNull: false,
    },
  }, {timestamps: false});
};

// 
