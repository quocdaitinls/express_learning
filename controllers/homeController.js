const bodyParser = require("body-parser");
const urlencodeParser = bodyParser.urlencoded({extennds: false});
const jsonParser = bodyParser.json();   

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.post("/login", urlencodeParser, function (req, res) {
        res.send("Welcome, " + req.body.username);
        console.log(req.body.username);
        console.log(req.body.password);
    });

    app.post("/loginjson", jsonParser, function (req, res) {
        res.send("Okeeee");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
};
