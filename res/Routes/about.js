const express = require("express");

const AboutRouter = express.Router();

/**
 * A router object is an isolated instance of middleware and routes. 
 * You can think of it as a “mini-application,” capable only of performing 
 * middleware and routing functions. Every Express application has a built-in app router
 */

AboutRouter.get("", (rew, res) => {
  res.status(200).send("This is get about");
})
  .post("", (req, res) => {
    res.status(201).send("This is post method about");
  })
  .put("", (req, res) => {
    res.status(202).send("This is put method about");
  })
  .delete("", (req, res) => {
    res.status(202).send("This is delete method about");
  });

module.exports = AboutRouter;
