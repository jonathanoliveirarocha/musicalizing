const express = require("express");
const handlebars = require("express-handlebars");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const app = express();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: process.env.SESSION_KEY || "<SECRET-KEY>",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
  res.locals.error_msg = req.flash("error_msg");
  next();
});

app.get("/", (req, res) => {
  res.render("notes");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on at http://localhost:${PORT}`);
});
