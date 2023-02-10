"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Audit extends Model {
    static associate(models) {
      this.belongsTo(models.alert, { foreignKey: "alertId" });
    }
  }

  Audit.init(
    {
      // Model attributes are defined here
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      alertId: {
        type: DataTypes.INTEGER,
        references: {
          model: "alert",
          key: "id",
        },
      },
      old_data: {
        type: DataTypes.JSON,
      },
      new_data: {
        type: DataTypes.JSON,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "audit",
      underscored: true,
    }
  );

  return Audit;
};
