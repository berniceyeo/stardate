"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
    static associate(models) {
      this.hasMany(models.ticket);
      this.hasMany(models.update);
      this.hasMany(models.audit);
    }
  }

  Alert.init(
    {
      // Model attributes are defined here
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      manager_email: {
        type: DataTypes.STRING,
      },
      default_staff: {
        type: DataTypes.JSON,
      },
      extra_staff: {
        type: DataTypes.JSON,
      },
      description: {
        type: DataTypes.STRING,
      },
      details: {
        type: DataTypes.STRING,
      },
      business_impact: {
        type: DataTypes.STRING,
      },
      close_criteria: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      color: {
        type: DataTypes.STRING,
      },
      closure_note: {
        type: DataTypes.STRING,
      },
      deleted_at: {
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
      modelName: "alert",
      underscored: true,
    }
  );

  return Alert;
};
