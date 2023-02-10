module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("alerts", [
      {
        id: 1,
        manager_email: "hello@hotmail.com",
        default_staff: JSON.stringify({
          name: "person 1",
          email: "person1@email.com",
        }),
        extra_staff: JSON.stringify({
          name: "person 1",
          email: "person1@email.com",
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("alerts", null, {});
  },
};
