const db = require("../db/models/index");
const { alert } = db;

module.exports.handler = async (event, context, callback) => {
  try {
    const getAlert = await alert.findOne({
      where: {
        id: event.pathParameters.id,
      },
    });

    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getAlert),
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
