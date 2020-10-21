const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//====================================================
const tables = [];
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

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/reservation", function (req, res) {
    const newReservation = req.body;

    console.log(newReservation);
if (tables.length < 5 ){
    tables.push(newReservation);
    res.json(true);
}
else {
    waitlist.push(newReservation);
    res.json(false)
}
    
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});