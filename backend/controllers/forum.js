const Joi = require("joi");
const forum = require("../models/forum");

const getThreads = async (req, res) => {
  try {
    const response = await forum.findAllThreads();
    if (response) {
      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const getThreadByID = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await forum.findThreadById(id);
    if (response.length === 1) {
      // example on how to access the array that contains the post objects
      let postsArray = JSON.parse(response[0].posts);
      console.log(postsArray);

      res.status(200).send(response[0]);
    }
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

const createThread = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    message: Joi.string().min(3).required(),
    category: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const thread = {
    user_id: req.userData.userId,
    title: req.body.title,
    message: req.body.message,
    category: req.body.category,
  };

  try {
    const result = await forum.findByThread(thread);
    if (result.length > 0) {
      res.status(400).send({ message: "Identical thread already in database" });
      return;
    }
    const response = await forum.createThread(thread);
    if (response) {
      thread.id = response.insertId;
      res.status(201).send(thread);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const createPost = async (req, res) => {
  const id = parseInt(req.params.id);

  const schema = Joi.object({
    message: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const post = {
    user_id: req.userData.userId,
    thread_id: id,
    message: req.body.message,
  };

  try {
    const response = await forum.createPost(post);
    if (response) {
      post.id = response.insertId;
      res.status(201).send(post);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getThreads,
  getThreadByID,
  createThread,
  createPost,
};
