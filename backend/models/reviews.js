const pool = require("../db/pool");

const reviews = {
  findReviewsByRoomId: (room_id) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        // Selects ID, message and rating of the matching room_id from reviews table
        // and joins user_name and user_image from users table based on the user_id
        connection.query(
          "SELECT reviews.id, reviews.message, reviews.rating, users.name AS user_name, users.image AS user_image FROM reviews LEFT JOIN users on reviews.user_id=users.id WHERE reviews.room_id LIKE ?;",
          room_id,
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
  addReview: (review) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "INSERT INTO reviews SET ?;",
          review,
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

module.exports = reviews;
