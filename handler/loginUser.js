const db = require("../db/models/index");
const { user } = db;

module.exports.handler = async (event, context, callback) => {
  try {
    const { email, password } = JSON.parse(event.body);
    console.log(email);
    console.log(password);

    const userDB = await user.findOne({
      where: {
        email: email,
      },
    });

    console.log(userDB.password);

    if (!userDB) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found" }),
      };
    }

    if (userDB.password != password) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Incorrect password" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Login successful", user }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
