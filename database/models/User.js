module.exports = (sequelize, DataTypes) => {
  const alias = "User";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rol_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      }
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      isUnique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "genders",
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING(255),
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  Users.associate = (models) => {
    Users.belongsTo(models.Genders, { foreignKey: "gender_id", as: "gender" });
  };

  return Users;
};
