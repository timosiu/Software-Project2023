const pool = require("../db/pool");

const services = {
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        // Selects all columns and rows from services table and joins new column serviceImages,
        // which contains all the images of the corresponding service row and formats them into an array
        connection.query(
          "SELECT S.*,(SELECT CONCAT('[',GROUP_CONCAT(CONCAT('\"', `image`, '\"')),']') FROM service_images WHERE `service_id` = S.`id`) 'serviceImages' FROM services S;",
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

module.exports = services;
