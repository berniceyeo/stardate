"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Update extends Model {
    static associate(models) {
      this.belongsTo(models.alert, { foreignKey: "alertId" });
    }
  }

  Update.init(
    {
      // Model attributes are defined here
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      alert_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "alert",
          key: "id",
        },
      },
      status_update: {
        type: DataTypes.STRING,
      },
      next_steps: {
        type: DataTypes.STRING,
      },
      risks: {
        type: DataTypes.STRING,
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
      modelName: "update",
      underscored: true,
    }
  );

  return Update;
};
