module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("alerts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      manager_email: {
        type: Sequelize.STRING,
      },
      default_staff: {
        type: Sequelize.JSONB,
      },
      extra_staff: {
        type: Sequelize.JSONB,
      },
      description: {
        type: Sequelize.STRING,
      },
      app_code: {
        type: Sequelize.STRING,
      },
      details: {
        type: Sequelize.STRING,
      },
      business_impact: {
        type: Sequelize.STRING,
      },
      close_criteria: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      closure_note: {
        type: Sequelize.STRING,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("updates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      alert_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "alerts",
          key: "id",
        },
      },
      status_update: {
        type: Sequelize.STRING,
      },
      next_steps: {
        type: Sequelize.STRING,
      },
      risks: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      alert_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "alerts",
          key: "id",
        },
      },
      assigned_to: {
        type: Sequelize.STRING,
      },
      jira_id: {
        type: Sequelize.STRING,
      },
      is_jira: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      severity: {
        type: Sequelize.STRING,
      },
      closed_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("audits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      alert_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "alerts",
          key: "id",
        },
      },
      old_data: {
        type: Sequelize.JSONB,
      },
      new_data: {
        type: Sequelize.JSONB,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("audits");
    await queryInterface.dropTable("tickets");
    await queryInterface.dropTable("updates");
    await queryInterface.dropTable("alerts");
    await queryInterface.dropTable("users");
  },
};
