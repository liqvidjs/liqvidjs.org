import * as express from "express";
import * as compression from "compression";
const reload = require("require-nocache")(module);

/* heroku configuration */
const app = express();
if (app.get("env") === "production" && process.env.HEROKU) {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else
      next();
  });
}
app.disable("x-powered-by");

/* middleware */
app.use(compression());

/* routes */
app.set("views", "./views");
app.set("view engine", "pug");

app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/js", express.static("public/js"));

app.use((req, res, next) => {
  reload("./demo")(req, res, next);
});

/* bind to port */
app.set("port", process.env.PORT);
app.listen(app.get("port"));

if ("development" === app.get("env")) {
  console.log(`listening on port ${process.env.PORT}`);
}

// livereload
console.log(process.env.NODE_ENV);
if (app.get("env") === "development") {
  const livereload = require("livereload");
  const lrserver = livereload.createServer({
    port: 36000
  });
  lrserver.watch(__dirname + "/public/css");
}
