const pool = require("../db/pool");

const forum = {
  findAllThreads: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT forum_threads.*, users.name AS user_name FROM forum_threads LEFT JOIN users on forum_threads.user_id=users.id;",
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
  findThreadById: (id) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "SELECT T.*,(SELECT `name` FROM users WHERE id = T.user_id) 'thread_creator',(SELECT CONCAT('[',GROUP_CONCAT(CONCAT('{\"message\":','\"', `message`, '\",\"user_name\":\"',(SELECT `name` FROM users WHERE forum_posts.user_id  = users.id),'\",'), '\"created\":\"', `created`,'\"}'),']') FROM forum_posts WHERE thread_id = T.id) 'posts' FROM forum_threads T WHERE id=?;",
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
  findByThread: (thread) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        const selectQuery =
          "SELECT * FROM forum_threads WHERE title LIKE ? AND message LIKE ? AND category LIKE ?;";
        connection.query(
          selectQuery,
          [thread.title, thread.message, thread.category],
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
  createThread: (thread) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "INSERT INTO forum_threads SET ?;",
          thread,
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
  createPost: (post) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          "INSERT INTO forum_posts SET ?;",
          post,
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

module.exports = forum;
