import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(morgan("dev"));
app.use("/dist", express.static("dist"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src", "views"));

const handleHome = (req, res) => {
  res.render("home", { name: "potato" });
};

app.get("/", handleHome);

export default app;
