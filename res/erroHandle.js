const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

app.get("/", (rew, res) => {
  res.send("Hello middleware");
});

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
