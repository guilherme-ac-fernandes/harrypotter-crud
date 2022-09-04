module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    character: DataTypes.STRING,
    house: DataTypes.STRING,
  });

  return Character;
};