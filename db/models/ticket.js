"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      this.belongsTo(models.alert, { foreignKey: "alertId" });
    }
  }

  Ticket.init(
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
      assigned_to: {
        type: DataTypes.STRING,
      },
      jira_id: {
        type: DataTypes.STRING,
      },
      is_jira: {
        type: DataTypes.BOOLEAN,
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      severity: {
        type: DataTypes.STRING,
      },
      closed_at: {
        type: DataTypes.DATE,
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
      modelName: "ticket",
      underscored: true,
    }
  );

  return Ticket;
};
