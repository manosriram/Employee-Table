const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const employeeData = [{}];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/showTable", (req, res) => {
    res.render("show_table", { data: employeeData });
});

app.post("/submitForm", (req, res) => {
    const {
        firstName,
        lastName,
        gender,
        email,
        pass,
        country,
        state
    } = req.body;
    const name = firstName + lastName;
    const data = {
        name,
        gender,
        email,
        pass,
        country,
        state
    };
    employeeData.push(data);
    res.render("go");
});

app.listen(port, () => console.log(`Server at ${port}`));
