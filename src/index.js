const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const route = require("./routes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Templage engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
