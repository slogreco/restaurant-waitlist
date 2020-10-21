const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//====================================================
const reservations = [];
const waitlist = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/table.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});