const pool = require("../db/pool");

const rooms = {
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT R.id, R.title, R.price,(SELECT CONCAT('[',GROUP_CONCAT(CONCAT('\"', `image`, '\"')),']') FROM room_images WHERE `room_id` = R.`id`) 'roomImages' FROM rooms R;",
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
  findRoomById: (id) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT R.*,(SELECT CONCAT('[',GROUP_CONCAT(CONCAT('\"', `image`, '\"')),']') FROM room_images WHERE room_id = R.id) 'roomImages' FROM rooms R WHERE id=?;",
          id,
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

module.exports = rooms;
