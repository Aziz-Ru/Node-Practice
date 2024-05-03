const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.send("you are redirect about");
});

app.get("/", (req, res) => {
  // properties
  //   console.log(res.headersSent); // it false
  //   res.render("pages/res", { name: "bd" });
  //   console.log(res.headersSent);
  //   res.end(); //response end here
  //   res.status(300); // send status before end status
  //   res.json({ messase: "Hi" });

  //   res.sendStatus(200);
  //   send message Ok

  // res.sendStatus(300)
  // Multiple Choices
  //   res.sendStatus(400);
  // Bad Request

  //req header jabe and check krbe user kon data cai

  //   res.format({
  //     "text/plain": () => {
  //       res.send("You want data as a text or plain");
  //     },
  //     html: () => {
  //       res.send("You want data as a html");
  //     },
  //     "application/json": () => {
  //       res.send("you want json");
  //     },
  //     default: () => {
  //       res.send("default");
  //     },
  //   });

  //   res.cookie("name", "london");
  //rediret about page
  res.redirect("/about");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
