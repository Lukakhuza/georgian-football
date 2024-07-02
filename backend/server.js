const express = require("express");
const fs = require("fs");
// const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const stadiumRoutes = require("./routes/stadiums");

app.use(express.static("images"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/football/stadiums", async (req, res) => {
  const fileContent = await fs.readFileSync("./data/stadiums.json");
  const stadiumData = JSON.parse(fileContent);
  res.status(200).json({ stadiums: stadiumData });
});

app.get("/football/squad", async (req, res) => {
  const fileContent = await fs.readFileSync("./data/squad.json");
  const squadData = JSON.parse(fileContent);
  res.status(200).json({ squad: squadData });
});

// app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminRoutes);
// app.use("/", shopRoutes);
// app.use("/football", stadiumRoutes);

// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });
app.listen(3001);
