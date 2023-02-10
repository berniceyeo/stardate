const db = require("../db/models/index");
const { alert } = db;

module.exports.handler = async (event, context, callback) => {
  try {
    console.log(event.body);
    const {
      email,
      defaultStaff,
      extraStaff,
      description,
      appCode,
      details,
      businessImpact,
      closeCriteria,
      status,
      color,
    } = JSON.parse(event.body);

    const newAlert = await alert.create({
      manager_email: email,
      default_staff: defaultStaff,
      extra_staff: extraStaff,
      description,
      app_code: appCode,
      details,
      business_impact: businessImpact,
      close_criteria: closeCriteria,
      status,
      color,
      closure_note: null,
      deleted_at: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlert),
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
