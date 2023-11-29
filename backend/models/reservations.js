const pool = require("../db/pool");

const reservations = {
  findAllReservations: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT reservations.*, users.name AS user_name FROM reservations LEFT JOIN users on reservations.user_id=users.id;",
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
  findByReservation: (reservation) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        const selectQuery =
          "SELECT * FROM reservations WHERE room_id LIKE ? AND start_date LIKE ? AND end_date LIKE ?;";
        connection.query(
          selectQuery,
          [reservation.room_id, reservation.start_date, reservation.end_date],
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
  findReservationsByUserId: (userId) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT * FROM reservations WHERE user_id LIKE ?;",
          userId,
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
  addReservation: (reservation) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "INSERT INTO reservations SET ?;",
          reservation,
          (err, result) => {
            connection.release();
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    }),
};

module.exports = reservations;
