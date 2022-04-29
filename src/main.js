const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

xPORT = process.env.PORT || 5000;

const app = express();
const Router = express.Router();

// --------- 404
app.use(
    (err, req, res, next) => 
    {
        console.log("\n ERR: ", Date.now());
        res.status(500).send("404 Page Not Found!");
    }
);

// --------- Home
Router.get("/", getHome);

function getHome(req, res) 
{
    res.sendFile(__dirname + "/resoures/Views/Home/index.hbs");
}

// --------- Profile
Router.get("/profile", getProfile);

function getProfile(req, res) 
{
    res.sendFile(__dirname + "/resoures/Views/Profile/");
}

// --------- Login
Router.get("/login", getLogin);

function getLogin(req, res) 
{
    res.sendFile(__dirname + "/resoures/Views/Login/");
}

// --------- Register
Router.get("/register", getRegister);

function getRegister(req, res) 
{
    res.sendFile(__dirname + "/resoures/Views/Register/");
}

app.use("/", Router);
app.use(expressSession ({
    secret: "THM.AOY_WATCHES",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000
}));

app.listen(xPORT);
console.log("\n WEB tại PORT: ", xPORT);
