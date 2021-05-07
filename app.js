const express = require("express");
const cookieParser = require("cookie-parser");
let app = express();

let apiController = require("./controllers/apiController");
let homeController = require("./controllers/homeController");

let port = 3000;

// server-here
app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());
app.set("view engine", "ejs");

// custom middleware
app.use("/", function (req, res, next) {
    console.log("Request URL: ", req.url);
    req.requestTime = new Date();
    next();
});

apiController(app);
homeController(app);

app.listen(port, function () {
    console.log("Server is listening on port: ", port);
});

// abcdef
//dsadhajld
//dsadads
//hahaha
// dsajhdsaaaa