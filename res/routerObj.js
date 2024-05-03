const express = require("express");
const cookieParser = require("cookie-parser");
const HomeRouter = require("./Routes/home");
const AboutRouter = require("./Routes/about");
const app = express();
const PORT = 3000;

app.use("/", HomeRouter);
app.use("/about", AboutRouter);

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
