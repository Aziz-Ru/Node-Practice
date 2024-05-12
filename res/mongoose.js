const express = require("express");
const mongoose = require("mongoose");
const noteHandler=require('./Routes/notehandlers')
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose
  .connect("mongodb://localhost/note")
  .then(() => {
    console.log("Successfull connected Database");
  })
  .catch((error) => {
    console.log(error);
  });

  app.use('/note',noteHandler);

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
