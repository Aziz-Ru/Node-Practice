const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(express.json());



app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
