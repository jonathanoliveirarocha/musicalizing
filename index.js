const express = require("express");
const handlebars = require("express-handlebars");
require("./config/db");
const Songs = require("./models/Songs");
const app = express();
require("dotenv").config();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("notes");
});

app.get("/:genre", (req, res) => {
  const { genre } = req.params;

  Songs.findById(process.env.SONGS_ID)
    .then((songs) => {
      if (songs) {
        if (songs[genre]) {
          res.send(
            songs[genre][Math.floor(Math.random() * songs[genre].length)]
          );
        } else {
          res.status(204).send({ message: "Genre not registered!" });
        }
      } else {
        res.status(500).send({ message: "An internal error has occurred" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "An internal error has occurred" });
    });
});

app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on at http://localhost:${PORT}`);
});
