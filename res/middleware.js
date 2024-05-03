const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

app.use(cookieParser());
/**
 * next, indicating the next middleware function.
 *
 */
const allmiddlewareWrapper = (option) => {
  console.log(option);
  return (req, res, next) => {
    if (option.log) {
      console.log("For all Application");
      next();
    } else {
      throw new Error("Server side Error");
    }
  };
};
app.use(allmiddlewareWrapper({ log: true }));

app.use(
  "/about",
  (req, res, next) => {
    console.log("middlewire 1");
    throw new Error("This is an Error");
  },
  (req, res, next) => {
    console.log("middleware 2");
    next();
    // next('fklg') // this is error
  }
);

// age error throw kora lagbe then decalr kore use kora lagbe
const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.send("Serverside Error");
};
app.use(errorMiddleware);
app.get("/", (rew, res) => {
  res.send("Hello middleware");
});

app.listen(PORT, () => {
  console.log(`Running app on ${PORT}`);
});
