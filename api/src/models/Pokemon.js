const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    life: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    img:{
      type: DataTypes.STRING,
      validate: {isUrl: true},
      defaultValue: "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-0.png"
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    
  },  { timestamps: false } );
};

