const express = require("express");

const HomeRouter = express.Router();

HomeRouter.route("")
  .all((req, res, next) => {
    console.log("Home Midddleware");
    next();
  })
  .get((rew, res) => {
    res.status(200).send("This is get");
  })
  .post((req, res) => {
    res.status(201).send("This is post method");
  })
  .put((req, res) => {
    console.log(req.params);
    res.status(202).send("This is put method");
  })
  .delete((req, res) => {
    res.status(202).send("This is delete method");
  });

module.exports = HomeRouter;
