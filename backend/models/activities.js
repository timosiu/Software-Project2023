const pool = require("../db/pool");

const activities = {
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        // Selects all columns and rows from activities table and joins new column activityImages,
        // which contains all the images of the corresponding activity row and formats them into an array
        connection.query(
          "SELECT A.*,(SELECT CONCAT('[',GROUP_CONCAT(CONCAT('\"', `image`, '\"')),']') FROM activity_images WHERE `activity_id` = A.`id`) 'activityImages' FROM activities A;",
          (err, result) => {
            connection.release();
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        );
      });
    }),
};

module.exports = activities;
