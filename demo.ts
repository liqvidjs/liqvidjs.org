import {promises as fsp} from "fs";
import * as path from "path";
import * as pug from "pug";

module.exports = async (req, res ,next) => {
  const title = "ractive-player: A library for interactive videos";
  const filename = (req.url === "/" ? "/index.html" : req.url);

  try {
    const content = await fsp.readFile(path.join("public", filename));
    res.render("index", {title, content});
  } catch (e) {
    res.status(404);
    res.render("index", {title, content: "error 404"})
  }
};
