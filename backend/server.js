const express = require("express");
const fs = require("fs");
// const path = require("path");
const bodyParser = require("body-parser");

const mysql = require("mysql2");

// async function pullData() {
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "geofootball",
//   });

//   const fileContent = fs.readFileSync("./data/squad.json");
//   const squadData = JSON.parse(fileContent);
//   var data = [];
//   for (var i = 0; i < squadData.length; i++) {
//     data.push([
//       squadData[i].number,
//       squadData[i]["first-name"],
//       squadData[i]["last-name"],
//       squadData[i].pos,
//       squadData[i].dob,
//       squadData[i].team,
//       squadData[i].image.src,
//       squadData[i].goals,
//     ]);
//   }
//   console.log(data);
//   var q =
//     "INSERT INTO Players (PlayerNumber, FirstName, LastName, Position, DateOfBirth, Team, Image, Goals) VALUES ?";
//   // console.log(stadiumData[0].name);
//   connection.query(q, [data], function (error, results, fields) {
//     if (error) {
//       throw error;
//     }
//     console.log(results);
//   });
// }

// pullData();
// res.status(200).json({ stadiums: stadiumData });

// const q = "SELECT * as COUNT_RESULTS FROM geofootball.Stadiums";
// connection.query(q, function (error, results, fields) {
//   if (error) {
//     throw error;
//   }
//   console.log(results);
// });
// connection.end();

const app = express();

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const stadiumRoutes = require("./routes/stadiums");

app.use(express.static("player-profile-images"));
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
