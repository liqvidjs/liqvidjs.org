import * as express from "express";

const app = express();
if (app.get("env") === "production" && process.env.HEROKU) {
  app.use((req, res, next) => {
    // if (req.header("x-forwarded-proto") !== "https")
      // res.redirect(`https://${req.header("host")}${req.url}`);
    // else
      // next();
  });
}
app.disable("x-powered-by");

app.use(express.static("public"))

/* bind to port */
app.set("port", process.env.PORT);
app.listen(app.get("port"));

if ("development" === app.get("env")) {
  console.log(`listening on port ${process.env.PORT}`);
}
