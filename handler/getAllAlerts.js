const db = require("../db/models/index");
const { alert } = db;

module.exports.handler = async (event, context, callback) => {
  try {
    const allAlerts = await alert.findAll();
    console.log(allAlerts);
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allAlerts),
    };

    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
