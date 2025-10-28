module.exports = (sequelize, DataTypes) => {
  const alias = "Color";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    color: {
      type: DataTypes.STRING(50),
    },
    code: {
      type: DataTypes.STRING(150),
    },
  };

  const config = {
    tableName: "colors",
    timestamps: false,
  };

  const Color = sequelize.define(alias, cols, config);

  return Color;
};
