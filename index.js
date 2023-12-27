const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cors = require("cors");
const path = require("path");
require("./src/config/db");
const songs = require("./src/routes/songs");

const PORT = process.env.PORT | 8000;

app.set("view engine", "handlebars");
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

app.set("views", path.join(__dirname, "/src/views"));
app.use(express.static(path.join(__dirname + "/src/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", songs);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
